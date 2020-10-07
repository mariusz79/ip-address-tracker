import React from 'react';
import styled from 'styled-components';

const Area = styled.div`
	display: flex;
	max-width: 1000px;
	background: #fff;
	border-radius: 16px;
	position: relative;
	color: #000;
	margin-top: 2rem;
	@media (max-width: 900px) {
		font-size: 0.7rem;
	}
	@media (max-width: 730px) {
		display: block;
		padding: 5px 8vw;
	}
	@media (max-width: 500px) {
		width: 77vw;
	}
`;

const Part = styled.div`
	position: relative;
	padding: 30px 30px 10px 30px;
	flex: 1;
	text-align: left;
	@media (max-width: 730px) {
		text-align: center;
		padding: 10px 0;
	}
	& :after {
		content: "";
		position: absolute;
		top: 25%;
		right: 0;
		width: 1px;
		height: 80px;
		background-color: hsl(0, 0%, 59%);
		@media (max-width: 730px) {
			display: none;
		}
	}
	& p {
		color: hsl(0, 0%, 59%);
		font-size: 1rem;
		margin: 0;
		@media (max-width: 900px) {
            font-size: 10px;
            font-weight: 700;
		}
	}
	& h2 {
		@media (max-width: 730px) {
			margin: 5px 0 0 0;
		}
	}
`;

const Part1 = styled.div`
	flex: 1;
	text-align: left;
	padding: 30px 30px 10px 30px;
	@media (max-width: 730px) {
		text-align: center;
		padding: 10px 0;
	}
	& p {
		color: hsl(0, 0%, 59%);
		font-size: 1rem;
		margin: 0;
		@media (max-width: 900px) {
			font-size: 10px;
			font-weight: 700;
		}
	}
	& h2 {
		@media (max-width: 730px) {
			margin: 5px 0 0 0;
		}
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