import React from 'react'

import InnerHeader from "../../Components/Inner_Banners/InnerHeader";
import Form from '../Contact/Form';

const Contact = () => {

  const heading = {
    name: "Contact Us",
    slogan: "Contact",
  };

  return (
    <div>       
        <InnerHeader heading={heading} />

	<section className="contact_area section_gap_bottom">
		<div className="container">
			<div id="mapBox" className="mapBox" data-lat="40.701083" data-lon="-74.1522848" data-zoom="13" data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
			 data-mlat="40.701083" data-mlon="-74.1522848">
			</div>
			<div className="row">
				<div className="col-lg-3">
					<div className="contact_info">
						<div className="info_item">
							<i className="lnr lnr-home"></i>
							<h6>California, United States</h6>
							<p>Santa monica bullevard</p>
						</div>
						<div className="info_item">
							<i className="lnr lnr-phone-handset"></i>
							<h6><a href="javascriptvoid(0);">00 (440) 9865 562</a></h6>
							<p>Mon to Fri 9am to 6 pm</p>
						</div>
						<div className="info_item">
							<i className="lnr lnr-envelope"></i>
							<h6><a href="javascriptvoid(0);">support@colorlib.com</a></h6>
							<p>Send us your query anytime!</p>
						</div>
					</div>
				</div>
				<div className="col-lg-9">
					<Form/>
				</div>
			</div>
		</div>
	</section>    
    </div>
  )
}
export default Contact;