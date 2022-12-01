import React from 'react'
import { NavLink } from 'react-router-dom';
import Search from './Search';
export const Navbar = () => {
  return (
                    <nav className="navbar navbar-expand-lg navbar-light main_box">
						<div className="container">
                            {/* logo */}
							<NavLink className="navbar-brand logo_h" to="/">
                                <img src="assets/img/logo.png" alt="" />
                            </NavLink>
                            {/* hamburger menu */}
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>

							<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
								<ul className="nav navbar-nav menu_nav ml-auto">
									<li className="nav-item active"><NavLink className="nav-link" to="/">Home</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/Products">Products</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/Brands">Brands</NavLink></li>
                                   
                                    <li className="nav-item"><NavLink className="nav-link" to="/Cart">Cart</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/about">About Us</NavLink></li>
                                    <li className="nav-item"><NavLink className="nav-link" to="/Contact">Contact</NavLink></li>
									{/* <li className="nav-item submenu dropdown">
										<NavLink href="javascriptvoid(0)" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
											aria-expanded="false">Shop</NavLink>
										<ul className="dropdown-menu">
											<li className="nav-item"><NavLink className="nav-link" to="category.html">Shop Category</NavLink></li>
											<li className="nav-item"><NavLink className="nav-link" to="single-product.html">Product Details</NavLink></li>
											<li className="nav-item"><NavLink className="nav-link" to="checkout.html">Product Checkout</NavLink></li>
											<li className="nav-item"><NavLink className="nav-link" to="cart.html">Shopping Cart</NavLink></li>
											<li className="nav-item"><NavLink className="nav-link" to="confirmation.html">Confirmation</NavLink></li>
										</ul>
									</li> */}
									
									{/* <li className="nav-item submenu dropdown">
										<a href="javascriptvoid(0)" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
											aria-expanded="false">Blog</a>
										<ul className="dropdown-menu">
											<li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
											<li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
										</ul>
									</li> */}
									{/* <li className="nav-item submenu dropdown">
										<a href="javascriptvoid(0)" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
											aria-expanded="false">Pages</a>
										<ul className="dropdown-menu">
											<li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
											<li className="nav-item"><a className="nav-link" href="tracking.html">Tracking</a></li>
											<li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
										</ul>
									</li> */}
									
								</ul>
							<Search />
							</div>
						</div>
					</nav>
  )
}
