import React, { useEffect, useState } from 'react';


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
    }, []);
  
    return location;
  };
  
const OVERPASSENDPOINT = "https://overpass-api.de/api/interpreter";

const COUNTRIES=[]
const Road = ({country,boundingbox}) => {
    const nigeriaBoundingBox = "4.28, 2.68, 13.89, 14.68"; // Bounding box covering Nigeria
    const overpassEndpoint = OVERPASSENDPOINT;
    const [roadCoordinates, setRoadCoordinates] = useState([]);

    useEffect(() => {
        // Construct the Overpass query with the bounding box for Nigeria and filtering for roads
        const overpassQuery = `[out:json];
            (
                way[highway][!highway=street](${nigeriaBoundingBox});
            );
            out geom;`;

        // Make a POST request to the Overpass API endpoint with the query
        fetch(overpassEndpoint, {
            method: 'POST',
            body: overpassQuery,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Parse the JSON response and extract road coordinates
            const features = data.elements.filter(element => element.type === 'way');
            const coordinates = features.map(feature => {
                return feature.geometry.map(node => [node.lat, node.lon]);
            });

            // Update the state with the road coordinates
            setRoadCoordinates(coordinates);
        })
        .catch(error => {
            console.error(`Error fetching road coordinates for ${country} Nigeria:`, error);
        });
    }, []); // Empty dependency array to run once on component mount

    // Return the road coordinates array
    return roadCoordinates;
}

const Street = ({country,boundingbox}) => {
    const nigeriaBoundingBox = "4.28, 2.68, 13.89, 14.68"; // Bounding box covering Nigeria
    const overpassEndpoint = OVERPASSENDPOINT;
    const [streetCoordinates, setStreetCoordinates] = useState([]);

    useEffect(() => {
        // Construct the Overpass query with the bounding box for Nigeria and filtering for streets
        const overpassQuery = `[out:json];
            (
                way[highway=street](${nigeriaBoundingBox});
            );
            out geom;`;

        // Make a POST request to the Overpass API endpoint with the query
        fetch(overpassEndpoint, {
            method: 'POST',
            body: overpassQuery,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Parse the JSON response and extract street coordinates
            const features = data.elements.filter(element => element.type === 'way');
            const coordinates = features.map(feature => {
                return feature.geometry.map(node => [node.lat, node.lon]);
            });

            // Update the state with the street coordinates
            setStreetCoordinates(coordinates);
        })
        .catch(error => {
            console.error(`Error fetching road coordinates for ${country} Nigeria:`, error);
        });
    }, []); // Empty dependency array to run once on component mount

    // Return the street coordinates array
    return streetCoordinates;
}

export {Road,Street, useGeolocation};
