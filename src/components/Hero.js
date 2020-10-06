import React from "react";
import styled from "styled-components";

const Herospan = styled.div`
	width: 100%;
	height: 250px;
	max-height: 250px;
	text-align: center;
	color: #fff;
	background-image: url("./images/pattern-bg.png");
	background-repeat: no-repeat;
`;

const Hero = (props) => {
	return (
		<Herospan>
			<h1>{props.txt}</h1>
		</Herospan>
	);
};

export default Hero;
