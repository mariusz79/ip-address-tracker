import React, { useState } from 'react';
import Hero from "./components/Hero";
import Searchbar from "./components/Searchbar";
import Info from './components/Info';
import Map from './components/Map';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [ipnumber, setIpnumber] = useState('192.212.174.101');
  const [location, setLocation] = useState('Brooklyn, NY 10001');
  const [timezone, setTimezone] = useState('UTC-05:50');
  const [isp, setIsp] = useState('SpaceX Starlink');

  const handleSubmit = () => {
			fetch(
				"https://geo.ipify.org/api/v1?apiKey=at_4mU7LkMOE5PyVVDuP1GjaJOKCZq1Z&ipAddress=8.8.8.8"
			)
				.then((res) => res.json())
				.then(
					(result) => {
            setLat(result["location"]["lat"]);
						setLng(result["location"]["lng"]);
					},
					(error) => {
						console.log(error);
					}
				);
    };
  



  return (
		<div className="App">
			<Hero txt="IP Address Tracker" />
			<Map />

			<Searchbar
				value={value}
				onChange={(e) => {
					setValue(e);
				}}
				handleSubmit={handleSubmit}
			/>
			<Info
				ipnumber={ipnumber}
				location={location}
				timezone={timezone}
				isp={isp}
			/>
		</div>
	);
}

export default App;
