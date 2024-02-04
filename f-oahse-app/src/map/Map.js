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

const milesToPixels = (distanceMiles, latitude) => {
  const earthRadiusMiles = 3958.8; // Approximate radius of the Earth in miles
  const latRadians = latitude * Math.PI / 180;
  const metersPerPixel = Math.cos(latRadians) * 2 * Math.PI * earthRadiusMiles / 256;
  return distanceMiles * 1609.34 / metersPerPixel; // Convert miles to meters and then to pixels
};
const distanceBetweenCoordinates = (lat1, lon1, lat2, lon2) => {
  const earthRadiusMiles = 3958.8; // Radius of the Earth in miles
  const dLat = (lat2 - lat1) * Math.PI / 180; // Difference in latitude
  const dLon = (lon2 - lon1) * Math.PI / 180; // Difference in longitude
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceMiles = earthRadiusMiles * c; // Distance in miles
  return distanceMiles;
};

const Map = ({ className, style, items, latitude, longitude, routecolor, findRadiusMiles }) => {
  const [zoomLevel, setZoomLevel] = useState(10);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [filteredItems, setFilteredItems] = useState(items);
  const [itemsdistance, setItemsDistance] = useState([]); // State variable to store items distance

  // Function to handle marker click event
  const handleMarkerClick = (index) => {
    setSelectedMarker(index);
    };

  // Function to filter items within the specified radius
  const findItemsWithinRadius = (latitude, longitude, items, findRadiusMiles) => {
    const filteredItems = [];
    const distances = []; // Temporary array to store distances
  
    items.forEach((item, index) => {
      const distanceMiles = distanceBetweenCoordinates(latitude, longitude, item.latitude, item.longitude);
  
      if (distanceMiles <= findRadiusMiles) {
        filteredItems.push(item);
        distances.push({ index, distance: distanceMiles.toFixed(2) }); // Push object containing index and distance
      }
    });
  
    setFilteredItems(filteredItems);
    setItemsDistance(distances); // Set distances to itemsdistance state
  };
  

  useEffect(() => {
    findItemsWithinRadius(latitude, longitude, items, findRadiusMiles);
  }, [latitude, longitude, items, findRadiusMiles]); // Updated dependencies array

  return (
    <MapContainer center={[latitude, longitude]} zoom={zoomLevel} scrollWheelZoom={true} className={className} style={style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <Marker position={[item.latitude, item.longitude]} icon={index === 0 ? Mapicon : MapOthersicon} eventHandlers={{ click: () => handleMarkerClick(index) }}>
            <Popup>
              <div>
                <small className="fw-bold fs-6">{item.name}</small> <br />
                <small className="fw-bold">({ ( itemsdistance[index] === undefined)?null:itemsdistance[index].distance} Miles)</small>
              </div>
            </Popup>
          </Marker>
          {index === 0 && filteredItems.length > 1 && selectedMarker !== null && (
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
