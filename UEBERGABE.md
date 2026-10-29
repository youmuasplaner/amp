# Übergabe – Medikamentenplaner

## Pfad
/home/computerspende/Schreibtisch/amp
Datei: src/App.tsx

## Erledigt
- Name „Medikamentenplaner“ (ohne Bindestrich)
- STORE_KEY = "medikamentenplaner-v1" (ohne Bindestrich)
- Migration alter Daten (Key mit Bindestrich) eingebaut
- 9 Medikamente wieder da

## Sicherungen
src/App.tsx.sicherung-2148
src/App.tsx.sicherung-2150

## Offen
1. Nach Reload erscheint wieder „Medikamenten-Planer“ → vermutlich Vite-Cache / Browser-Cache.
   Test: Dev-Server neu starten (Strg+C, npm run dev), Browser hart neu laden (Strg+Shift+R).
   Vorher prüfen: grep -n "STORE_KEY" src/App.tsx  → muss ohne Bindestrich sein.
2. DE-Feiertage berücksichtigen → Entscheidung: bundesweit oder mit Bundesland-Dropdown?
3. Validierung: packUnits=0 → Infinity; „unbekannt“ zählt als sofort; price=0 in Summe;
   negative Eingaben; stockAsOf in Zukunft.
4. Wochenend-Fix bei Arzttermin gegenprüfen (soll schon erledigt sein).

## Nächste Sitzung
Sagen: „Medikamentenplaner, siehe UEBERGABE.md, wir machen weiter bei …“
