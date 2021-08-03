import React from "react";
import { latLngBounds } from "leaflet";
import {
  FeatureGroup,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const purpleOptions = { color: "purple" };

const Map = ({ lat, lon, city }) => {
  const newLat = lat !== undefined && lat;
  const newLon = lon !== undefined && lon;

  const center = [newLat, newLon];
  const bounds = latLngBounds([center]);

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <div className="map container container-center animate">
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={true}
        bounds={bounds}
      >
        <ChangeView center={center} zoom={13} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker
          position={center}
          icon={
            new Icon({
              iconUrl: markerIconPng,
              iconSize: [35, 55],
              iconAnchor: [17, 41],
            })
          }
        >
          <Popup>Here is {city && city}</Popup>
        </Marker>
        <FeatureGroup pathOptions={purpleOptions}></FeatureGroup>
      </MapContainer>
    </div>
  );
};

export default Map;
