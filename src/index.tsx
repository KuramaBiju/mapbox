import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamVyb2xlZGVzbWEiLCJhIjoiY2w3bGdzY2ozMDNseTNvbXVxaHRxYncyZiJ9.32B35nfbmP6KaU4PC9Admg'

if(!navigator.geolocation){
  alert('Tu navegador no tiene opción de geolocalización')
  throw new Error('Tu navegador no tiene opción de geolocalización')
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

