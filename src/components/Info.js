import React from 'react';
import styled from 'styled-components';

const Area = styled.div`
	display: flex;
	width: 1000px;
	background: #fff;
	position: relative;
	bottom: 113vh;
	margin: auto;
	border-radius: 16px;
    position: relative;
`;

const Part = styled.div`
	position: relative;
	padding: 30px 30px 10px 30px;
	flex: 1;
	text-align: left;
	& :after {
		content: "";
		position: absolute;
		top: 25%;
		right: 0;
		width: 1px;
		height: 80px;
		background-color: hsl(0, 0%, 59%);
	}
	& p {
		color: hsl(0, 0%, 59%);
		font-size: 1rem;
		margin: 0;
	}
`;

const Part1 = styled.div`
	flex: 1;
	text-align: left;
	padding: 30px 30px 10px 30px;
	& p {
		color: hsl(0, 0%, 59%);
		font-size: 1rem;
		margin: 0;
	}
`;

const Info = (props) => {
    return (
			<Area>
				<Part>
					<p>IP ADRESS</p>
					<h2>{props.ipnumber}</h2>
				</Part>
				<Part>
					<p>LOCATION</p>
					<h2>{props.location}</h2>
				</Part>
				<Part>
					<p>TIMEZONE</p>
					<h2>{props.timezone}</h2>
				</Part>
				<Part1>
					<p>ISP</p>
					<h2>{props.isp}</h2>
				</Part1>
			</Area>
		);
};

export default Info