import React from 'react';

import '../Styling/Contact.css';

const Contact = () => {
	return (
		<>
			<div className="container-fluid p-0">
				<div className="row">
					<div className="col-lg-12 ">
						<div class="card bg-dark text-white">
							<img
								src="http://ashik.templatepath.net/conexi-preview-files/images/slider/slider-1-2.jpg"
								class="card-img"
								alt="..."
							/>
							<div class="card-img-overlay ">
								<h1 class="card-title display-3 fw-bolder  text-center">
									Contact Us
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="homechoice">
					<h1>.</h1>
					<p>Welcome to conexi company</p>
					<h2>Leave A Message</h2>
				</div>
				<div className="i">
					<form action="">
						<div className="wrapper">
							<div className="form">
								<div className="inputfield">
									<div className="inputfield">
										<input
											type="text"
											className="input"
											name="name"
											id="name"
											onChange={``}
											placeholder="Your name"
										/>
									</div>
									<div className="inputfield">
										<input
											type="text"
											className="input"
											name="email"
											onChange={``}
											id="email"
											placeholder="Your Email"
										/>
									</div>

									<div className="inputfield">
										<input
											type="number"
											className="input"
											name="mobile_number"
											id="mobile_number"
											onChange={``}
											placeholder="Phone"
										/>
									</div>
									<div className="inputfield" placeholder="Password">
										<input
											type="text"
											className="input"
											name="name"
											id="name"
											onChange={``}
											placeholder="Subject"
										/>
									</div>
									<div className="inputfield" placeholder="Password">
										<input
											type="text"
											className="input"
											name="name"
											id="name"
											onChange={``}
											placeholder="Write a message"
										/>
									</div>
								</div>
								<div class="container ">
									<div class="col-md-12 text-center  ">
										<button type="button" class="btn btn-warning  ">
											Send Message
										</button>
									</div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default Contact;
