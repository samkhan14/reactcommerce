import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from './Navbar';

const Header = () => {
	return (
		<MainHeader>
			<header className="header_area sticky-header">
				<div className="main_menu">
					<Navbar/>
				</div>
				{/* <div className="search_input" id="search_input_box">
			<div className="container">
				<form className="d-flex justify-content-between">
					<input type="text" className="form-control" id="search_input" placeholder="Search Here" />
					<button type="submit" className="btn"></button>
					<span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
				</form>
			</div>
		</div> */}
			</header>
		</MainHeader>

	)
}

const MainHeader = styled.header`

`

export default Header;