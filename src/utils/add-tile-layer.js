import L from 'leaflet';

const mapApiToken = 'pk.eyJ1IjoiYXNka2Fnc2RraGEiLCJhIjoiY2t6eWJyNmo0MDlzeDJ1bzZpMmszNDloZSJ9.e-d3EezqtkZEgl2eUC0geg';

const addTileLayer = (map) =>{
    L.tileLayer(
        `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapApiToken}`, {
        attribution: 'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.Coded by <a href="https://github.com/nikbritoff">Nikita Britov</a>.',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(map);
};

export {addTileLayer};
