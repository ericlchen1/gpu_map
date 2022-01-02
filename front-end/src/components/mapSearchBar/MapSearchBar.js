import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

import styles from "./MapSearchBar.module.css";
import { Button, Row } from "antd";

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
        <Row>
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
            <UseOwnLocation panTo={panTo}></UseOwnLocation>
        </Row>
    );
}

export default MapSearchBar;