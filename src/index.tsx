import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiZW1tYXZkOTgiLCJhIjoiY2xqNXppemhlMDI0ODNocG1uMW43cThlZCJ9.Y4fsNyDh6h4KFmUSlKSXZg';

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de Geolocalización');
  throw new Error('Tu navegador no tiene opción de Geolocalización');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);