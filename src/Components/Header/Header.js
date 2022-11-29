import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const Header = () => {
	return (
		<MainHeader>
			<header className="header_area sticky-header">
				<div className="main_menu">
					<nav className="navbar navbar-expand-lg navbar-light main_box">
						<div className="container">
							<NavLink className="navbar-brand logo_h" to="/"><img src="assets/img/logo.png" alt="" /></NavLink>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
								<ul className="nav navbar-nav menu_nav ml-auto">
									<li className="nav-item active"><NavLink className="nav-link" href="index.html">Home</NavLink></li>
									<li className="nav-item submenu dropdown">
										<NavLink href="javascriptvoid(0)" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
											aria-expanded="false">Shop</NavLink>
										<ul className="dropdown-menu">
											<li className="nav-item"><NavLink className="nav-link" to="category.html">Shop Category</NavLink></li>
											<li className="nav-item"><NavLink className="nav-link" to="single-product.html">Product Details</NavLink></li>
											<li className="nav-item"><NavLink className="nav-link" to="checkout.html">Product Checkout</NavLink></li>
											<li className="nav-item"><NavLink className="nav-link" to="cart.html">Shopping Cart</NavLink></li>
											<li className="nav-item"><NavLink className="nav-link" to="confirmation.html">Confirmation</NavLink></li>
										</ul>
									</li>
									<li className="nav-item"><NavLink className="nav-link" to="/about">About Us</NavLink></li>
									<li className="nav-item submenu dropdown">
										<a href="javascriptvoid(0)" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
											aria-expanded="false">Blog</a>
										<ul className="dropdown-menu">
											<li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
											<li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
										</ul>
									</li>
									<li className="nav-item submenu dropdown">
										<a href="javascriptvoid(0)" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
											aria-expanded="false">Pages</a>
										<ul className="dropdown-menu">
											<li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
											<li className="nav-item"><a className="nav-link" href="tracking.html">Tracking</a></li>
											<li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
										</ul>
									</li>
									<li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
								</ul>
								<ul className="nav navbar-nav navbar-right">
									<li className="nav-item"><a href="javascriptvoid(0)" className="cart"><span className="ti-bag"></span></a></li>
									<li className="nav-item">
										<button className="search"><span className="lnr lnr-magnifier" id="search"></span></button>
									</li>
								</ul>
							</div>
						</div>
					</nav>
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