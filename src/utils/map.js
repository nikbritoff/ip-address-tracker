import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import icon from '../../images/icon-location.svg';

const mapContainer = document.querySelector('.map');

const createMap = () => {
    const map = L.map(mapContainer, {
        center: [37.38605, -122.08385],
        zoom: 13,
    });
    const markerIcon = L.icon({
        iconUrl: icon,
        iconSize: [30, 40],    
    });

    return map;
};

const createmarkerIcon = () => {
    const markerIcon = L.icon({
        iconUrl: icon,
        iconSize: [30, 40],    
    });

    return markerIcon;
};

export {createMap, createmarkerIcon};
