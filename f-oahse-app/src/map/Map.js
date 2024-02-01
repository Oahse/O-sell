import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon} from "leaflet"; // Import Icon directly from Leaflet
import L from "leaflet";


import locationIcon from "../assets/pin-location.svg"; // Import the engineer icon
import pinothersIcon from "../assets/pin-others-location.svg"; // Import the engineer icon
import "./Map.css";

const Mapicon = new Icon({
  iconUrl: locationIcon,
  iconSize: [50, 50], // Adjust the size according to your icon
});
const MapOthersicon = new Icon({
  iconUrl: pinothersIcon,
  iconSize: [50, 50], // Adjust the size according to your icon
});

const useGeolocation = () => {
  const [location, setLocation] = useState({
    latitude: 6.5244,
    longitude: 3.3792,
    error: null,
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => {
          setLocation({
            ...location,
            error: error.message,
          });
        }
      );
    } else {
      setLocation({
        ...location,
        error: "Geolocation is not supported by this browser.",
      });
    }
  }, []); // Empty dependency array to run only once on component mount

  return location;
};

const Map = (props) => {
  const { latitude, longitude, error } = useGeolocation();
  const { className, style, items } = props;
  const mapRef = useRef();

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
        <Marker key={index} position={[item.latitude, item.longitude]} icon={index === 0? Mapicon : MapOthersicon}>
          <Popup>
            <div>
              <h6>{item.name}</h6>
              <p>{item.description}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export { Map, Mapicon };
