import React, { useCallback, useRef, useState } from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";

import MapStyles from "./MapStyles";
import MapSearchBar from "../mapSearchBar/MapSearchBar";


const libraries = ["places"];

const sampleData = [
    {
        "id": 1,
        "name": "JsonTest",
        "latitude": 30.271669642392517,
        "longitude": -97.72493362426758,
        "likes": 5,
        "dislikes": 6,
        "date": "01-02-0004",
        "prices": {
            "rtx3080": 2000,
            "rtx3060": 1000
        }
    },
    {
        "id": 2,
        "name": "Something",
        "latitude": 30.269383992549212,
        "longitude": -97.75797323938977,
        "likes": 5,
        "dislikes": 6,
        "date": "01-02-0004",
        "prices": {
            "rtx3060ti": 1000,
            "rtx3080": 2000
        }
    },
    {
        "id": 3,
        "name": "Wow",
        "latitude": 30.291249600790877,
        "longitude": -97.75265173670422,
        "likes": 5,
        "dislikes": 6,
        "date": "01-02-0004",
        "prices": {
            "rtx3080": 2000,
            "rtx3070": 1000
        }
    }
]

// Styles for the map
const mapContainerStyle = {
    // width: "60vw",
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

function SearchMap () {
    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    const [markers,] = useState(sampleData);
    const [selected, setSelected] = useState(null);

    const onMapClick = useCallback((e) => {
        // setMarkers([{
        //     lat: e.latLng.lat(),
        //     lng: e.latLng.lng(),
        //     time: new Date(),
        // }]);
        console.log(e.latLng.lat());
        console.log(e.latLng.lng());
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
                        key={marker.id} 
                        position={{lat: marker.latitude, lng: marker.longitude}}
                        icon={{
                            url: '/pin.png',
                            scaledSize: new window.google.maps.Size(40,40),
                            origin: new window.google.maps.Point(0,0),
                            anchor: new window.google.maps.Point(20,20)
                        }}
                        onClick={() => {
                            setSelected(marker);
                        }}
                    />)}
                {selected ? 
                    (<InfoWindow
                        position={{lat: selected.latitude, lng: selected.longitude}}
                        onCloseClick={() => {
                            console.log(selected);
                            setSelected(null);
                        }}
                    >
                        <div>
                            <h2>{selected.name}</h2>
                            <p>{selected.date}</p>
                            {Object.entries(selected.prices).map(([key, value]) => (
                                <p>{key} - ${value}</p>
                            ))}
                        </div>
                    </InfoWindow>)
                    : null}
            </GoogleMap>
        </div>
    );
}

export default SearchMap;