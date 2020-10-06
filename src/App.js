import React, { useState } from 'react';
import Searchbar from "./components/Searchbar";
import './App.css';

function App() {
  const [value, setValue] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

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
      
      <Searchbar value={value} onChange={e => { setValue(e) }} handleSubmit={handleSubmit}/>
		</div>
	);
}

export default App;
