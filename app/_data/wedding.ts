const mapsSearch = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const wedding = {
  couple: "Laura & Dieter",
  // Start van de ceremonie, gebruikt voor de aftelklok.
  date: "2027-05-15T10:00:00+02:00",
  dateLabel: "15 mei 2027",
  venue: {
    name: "Huis Beaucarne",
    address: "Beaucarnestraat 9, 9700 Oudenaarde",
    mapsUrl: mapsSearch("Huis Beaucarne, Beaucarnestraat 9, 9700 Oudenaarde"),
  },
  ceremony: {
    name: "Erpe-Mere",
    mapsUrl: mapsSearch("Erpe-Mere"),
  },
};
