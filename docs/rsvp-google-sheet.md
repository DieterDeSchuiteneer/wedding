# RSVP's in een Google Sheet (+ mail)

Elk antwoord op het RSVP-formulier komt als rij in een Google Sheet terecht en
jullie krijgen er een mailtje van. De sheet kan je ook altijd openen of
downloaden als Excel (Bestand → Downloaden → Microsoft Excel).

## Eenmalige setup (± 5 minuten)

1. Maak een nieuwe Google Sheet aan, bv. "Trouw RSVP".
2. Ga naar **Extensies → Apps Script**.
3. Vervang alle code door de inhoud van [`scripts/rsvp-google-sheet.gs`](../scripts/rsvp-google-sheet.gs).
4. Pas bovenaan twee dingen aan:
   - `SECRET`: een lang willekeurig wachtwoord (bv. via een wachtwoordgenerator).
   - `NOTIFY_EMAIL`: het adres dat een mail moet krijgen per RSVP (meerdere adressen scheiden met een komma).
5. Klik op **Implementeren → Nieuwe implementatie**:
   - Type: **Web-app**
   - Uitvoeren als: **Ikzelf**
   - Wie heeft toegang: **Iedereen**
6. Geef toestemming wanneer Google erom vraagt (sheet bewerken + mail versturen namens jou).
7. Kopieer de **web-app-URL** (eindigt op `/exec`).

## De site koppelen

Zet deze twee omgevingsvariabelen, lokaal in `.env.local` en bij je hosting
(bv. Vercel → Project → Settings → Environment Variables):

```
RSVP_WEBHOOK_URL=https://script.google.com/macros/s/…/exec
RSVP_WEBHOOK_SECRET=hetzelfde-wachtwoord-als-SECRET-in-het-script
```

Herstart daarna de dev server of doe een nieuwe deploy. Zolang
`RSVP_WEBHOOK_URL` niet ingesteld is, schrijft de site de antwoorden naar
`data/rsvps.json` (handig om lokaal te testen).

## Goed om te weten

- Eén rij per gast: antwoordt iemand opnieuw, dan wordt de rij overschreven.
- Pas je later het script aan? Kies dan **Implementeren → Implementaties beheren →
  bewerken → Nieuwe versie**, anders blijft de oude code draaien en verandert de URL niet.
- Gmail-accounts kunnen via Apps Script ongeveer 100 mails per dag versturen,
  ruim genoeg voor een trouw.
