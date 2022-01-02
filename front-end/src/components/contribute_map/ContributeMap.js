import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

import MapStyles from "./MapStyles";

// import { formatRelative } from 

const libraries = ["places"];
const mapContainerStyle = {
    width: "60vw",
    height: "60vh",
};
const center = {
    lat: 30.267153,
    lng: -97.743061
};
const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true
};

function ContributeMap () {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps";

    return (
        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                options={options}
            >

            </GoogleMap>
        </div>
    );
}

export default ContributeMap;