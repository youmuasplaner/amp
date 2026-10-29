# Medikamentenplaner – Gesprächsstand (27. Okt 2026)

## Umgebungen (beide behalten!)
- **Lokal:** `localhost:5173` (npm run dev) → für Entwicklung
- **Live:** https://asplaner.pages.dev → für Internet
- **Reserviert:** https://youmus.pages.dev
- **Nicht genutzt:** youmu.de (bleibt bei Freund, unberührt)

## Was funktioniert
- App live auf Cloudflare Pages
- 9 Medikamente (im localStorage von asplaner.pages.dev)
- Export/Import (JSON)
- Titel: ⚕️ Medikamentenplaner (ohne Bindestrich)
- Tabelle: Medikament, Status, Packung leer am, Verschreibung Arzt, Bestellung Apotheke, Verbrauch, Abholung durch, Bestand, Packung, Gebühr

## In Arbeit: 8+ Punkte
- ✅ Sortieren: sortBy-State + schedules-Berechnung (in App.tsx)
- ⏳ Dropdown für Sortierung (fehlt noch → deshalb Build-Fehler)
- ⏳ Alphabetisieren (im Dropdown enthalten)
- ⏳ Filtern
- ⏳ PDF-Export

## Cloudflare Access
- Access-Anwendung existiert (per API erstellt)
- Policy: office@youmu.de (per API)
- One-time PIN aktiviert (per API)
- ABER: greift nicht auf *.pages.dev (keine aktive Zone)
- youmu.de wird NICHT genutzt

## Neon (Datenbank)
- Account + Projekt asplaner
- Tabelle medikamente (JSONB) existiert
- Connection String vorhanden (geheim)
- DATABASE_URL als Secret in Cloudflare
- Neon-Umbau: verschoben auf übermorgen

## Wichtige Dateien
- src/App.tsx (aktueller Code)
- src/App.tsx.gold (Gold-Stand)
- PROJEKT-STATUS.md
- GESPRAECHSSTAND.md
- ~/Downloads/medikamente-*.json (JSON-Backup)

## Wichtige Befehle
Dev-Server (lokal):
`cd /home/computerspende/Schreibtisch/amp && npm run dev`

Bauen + live stellen (Cloudflare):
`cd /home/computerspende/Schreibtisch/amp && npm run build && npx wrangler pages deploy dist --project-name=asplaner`

## Offene Punkte
- Dropdown für Sortierung einfügen (in gedit, nicht nano)
- Build-Fehler beheben (setSortBy wird nicht verwendet)
- Danach: Filtern, PDF-Export
- Übermorgen: Neon-Umbau
- Proxy-Problem: Mobilfunkanbieter cached alte Version

## Hinweis
- gedit funktioniert, nano nicht
- Kein Zugriff auf asplaner.pages.dev wegen Login-Schutz (Access)
- Deploy-URLs funktionieren ohne Login, zeigen aber alte Version
