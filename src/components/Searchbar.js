import React from 'react';
import styled from 'styled-components';
import Hero from './Hero';

const Search = styled.div`
    cursor: pointer;
    display: flex;
    position: relative;
    bottom: 150px;
    margin: auto;
    `;
const Input = styled.input`
	font-size: 18px;
	padding: 15px;
	width: 500px;
    border-radius: 16px 0 0 16px;
    border: none;
	&:focus,
	&:active {
		outline: none !important;
	}
`;
const Button = styled.button`
	background-color: hsl(0deg 2% 24%);
	background-image: url("./images/icon-arrow.svg");
	background-repeat: no-repeat;
	background-position: center;
	padding: 10px 25px;
	border-radius: 0 16px 16px 0;
    border: none;
    &:hover,
	&:focus {
		outline: none !important;
		background-color: hsl(0, 0%, 17%);
	}
`;

const Searchbar = (props) => {
	 
    return (
        <>
        <Hero txt="IP Address Tracker"/>
		<Search>
			<Input
				type="text"
				value={props.value}
				placeholder="Search for any IP address or domain"
				onChange={(e) => props.onChange(e.target.value)}
				autoFocus
			/>
            <Button onClick={props.handleSubmit} >
             
            </Button>
            </Search>
            </>
	);
};

export default Searchbar;