import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from "leaflet";

import locationIcon from "../assets/pin-location.svg"; // Import the engineer icon
import "./Map.css";

const Mapicon = new Icon({
  iconUrl: locationIcon,
  iconSize: [50, 50], // Adjust the size according to your icon
});

const Map = (props) => {
  const { className, style } = props;
  const position = [51.505, -0.09]; // Specify the position of the marker

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true} className={className} style={style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={Mapicon}> {/* Add Marker component with position and icon props */}
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export { Map, Mapicon };
