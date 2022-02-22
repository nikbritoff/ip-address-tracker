import 'babel-polyfill';
import { addOffset, addTileLayer, createMap, createmarkerIcon, getAddress, renderInfo, validateIPp } from './utils';

const ipInput = document.querySelector('.search-bar__input');
const btn = document.querySelector('.search-bar__btn');

const map = createMap();
const markerIcon = createmarkerIcon();
addTileLayer(map);
L.marker([51.505, -0.09], {icon: markerIcon}).addTo(map);


btn.addEventListener('click', getData);
ipInput.addEventListener('keydown', handleKey);

function getData() {
    if (validateIPp(ipInput.value)) {
        getAddress(ipInput.value)
            .then(renderInfo)
            .then(renderMap);
    }    
}

function handleKey(evt) {
    if (evt.key === 'Enter') {
        getData();
    }
}

const renderMap = (data) => {
    const {location: {lat, lng}} = data;
    
    map.setView([lat, lng]);
    L.marker([lat, lng], {icon: markerIcon}).addTo(map);

    if (window.matchMedia("max-width: 1023px").matches) {
        addOffset(map);
    }

};

document.addEventListener('DOMContentLoaded', () => {
    getAddress('8.8.8.8').then(renderMap);
});
