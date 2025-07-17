'use client';

import { useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const pinIcon = new L.DivIcon({
  html: `<div style="font-size: 32px;">📍</div>`,
  className: '',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const UpdateMapView = ({ coords }: { coords: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, 15);
  }, [coords, map]);
  return null;
};


interface CitizenMapProps {
  position: [number, number];
  onMarkerDragEnd: (coords: [number, number]) => void;
}

const CitizenMap: React.FC<CitizenMapProps> = ({ position, onMarkerDragEnd }) => {
  const markerRef = useRef<L.Marker>(null);

  const handleDragEnd = () => {
    const marker = markerRef.current;
    if (marker) {
      const latLng = marker.getLatLng();
      onMarkerDragEnd([latLng.lat, latLng.lng]);
    }
  };

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: '60vh', width: '100%', borderRadius: '8px' }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <UpdateMapView coords={position} />
      <Marker
        position={position}
        draggable={true}
        icon={pinIcon}
        eventHandlers={{ dragend: handleDragEnd }}
        ref={markerRef}
      />
    </MapContainer>
  );
};

export default CitizenMap;
