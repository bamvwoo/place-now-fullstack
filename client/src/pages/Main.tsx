import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import markerImage from "../assets/images/marker.gif";

const Main = () => {

    const [ location, setLocation ] = useState({ latitude: 0, longitude: 0 });
    const [ isTrackingEnabled, setIsTrackingEnabled ] = useState(true);

    const mapRef = useRef<naver.maps.Map>(null);
    const markerRef = useRef<naver.maps.Marker>(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });

                if (!mapRef.current) {
                    const mapOptions: naver.maps.MapOptions = {
                        center: new naver.maps.LatLng(position.coords.latitude, position.coords.longitude),
                        zoom: 17,
                        disableKineticPan: false
                    };
    
                    mapRef.current = new naver.maps.Map("mainMap", mapOptions);
                }

                if (mapRef.current) {
                    markerRef.current = new naver.maps.Marker({
                        position: new naver.maps.LatLng(position.coords.latitude, position.coords.longitude),
                        map: mapRef.current,
                        icon: {
                            content: `<img src="${markerImage}" width="300" height="300" />`,
                            size: new naver.maps.Size(300, 300),
                            anchor: new naver.maps.Point(150, 150)
                        }
                    });
                }
            });

            navigator.geolocation.watchPosition((position) => {
                if (isTrackingEnabled) {
                    setLocation({ latitude: position.coords.latitude, longitude: position.coords.longitude });

                    if (mapRef.current) {
                        mapRef.current.setCenter(new naver.maps.LatLng(position.coords.latitude, position.coords.longitude));
                    }

                    if (markerRef.current) {
                        markerRef.current.setPosition(new naver.maps.LatLng(position.coords.latitude, position.coords.longitude));
                    }
                }
            });
        }
    }, []);

    return (
        <>
            <MapContainer id="mainMap" />
        </>
    )
}

export default Main;

const MapContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;