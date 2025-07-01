# Extra 1: TypeScript gebruiken

TypeScript is een taal die types aan JavaScript toevoegt. Hierdoor kan je fouten tijdens het ontwikkelen makkelijk spotten, in plaats van dat je hier pas tijdens het draaien van je programma achter komt. TypeScript is ook handig, omdat je editor of IDE je betere suggesties kan geven zoals welke methoden beschikbaar zijn op een object.

Omdat browsers geen ondersteuning voor TypeScript hebben moet je TypeScript transpileren naar JavaScript voordat je het in de browser kunt gebruiken. Een build-stap voegt extra complexiteit toe aan een webproject. Voor grotere projecten is dit meestal geen probleem, en zelfs gewenst. Maar voor kleinere projecten is het vaak niet nodig. Het leuke is dat TypeScript (de compiler) ook handig is bij JavaScript codebases!

Draai de volgende commands in de terminal:

```
npm install typescript
npm install maplibre-gl pmtiles
```

Maak een `jsconfig.json` bestand:

```json
{
  "compilerOptions": {
    "checkJS": true,
    "module": "esnext",
    "target": "esnext",
    "paths": {
        "https://esm.sh/maplibre-gl": ["./node_modules/maplibre-gl/dist/maplibre-gl.d.ts"],
        "https://esm.sh/pmtiles": ["./node_modules/pmtiles/src/index.ts"]
    }
  },
  "exclude": ["node_modules"]
}
```

Installeer the TypeScript plugin:

<img width="356" alt="image" src="https://github.com/user-attachments/assets/095e6b31-ab69-4249-afeb-485e7eb73cc0" />

Vervolgens kan je gebruik maken van auto-completion dankzij TypeScript:

<img width="541" alt="Screenshot 2025-07-01 at 19 41 08" src="https://github.com/user-attachments/assets/70b29e98-8340-4dc7-abbb-c72c4fcdfb72" />

Tot slot is het handig om een `.gitignore` bestand aan te maken met

```
node_modules
```

Zodat je de geïnstalleerde npm packages niet per ongeluk toevoegd aan je repository.
