import React, { useState, useEffect} from 'react';
import Hero from "./components/Hero";
import Map from './components/Map';
import './App.css';


function App() {
  const [value, setValue] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [ipnumber, setIpnumber] = useState("");
  const [location, setLocation] = useState("");
  const [timezone, setTimezone] = useState("");
  const [isp, setIsp] = useState('');
  const [myIp, setMyIp] = useState("");


  const isValidIp = (value) =>
		/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
			value
		)
			? true
      : false;
      
  const getMyIp = () => {
    fetch("https://api.ipify.org?format=json")
			.then((res) => res.json())
			.then(
				(result) => {
					setMyIp(result["ip"]);
					setIpnumber(result["ip"]);
				},
				(error) => {
					console.log(error);
				}
			)
			.then(getData(myIp));
  }

  
  const getData = () => {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_4mU7LkMOE5PyVVDuP1GjaJOKCZq1Z&ipAddress=${value}`
    )
      .then((res) => res.json())
				.then(
          (result) => {
            console.log(result);
           	setLat(result["location"]["lat"]);
            setLng(result["location"]["lng"]);
            setIpnumber(result["ip"]);
            setIsp(result["isp"]);
            setLocation(result["location"]["city"]);
            setTimezone(`UTC${result["location"]["timezone"]}`);
            setValue("");

					},
					(error) => {
						console.log(error);
					}
      )
  }

  const handleSubmit = () => {
    isValidIp(value) ?
      getData()
    : alert('Enter a valid IP adress')
    };
  
useEffect(() => {
  getMyIp(); 
  // eslint-disable-next-line
}, []);

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
