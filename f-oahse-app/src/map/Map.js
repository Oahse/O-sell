import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, CircleMarker, Polyline, MarkerProps } from 'react-leaflet';
import { Icon as micon } from "leaflet";
import L from "leaflet";
import  Icon  from "../components/Icon";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import locationIcon from "../assets/pin-location.svg";
import pinothersIcon from "../assets/pin-others-location.svg";
import { Card, Space } from 'antd';
import {Link} from "react-router-dom";

import "./Map.css";

const { Meta } = Card;

const Mapicon = new micon ({
  iconUrl: locationIcon,
  iconSize: [50, 50],
  iconAnchor: [25, 45],
});
const MapOthersicon = new micon ({
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
  const r = 6371; // Radius of the Earth in kilometers
  const p = Math.PI / 180;

  const a = 0.5 - Math.cos((lat2 - lat1) * p) / 2 +
    Math.cos(lat1 * p) * Math.cos(lat2 * p) *
    (1 - Math.cos((lon2 - lon1) * p)) / 2;

  const distanceInKilometers = 2 * r * Math.asin(Math.sqrt(a));
  const distanceInMiles = distanceInKilometers * 0.621371; // Convert to miles

  return distanceInMiles;
};

const Map = ({ className, style, items, latitude, longitude, routecolor, findRadiusMiles, showbottom }) => {
  const [zoomLevel, setZoomLevel] = useState(10);
  const [selectedMarker, setSelectedMarker] = useState(null);
  
  // Function to handle marker click event
  const handleMarkerClick = (index) => {
    setSelectedMarker(index);
    };

  const getdistance = (data)=>{
    const itemsdistance = []
    data.forEach((item, index) =>{
      itemsdistance.push(distanceBetweenCoordinates(latitude, longitude, item.latitude, item.longitude).toFixed(2))
    })
    
    return itemsdistance
  }
  // Function to filter items within the specified radius
  
  const filtered = items.filter(item => (distanceBetweenCoordinates(latitude, longitude, item.latitude, item.longitude) <= findRadiusMiles))
  const [filteredItems, setFilteredItems] = useState(filtered)

  

  
 
  return (
    <div>
      <MapContainer center={[latitude, longitude]} zoom={zoomLevel} scrollWheelZoom={true} className={className} style={style}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {filteredItems.map((item, index) => (
        <React.Fragment key={index}>
          <Marker position={[item.latitude, item.longitude]} icon={index === 0 ? Mapicon : MapOthersicon} eventHandlers={{ click: () => handleMarkerClick(index) }}>
            <Popup>
              <div>
                <small className="fw-bold fs-6">{item.name}</small> <br />
                <small className="fw-bold">({getdistance(filteredItems)[index] } Miles)</small>
              </div>
            </Popup>
          </Marker>
          {index === 0 && selectedMarker !== null && (
            <Polyline
              pathOptions={{ color: routecolor }}
              positions={[
                [filteredItems[selectedMarker].latitude, filteredItems[selectedMarker].longitude],
                [latitude, longitude]
              ]}
            />
          )}
          
        </React.Fragment>
      ))}
    </MapContainer>
      <div style={{backgroundColor:'transparent m-0'}}>
        <Icon icon={faGoogleDrive} className="map-icon" />
        {showbottom ?
        <div>
          <h6 className='ms-3 mt-0'>Engineers ({filteredItems.length-1} results)</h6>
          <div className="d-flex justify-content-center"> {/* Center horizontally */}
            <div className="-map-horizontal-scroller " style={{ width: window.innerWidth - 30}}>
              <div className="-map-scroll-content ms-1">
                {filteredItems.map((person, index) => 
                  index > 0 &&(
                    <Link className="-map-scroll-item-one text-decoration-none" to={{pathname:`/chat/${person.id}`}} state={{person: person}}   key={index}>
                        <Card hoverable key={index} cover={<img alt={person.name} src={person.picture} />} style={{ height: '20px', cursor: 'pointer',width:'120px', maxWidth:'120px' }} >
                          <Meta title={person.name} description={person.profession} style={{margin:'-24px'}} />
                          
                        </Card>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>:null}
      </div>
    </div>
  );
};

export { Map, Mapicon };
