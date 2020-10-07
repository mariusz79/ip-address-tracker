import React from 'react';
import styled from 'styled-components';
import { Map, TileLayer, Marker, Popup } from "react-leaflet";




const MapContainer = styled.div`
    & .leaflet-container {
        width: 100%;
        height: 100vh;
        z-index: 0;
    }
    `;

const MapLeaflet = (props) => {
    const state = {
			lat: 51.505,
			lng: -0.09,
			zoom: 13,
		};
    const position = [state.lat, state.lng];
    return (
			<MapContainer>
				<Map center={position} zoom={state.zoom}>
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position}>
						<Popup>
							A pretty CSS3 popup. <br /> Easily customizable.
						</Popup>
					</Marker>
				</Map>
			</MapContainer>
		);

};

export default MapLeaflet;