import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api';
import decodePolyline from 'decode-google-map-polyline';
import { useDispatch, useSelector } from "react-redux";
import { fetchRoute } from '../../Store/google-locations/Actions';

const containerStyle = {
  width: '100%',
  height: '99%',
};

function Map() {
  const gKey = import.meta.env.VITE_APP_GOOGLE_API_KEY;

  const idRoute = useSelector((state) => state.location.idRoute);
  const routeData = useSelector((state) => state.location.routeData);
  const [path,setPah] = useState("");
  const [mapCenter, setMapCenter] = useState();
  

  const [startLocation, setStartLocation] = useState(null);
  const [endLocation, setEndLocation] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    const current = idRoute?.currentLocation;
    const destination = idRoute?.destinationLocation;
    if (current && destination) {
      dispatch(fetchRoute(current, destination));
    }
  }, [idRoute, dispatch]);

  useEffect(() => {
    if(routeData){
      const startLoc = routeData[0]?.routes?.[0]?.legs?.[0]?.startLocation?.latLng;
    const endLoc = routeData[0]?.routes?.[0]?.legs?.[0]?.endLocation?.latLng;
    const path = decodePolyline(routeData?.[0]?.routes?.[0]?.polyline?.encodedPolyline || "");
    const formattedStartLoc = startLoc 
        ? { lat: startLoc.latitude, lng: startLoc.longitude } 
        : null;

    const formattedEndLoc = endLoc 
        ? { lat: endLoc.latitude, lng: endLoc.longitude } 
        : null;

        setPah(path);
        setStartLocation(formattedStartLoc);
        setEndLocation(formattedEndLoc);
        setMapCenter(formattedStartLoc)
    }
}, [routeData, idRoute]);



  const broomeBounds = {
    north: -17.900,   // top
    south: -18.015,   // bottom
    east: 122.300,    // right
    west: 122.125,
  }

  return (
    <LoadScript googleMapsApiKey={gKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={mapCenter || { lat: -17.9614, lng: 122.2359 }} 
        zoom={13}
        options={{
          restriction: {
            latLngBounds: broomeBounds,
            strictBounds: true
          },
          gestureHandling: "greedy"
        }}
      >

        {startLocation && <Marker position={startLocation} />}
        {endLocation && <Marker position={endLocation} />}

        <Polyline
          path={path}
          options={{
            strokeColor: '#0000FF', 
            strokeOpacity: 1.0,
            strokeWeight: 4,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
