import React from "react";
import styled from "styled-components";
import Searchbar from './Searchbar';
import Info from './Info';

const Herospan = styled.div`
	width: 1440px;
	@media (max-width: 1440px) {
		width: 100vw;
	}
	height: 250px;
	max-height: 250px;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: #fff;
	background-image: url("./images/pattern-bg.png");
	background-repeat: no-repeat;
`;

const Hero = ({value, txt, handleSubmit, changeValue, ipnumber, isp, timezone, location}) => {
	return (
		<Herospan>
			<h1>{txt}</h1>

			<Searchbar
				value={value}
				onChange={changeValue}
				handleSubmit={handleSubmit}
			/>
			<Info
				ipnumber={ipnumber}
				location={location}
				timezone={timezone}
				isp={isp}
			/>
		</Herospan>
	);
};

export default Hero;
