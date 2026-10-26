/**
 * RSVP webhook for the wedding site.
 *
 * Paste this into Extensions → Apps Script of your RSVP Google Sheet and
 * deploy it as a web app. Setup steps: docs/rsvp-google-sheet.md
 */

// Must match RSVP_WEBHOOK_SECRET in the site's environment variables.
const SECRET = "vervang-dit-door-een-lang-willekeurig-wachtwoord";

// Who gets an email for every RSVP. Leave empty ("") to skip emails.
const NOTIFY_EMAIL = "jullie@voorbeeld.be";

const SHEET_NAME = "RSVP";
const HEADERS = ["Gast", "Komt", "Opmerking / dieet", "Laatst bijgewerkt"];

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (data.secret !== SECRET) {
    return json({ ok: false, error: "unauthorized" });
  }

  // Two guests answering at the same moment must not overwrite each other.
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    upsertRow(data);
  } finally {
    lock.releaseLock();
  }

  if (NOTIFY_EMAIL) {
    const status = data.attending ? "komt 🎉" : "kan er niet bij zijn";
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: "RSVP: " + data.guest + " " + status,
      body:
        data.guest + " " + status + "." +
        (data.note ? "\n\nOpmerking: " + data.note : "") +
        "\n\nAlle antwoorden: " + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
    });
  }

  return json({ ok: true });
}

// One row per guest: a new answer from the same guest replaces the old one.
function upsertRow(data) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight("bold");
    sheet.setFrozenRows(1);
  }

  const row = [data.guest, data.attending ? "Ja" : "Nee", data.note || "", new Date(data.savedAt)];
  const guestCount = sheet.getLastRow() - 1;
  const names = guestCount > 0 ? sheet.getRange(2, 1, guestCount, 1).getValues().flat() : [];
  const index = names.indexOf(data.guest);

  if (index >= 0) {
    sheet.getRange(index + 2, 1, 1, row.length).setValues([row]);
  } else {
    sheet.appendRow(row);
  }
}

function json(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(
    ContentService.MimeType.JSON
  );
}
