import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Polyline, MarkerProps } from 'react-leaflet';
import { Icon } from "leaflet";
import L from "leaflet";

import locationIcon from "../assets/pin-location.svg";
import pinothersIcon from "../assets/pin-others-location.svg";
import "./Map.css";

const Mapicon = new Icon({
  iconUrl: locationIcon,
  iconSize: [50, 50],
  iconAnchor: [25, 45],
});
const MapOthersicon = new Icon({
  iconUrl: pinothersIcon,
  iconSize: [50, 50],
  iconAnchor: [25, 45],
});
const Map = ({ className, style, items,latitude, longitude,routecolor }) => {
  const mapRef = useRef();
  const [selectedMarker, setSelectedMarker] = useState(null);

  const handleMarkerClick = (index) => {
    setSelectedMarker(index);
  };

  useEffect(() => {
    if (mapRef.current && items.length > 0) {
      const bounds = items.reduce((acc, item) => {
        return acc.extend([item.latitude, item.longitude]);
      }, new L.LatLngBounds());

      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [items]);

  return (
    <MapContainer ref={mapRef} center={[latitude, longitude]} zoom={13} scrollWheelZoom={true} className={className} style={style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Marker position={[item.latitude, item.longitude]} icon={index === 0 ? Mapicon : MapOthersicon} eventHandlers={{ click: () => handleMarkerClick(index) }}>
            <Popup>
              <div>
                <h6>{item.name}</h6>
                <p>{item.description}</p>
              </div>
            </Popup>
          </Marker>
          {index === 0 && <CircleMarker center={[item.latitude, item.longitude]} radius={100} />}
          {index === 0 && items.length > 1 && selectedMarker !== null && (
            <Polyline
              pathOptions={{ color: routecolor }}
              positions={[
                [items[selectedMarker].latitude, items[selectedMarker].longitude],
                [item.latitude, item.longitude]
              ]}
            />
          )}
        </React.Fragment>
      ))}
    </MapContainer>
  );
};

export { Map, Mapicon };