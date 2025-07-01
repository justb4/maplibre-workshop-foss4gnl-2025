# Deel 4: GeoJSON wandelroute rond Wageningen voorbereiden.

Zoek een wandelroute in/rond Wageningen. Om deze straks in MapLibre te tonen hebben we de route als GeoJSON bestand nodig. 
Er zijn meerdere mogelijkheden om daartoe te komen. Hieronder de weg die [@justb4](https://github.com/justb4/) gevolgd heeft:

1. Ga naar [hiking.waymarkedtrails.org](https://hiking.waymarkedtrails.org/). Dit zijn alle wandelroutes in OSM.
2. Linksonder in de Search box voer in "Wageningen".
3. In resultaat verschillende routes, m.n. "Wageningen On The Move" (WOTM). Kies bijvoorbeeld (rechtsboven) de Rode Route. Je kunt de route als GPX of KML bestand downloaden, maar dan zul je zelf moeten converteren. Met de OSM "Overpass" API kun je direct GeoJSON opvragen.
4. Rechtsboven zie je "Relation <nummer>" 
5. Kopieër dat Relatie Nummer
6. Ga naar de website: https://overpass-turbo.eu/#
7. Voer daar in linker venster de volgende code in:

```
/* Wageningen On The Move Rood Trail */
[out:json][timeout:25];

// Store the relation
rel(<RELATIE_NUMMER>)->.rel;

// Get member ways and their nodes
(
  way(r.rel);
  node(w); // nodes of the ways
)->.ways_and_nodes;

// Get member nodes that are *direct* members of the relation
node(r.rel)->.standalone_nodes;

// Combine all
(
  .ways_and_nodes;
  .standalone_nodes;
);
out body;
```

In `<RELATIE_NUMMER>` vul je het route OSM Relation nummer in. Klik op `Run` button.

8. Als gelukt is, gaan we de GeoJSON via clipboard in een nieuw bestand brengen.

9. Klik op `Export` en kies data 'GeoJSON' 'Copy'
10. Ga naar de 'assets' directory. Maak nieuw bestand aan, bijv met `touch wandeling.geojson` (of via menu).
11. Open dit lege bestand in editor. 
12. 'Paste' de GeoJSON uit clipboard in de editor. Nu hebben we een wandelroute als GeoJSON bestand!
13. 'Push' dit bestand net als eerder de PMTiles naar je geforkte repo: 
```
$ git add wandeling.geojson
$ git commit -m "Add wandeling.geojson"
$ git push
```

 > [!TIP]
>  Tip: GitHub kan ook GeoJSON weergeven. Bekijk het bestand op een achtergrondkaart via `https://github.com/<je github naam>/maplibre-workshop-foss4gnl-2025/blob/main/assets/wandeling.geojson`



