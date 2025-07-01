import * as maplibregl from "https://esm.sh/maplibre-gl";
import * as pmtiles from "https://esm.sh/pmtiles"

// const map = new maplibregl.Map({
//     container: 'mijnkaart', // container id
//     style: 'https://demotiles.maplibre.org/style.json', // style URL
//     center: [0, 0], // starting position [lng, lat]
//     zoom: 1 // starting zoom
// });


// add the PMTiles plugin to the maplibregl global.
const protocol = new pmtiles.Protocol();
maplibregl.addProtocol('pmtiles', protocol.tile);

const PMTILES_URL = 'assets/wageningen.pmtiles';

const p = new pmtiles.PMTiles(PMTILES_URL);

// this is so we share one instance across the JS code and the map renderer
protocol.add(p);

// we first fetch the header so we can get the center lon, lat of the map.
p.getHeader().then(h => {
    const map = new maplibregl.Map({
        container: 'mijnkaart',
        zoom: h.maxZoom - 2,
        center: [h.centerLon, h.centerLat],
        style: {
            version: 8,
            sources: {
                'wageningen_src': {
                    type: 'vector',
                    url: `pmtiles://${PMTILES_URL}`,
                    attribution: '© <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>'
                }
            },
            layers: [
                {
                    'id': 'buildings',
                    'source': 'wageningen_src',
                    'source-layer': 'landuse',
                    'type': 'fill',
                    'paint': {
                        'fill-color': 'steelblue'
                    }
                },
                {
                    'id': 'roads',
                    'source': 'wageningen_src',
                    'source-layer': 'roads',
                    'type': 'line',
                    'paint': {
                        'line-color': 'black'
                    }
                },
                {
                    'id': 'mask',
                    'source': 'wageningen_src',
                    'source-layer': 'water',
                    'type': 'fill',
                    'paint': {
                        'fill-color': 'blue'
                    }
                }
            ]
        }
    });
});
