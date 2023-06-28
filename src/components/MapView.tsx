import { useContext, useRef, useEffect } from "react";
import { Map } from "mapbox-gl";

import { MapContext, PlacesContext } from "../context";
import { Loading } from "./Loading";

export const MapView = () => {

    const { isLoading, userLocation } = useContext(PlacesContext);
    const { setMap } = useContext(MapContext); // Antes de que se cree el mapa
    const mapDiv = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if ( !isLoading ) {
            const map = new Map({
                container: mapDiv.current!, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation, // starting position [lng, lat]
                zoom: 14, // starting zoom
            });

            setMap(map);
        }
    }, )

    if (isLoading) {
        return ( <Loading /> )
    }

    return (
        <div ref={ mapDiv }
            style={{
                height: '100vh',
                left: 0,
                position: 'fixed',
                top: 0,
                width: '100vw',
            }}
        >
            { userLocation?.join(',')}
        </div>
    )
}