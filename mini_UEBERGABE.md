# mini_Übergabe – Medikamentenplaner

Pfad: /home/computerspende/Schreibtisch/amp/src/App.tsx
Erledigt: Name ohne Bindestrich, STORE_KEY="medikamentenplaner-v1", Migration alt→neu, 9 Medikamente da.
Sicherungen: src/App.tsx.sicherung-2148 / -2150

Offen:
1) Reload zeigt wieder „Medikamenten-Planer“ → Dev-Server neu starten (Strg+C, npm run dev) + Browser hart neu laden (Strg+Shift+R); vorher: grep -n "STORE_KEY" src/App.tsx
2) DE-Feiertage → Entscheidung: bundesweit oder mit Bundesland-Dropdown?
3) Validierung: packUnits=0→Infinity; „unbekannt“ zählt als sofort; price=0 in Summe; negative Eingaben; stockAsOf in Zukunft
4) Wochenend-Fix Arzttermin gegenprüfen

Nächste Sitzung: „Medikamentenplaner, siehe mini_UEBERGABE.md, weiter bei …“
