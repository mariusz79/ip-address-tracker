import React from 'react';
import styled from 'styled-components';

const Search = styled.div`
    display: flex;
    `;
const Input = styled.input`
	font-size: 18px;
	padding: 15px;
	width: 500px;
	border-radius: 16px 0 0 16px;
	border: none;
	@media (max-width: 730px) {
		width: 70vw;
	}
	@media (max-width: 500px) {
        width: 80vw;
        font-size: 15px;
	}
	&:focus,
	&:active {
		outline: none !important;
	}
`;
const Button = styled.button`
	cursor: pointer;
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
            
	);
};

export default Searchbar;