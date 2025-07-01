# Deel 5: PMTiles laden met MapLibre GL JS

PMTiles wordt niet standaard ondersteund door MapLibre GL JS.

- [ ] Registreer het `pmtiles://` URL-schema met behulp van de [pmtiles npm package](https://www.npmjs.com/package/pmtiles).

Voeg de volgende code toe aan `main.js`:

```js
import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);
```

---

- [ ] Laad de ProtoMaps Light stijl die je in deel 3 aan je repository hebt toegevoegd.

```diff
const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
-   style: 'https://demotiles.maplibre.org/style.json', // style URL
+   style: './assets/style.json',
    center: [0, 0], // starting position [lng, lat]
    zoom: 1 // starting zoom
});
```

---

- [ ] Stel Wageningen in als `center` en kies een initieëel zoomniveau waar we tiles hebben.

<details>
  <summary>Voorbeeld</summary>

```diff
const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
    style: './assets/style.json',
-   center: [0, 0], // starting position [lng, lat]
+   center: [51.96857, 5.66509], // starting position [lng, lat]
-   zoom: 1 // starting zoom
+   zoom: 13 // starting zoom
});
```
</details>

---

- [ ] Controleer met de web server of alles werkt. Zo ja, maak een commit met je wijzigingen.

Omdat je in deel 2 je repository als website hebt gedeployed staat deze meteen online zodra je je wijzigingen hebt gepushed.

---

- [ ] Ga naar de URL van de GitHub Pages site om te checken of het ook correct gedeployed is.

<img width="1423" alt="image" src="https://github.com/user-attachments/assets/e3e1067c-46b0-4f67-a875-1e620b7c79c7" />
