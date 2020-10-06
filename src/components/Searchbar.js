import React from 'react';
import styled from 'styled-components';

const Search = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

const Searchbar = (props) => {
	 
	return (
		<Search>
			<Input
				type="text"
				value={props.value}
				placeholder="Type an IP address"
				onChange={(e) => props.onChange(e.target.value)}
				autoFocus
			/>
			<Button onClick={props.handleSubmit} >Alllll</Button>
		</Search>
	);
};

export default Searchbar;