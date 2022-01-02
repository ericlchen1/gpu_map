import React, { useCallback, useRef, useState } from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
    // InfoWindow,
} from "@react-google-maps/api";

import MapStyles from "./MapStyles";

import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import styles from "./ContributeMap.module.css";
import { Button, Col, Row } from "antd";


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

function UseOwnLocation({panTo}) {
    return (
        <Button type="primary" className={styles.locate} onClick={() => {
            navigator.geolocation.getCurrentPosition((position) => {
                panTo({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                });
            }, () => null);
        }}>
            Use my location
        </Button>
    );
}

function MapSearchBar ({panTo}) {
    const {
        ready, 
        value, 
        suggestions: {status, data}, 
        setValue, 
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {   // location preference for search results
            location: {lat: () => 30.267153, lng: () => -97.743061},
            radius: 200 * 1000,
        }
    });

    return (
        <div className={styles.search}>
            <Combobox 
                onSelect={async (address) => {
                    setValue(address, false);
                    clearSuggestions();

                    try {
                        const result = await getGeocode({address});
                        const { lat, lng } = await getLatLng(result[0]);
                        panTo({lat, lng});
                    } catch(error) {
                        console.log("Error!")
                    }
                }}
            >
                <ComboboxInput 
                    value={value} 
                    onChange={(e) => {
                        setValue(e.target.value)
                    }}
                    disabled={!ready}
                    placeholder="Enter an address"
                />
                <ComboboxPopover>
                    <ComboboxList>
                    {status === "OK" && 
                        data.map(({id, description}) => (
                            <ComboboxOption key={id} value={description}/>
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}

function ContributeMap ({ onLocationChange }) {
    // console.log('map rerender')
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
            <Row>
                <MapSearchBar panTo={panTo}/>
                <UseOwnLocation panTo={panTo}/>
            </Row>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
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
                            url: '/favicon.ico',
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