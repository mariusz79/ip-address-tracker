import React, { useState} from 'react';
import Hero from "./components/Hero";
import Map from './components/Map';
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [lat, setLat] = useState(12.115);
  const [lng, setLng] = useState(-86.2362);
  const [ipnumber, setIpnumber] = useState("190.212.90.123");
  const [location, setLocation] = useState("Managua");
  const [timezone, setTimezone] = useState("UTC-06:00");
  const [isp, setIsp] = useState('SpaceX Starlink');


  const isValidIp = (value) =>
		/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
			value
		)
			? true
      : false;
      
  
  const handleSubmit = () => {
    isValidIp(value) ?
      fetch(
        `https://geo.ipify.org/api/v1?apiKey=at_4mU7LkMOE5PyVVDuP1GjaJOKCZq1Z&ipAddress=${value}`
      )
        .then((res) => res.json())
				.then(
          (result) => {
           						setLat(result["location"]["lat"]);
            setLng(result["location"]["lng"]);
            setIpnumber(value);
            setIsp(result["isp"]);
            setLocation(result["location"]["city"]);
            setTimezone(`UTC${result["location"]["timezone"]}`);
            setValue("");

					},
					(error) => {
						console.log(error);
					}
      )
    : alert('Enter a valid IP adress')
    };
  



  return (
		<div className="App">
			<Hero
				txt="IP Address Tracker"
				value={value}
				changeValue={(e) => {
					setValue(e);
				}}
				handleSubmit={handleSubmit}
				ipnumber={ipnumber}
				location={location}
				timezone={timezone}
				isp={isp}
			/>
			<Map lat={lat} lng={lng} />

		</div>
	);
}

export default App;
