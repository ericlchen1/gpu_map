import React, { useCallback, useRef, useState } from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker
} from "@react-google-maps/api";

import MapStyles from "./MapStyles";
import MapSearchBar from "../mapSearchBar/MapSearchBar";


const libraries = ["places"];

// Styles for the map
const mapContainerStyle = {
    width: "60vw",
    height: "60vh",
};

// Auto places center of map in Austin, TX
const center = {
    lat: 30.267153,
    lng: -97.743061
};

// Change map styles
const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true
};

function ContributeMap ({ onLocationChange }) {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const [markers, setMarkers] = useState([]);

    const onMapClick = useCallback((e) => {
        setMarkers([{
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
            time: new Date(),
        }]);
        onLocationChange(e.latLng.lat(), e.latLng.lng());
    }, []);

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
    }, [])

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <div>
            <MapSearchBar panTo={panTo}/>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={center}
                options={options}
                onClick={onMapClick}
                onLoad={onMapLoad}
            >
                {markers.map(marker => 
                    <Marker 
                        key={marker.time.toISOString()} 
                        position={{lat: marker.lat, lng: marker.lng}}
                        icon={{
                            url: '/pin.png',
                            scaledSize: new window.google.maps.Size(40,40),
                            origin: new window.google.maps.Point(0,0),
                            anchor: new window.google.maps.Point(20,20)
                        }}
                    />)}

            </GoogleMap>
        </div>
    );
}

export default ContributeMap;