# Extra 2: Protomaps Assets Zelf Hosten

MapLibre heeft naast (vector)data verder nog nodig:

- Lettertypes (fonts) in een specifiek formaat
- Sprites voor icoontjes

Deze assets zijn specifiek per stijl en je voegt ze respectievelijk toe met het `glphys` en `sprite` property in een MapLibre style JSON document.

> [!TIP]
> Voor meer informatie zie de [Protomaps Documentatie](https://docs.protomaps.com/basemaps/maplibre#assets).

Om je kaart echt onafhankelijk te maken van externe bronnen zul je deze assets ook zelf moeten hosten.

Gebruik de volgende commands om de [basemap-assets](https://github.com/protomaps/basemaps-assets)  van Protomaps aan je repository toe te voegen.

```sh
cd assets
wget https://github.com/protomaps/basemaps-assets/archive/refs/heads/main.zip
unzip main.zip
mv basemaps-assets-main/* .
rm main.zip
rmdir basemaps-assets-main
```

Update vervolgens `glyphs` en `sprite` in je `assets/style.json` document en verwijs naar de self-hosted assets.
