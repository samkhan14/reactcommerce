import React from 'react'

 const Form = () => {
  return (
    <>
    <form className="row contact_form" action="https://formspree.io/f/xgeqjdoa" method="post" id="contactForm" novalidate="noValidate">
						<div className="col-md-6">
							<div className="form-group">
								<input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter your name'"/>
							</div>
							<div className="form-group">
								<input type="email" className="form-control" id="email" name="email" placeholder="Enter email address" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter email address'"/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" id="subject" name="subject" placeholder="Enter Subject" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Subject'"/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<textarea className="form-control" name="message" id="message" rows="1" placeholder="Enter Message" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Enter Message'"></textarea>
							</div>
						</div>
						<div className="col-md-12 text-right">
							<button type="submit" value="submit" className="primary-btn">Send Message</button>
						</div>
					</form>
    </>
  )
}

export default Form;