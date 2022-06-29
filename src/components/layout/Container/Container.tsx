import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../../../utils/fix-leaflet-map-icons";

import "leaflet/dist/leaflet.css";
import "./Container.css";

export const Container = () => (
  <div className="container">
    <MapContainer center={[52.1150302, 18.8077103]} zoom={8}>
      <TileLayer
        url={"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        attribution={
          "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
        }
      />
      <Marker position={[52.1150302, 18.8077103]}>
        <Popup>Test</Popup>
      </Marker>
    </MapContainer>
  </div>
);
