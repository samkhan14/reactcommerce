import {useEffect} from 'react';
import InnerHeader from '../../Components/Inner_Banners/InnerHeader';
import { Link, useParams } from 'react-router-dom';
import { useProductContext } from '../../contexts/ProductContaxt';
import { ProductImage } from '../../Components/Product_Area/ProductImage';
import FormatPrice from '../../helpers/FormatPrice';
import { Star } from '../../Components/Product_Area/Star';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
	const { getSingleProduct, isSingleLoading, singleProduct} = useProductContext();	
	
	const { id } = useParams();
	//console.log(id)

	const {
		id:alias, name, company, price, description, category, stock, stars, reviews, image } = singleProduct;

	useEffect(() => {
		getSingleProduct(`${API}?id=${id}`);
	}, []);

	const heading = {
		name: name,
		slogan: name,
	};

	if (isSingleLoading) {
		return <div className='page_loading'>..........Loading</div>
	}

  return (  
    <>
  <InnerHeader  heading={heading} />

	<div className="product_image_area">
		<div className="container">
			<div className="row s_product_inner">
				<div className="col-lg-6">				
					<ProductImage images={image} />
					
				</div>
				<div className="col-lg-5 offset-lg-1">
					<div className="s_product_text">
						<h3>{name}</h3>
						<div className="stars_and_reviews">
							<Star stars={stars} reviews={reviews}/>
						</div>
						<h2 className="product_price">
							MRP:&nbsp;
							<del>
								<FormatPrice price={price + 250000} />
							</del>
						</h2>
						<h5 className="product_price">
							Deal of the Day:&nbsp;							
							<u><FormatPrice price={price} /></u>
							
						</h5>
						<h2>
							
							</h2>
						<ul className="list">
							<li><Link className="active" to="#"><span>Category</span> : {category}</Link></li>
							<li><Link><span>Availibility</span> : {stock > 0 ? "In Stock" : "Out of Stock"}</Link></li>
						</ul>
						<p>{description}</p>
						<div className="product_count">
							<label>Quantity:</label>
							<input type="text" name="qty" id="sst" maxLength="12" value="1" title="Quantity:" className="input-text qty" />
							<button onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst )) result.value++;return false;"
							 className="increase items-count" type="button"><i className="lnr lnr-chevron-up"></i></button>
							<button onClick="var result = document.getElementById('sst'); var sst = result.value; if( !isNaN( sst ) &amp;&amp; sst > 0 ) result.value--;return false;"
							 className="reduced items-count" type="button"><i className="lnr lnr-chevron-down"></i></button>
						</div>
						<div className="card_area d-flex align-items-center">
							<Link className="primary-btn" to="#">Add to Cart</Link>
							<Link className="icon_btn" to="#"><i className="lnr lnr lnr-diamond"></i></Link>
							<Link className="icon_btn" to="#"><i className="lnr lnr lnr-heart"></i></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<section className="product_description_area">
		<div className="container">
			<ul className="nav nav-tabs" id="myTab" role="tablist">
				<li className="nav-item">
					<Link className="nav-link" id="home-tab" data-toggle="tab" to="#home" role="tab" aria-controls="home" aria-selected="true">Description</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" id="profile-tab" data-toggle="tab" to="#profile" role="tab" aria-controls="profile"
					 aria-selected="false">Specification</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link" id="contact-tab" data-toggle="tab" to="#contact" role="tab" aria-controls="contact"
					 aria-selected="false">Comments</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link active" id="review-tab" data-toggle="tab" to="#review" role="tab" aria-controls="review"
					 aria-selected="false">Reviews</Link>
				</li>
			</ul>
			<div className="tab-content" id="myTabContent">
				<div className="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
					<p>{description}</p>					
				</div>
				<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
					<div className="table-responsive">
						<table className="table">
							<tbody>
								<tr>
									<td>
										<h5>Width</h5>
									</td>
									<td>
										<h5>128mm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Height</h5>
									</td>
									<td>
										<h5>508mm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Depth</h5>
									</td>
									<td>
										<h5>85mm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Weight</h5>
									</td>
									<td>
										<h5>52gm</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Quality checking</h5>
									</td>
									<td>
										<h5>yes</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Freshness Duration</h5>
									</td>
									<td>
										<h5>03days</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>When packeting</h5>
									</td>
									<td>
										<h5>Without touch of hand</h5>
									</td>
								</tr>
								<tr>
									<td>
										<h5>Each Box contains</h5>
									</td>
									<td>
										<h5>60pcs</h5>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
					<div className="row">
						<div className="col-lg-6">
							<div className="comment_list">
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-1.png" alt="" />
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<Link className="reply_btn" to="#">Reply</Link>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item reply">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-2.png" alt="" />
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<Link className="reply_btn" to="#">Reply</Link>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-3.png" alt="" />
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<h5>12th Feb, 2018 at 05:56 pm</h5>
											<Link className="reply_btn" to="#">Reply</Link>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="review_box">
								<h4>Post a comment</h4>
								<form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
									<div className="col-md-12">
										<div className="form-group">
											<input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<input type="email" className="form-control" id="email" name="email" placeholder="Email Address"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<textarea className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
										</div>
									</div>
									<div className="col-md-12 text-right">
										<button type="submit" value="submit" className="btn primary-btn">Submit Now</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
					<div className="row">
						<div className="col-lg-6">
							<div className="row total_rate">
								<div className="col-6">
									<div className="box_total">
										<h5>Overall</h5>
										<h4>{stars}</h4>
										<h6>{reviews}</h6>
									</div>
								</div>
								<div className="col-6">
									<div className="rating_list">
										<h3>Based on 3 Reviews</h3>
										<ul className="list">
											<li><Link to="#">5 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</Link></li>
											<li><Link to="#">4 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</Link></li>
											<li><Link to="#">3 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</Link></li>
											<li><Link to="#">2 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</Link></li>
											<li><Link to="#">1 Star <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i
													 className="fa fa-star"></i><i className="fa fa-star"></i> 01</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="review_list">
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-1.png" alt=""/>
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-2.png" alt=""/>
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
								<div className="review_item">
									<div className="media">
										<div className="d-flex">
											<img src="img/product/review-3.png" alt=""/>
										</div>
										<div className="media-body">
											<h4>Blake Ruiz</h4>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo</p>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="review_box">
								<h4>Add a Review</h4>
								<p>Your Rating:</p>
								<ul className="list">
									<li><Link to="#"><i className="fa fa-star"></i></Link></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link></li>
									<li><Link to="#"><i className="fa fa-star"></i></Link></li>
								</ul>
								<p>Outstanding</p>
								<form className="row contact_form" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
									<div className="col-md-12">
										<div className="form-group">
											<input type="text" className="form-control" id="name" name="name" placeholder="Your Full name" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Your Full name'"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<input type="email" className="form-control" id="email" name="email" placeholder="Email Address" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address'"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<input type="text" className="form-control" id="number" name="number" placeholder="Phone Number" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Phone Number'"/>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<textarea className="form-control" name="message" id="message" rows="1" placeholder="Review" onFocus="this.placeholder = ''" onblur="this.placeholder = 'Review'"></textarea>
										</div>
									</div>
									<div className="col-md-12 text-right">
										<button type="submit" value="submit" className="primary-btn">Submit Now</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<section className="related-product-area section_gap_bottom">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6 text-center">
					<div className="section-title">
						<h1>Deals of the Week</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
							magna aliqua.</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-9">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<Link to="#"><img src="img/r1.jpg" alt="" /></Link>
								<div className="desc">
									<Link to="#" className="title">Black lace Heels</Link>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<Link to="#"><img src="img/r2.jpg" alt=""/></Link>
								<div className="desc">
									<Link to="#" className="title">Black lace Heels</Link>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<Link to="#"><img src="img/r3.jpg" alt=""/></Link>
								<div className="desc">
									<Link to="#" className="title">Black lace Heels</Link>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<Link to="#"><img src="img/r5.jpg" alt="" /></Link>
								<div className="desc">
									<Link to="#" className="title">Black lace Heels</Link>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<Link to="#"><img src="img/r6.jpg" alt="" /></Link>
								<div className="desc">
									<Link to="#" className="title">Black lace Heels</Link>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6 mb-20">
							<div className="single-related-product d-flex">
								<Link to="#"><img src="img/r7.jpg" alt=""/></Link>
								<div className="desc">
									<Link to="#" className="title">Black lace Heels</Link>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-related-product d-flex">
								<Link to="#"><img src="img/r9.jpg" alt=""/></Link>
								<div className="desc">
									<Link to="#" className="title">Black lace Heels</Link>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-related-product d-flex">
								<Link to="#"><img src="img/r10.jpg" alt=""/></Link>
								<div className="desc">
									<Link to="#" className="title">Black lace Heels</Link>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-6">
							<div className="single-related-product d-flex">
								<Link to="#"><img src="img/r11.jpg" alt=""/></Link>
								<div className="desc">
									<Link to="#" className="title">Black lace Heels</Link>
									<div className="price">
										<h6>$189.00</h6>
										<h6 className="l-through">$210.00</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-3">
					<div className="ctg-right">
						<Link to="#" target="_blank">
							<img className="img-fluid d-block mx-auto" src="img/category/c5.jpg" alt=""/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	</section>
  </>
  
  )
}
export default SingleProduct;