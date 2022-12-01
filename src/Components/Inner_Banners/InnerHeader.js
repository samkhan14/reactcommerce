import React from 'react'
import { NavLink } from 'react-router-dom';
// import styled from 'styled-components'

 const InnerHeader = ({heading}) => {

    //console.log(mydata);
    const {name, slogan} = heading;

  return (
  
	<section className="banner-area organic-breadcrumb">
		<div className="container">
			<div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
				<div className="col-first">
					<h1>{name}</h1>
					<nav className="d-flex align-items-center">
						<NavLink to="/">Home<span className="lnr lnr-arrow-right"></span></NavLink>
						<NavLink to="/Products">{slogan}<span className="lnr"></span></NavLink>
						{/* <NavLink to="category.html">Fashon Category</NavLink> */}
					</nav>
				</div>
			</div>
		</div>
	</section>
	
  )
}

export default InnerHeader;
