import React from 'react';
import styled from 'styled-components';
import { Map, TileLayer, Marker} from "react-leaflet";
import L from "leaflet";


let icon = L.icon({
	iconRetinaUrl: require("../images/icon-location.svg"),
	iconUrl: require("../images/icon-location.svg"),
	shadowUrl: require("../images/icon-location.svg"),
});

const MapContainer = styled.div`
	& .leaflet-container {
		width: 1440px;
		height: 70vh;
		z-index: -1;
		@media (max-width: 1440px) {
			width: 100vw;
		}
	}
`;

const MapLeaflet = (props) => {
    const zoom = 14;
    const position = [props.lat, props.lng];
    return (
			<MapContainer>
				<Map center={position} zoom={zoom}>
					<TileLayer
						attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					<Marker position={position} icon={icon}>
					</Marker>
				</Map>
			</MapContainer>
		);

};

export default MapLeaflet;