import React from 'react';
import '../Styling/BookRide.css';

const BookRide = () => {
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
								<h1 class="card-title display-3 fw-bolder mb-0 text-center">
									Book A Ride
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
			<section className="book-ride-two three">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="block-titlee">
								<div className="dot-line" />

								<p>Looking for a taxi</p>
								<h2>Make your booking</h2>
							</div>
							<div
								role="form"
								className="wpcf7"
								id="wpcf7-f118-p256-o1"
								lang="en-US"
								dir="ltr"
							>
								<div className="screen-reader-response">
									<p role="status" aria-live="polite" aria-atomic="true" />{' '}
									<ul />
								</div>

								<form>
									<div className="booking-form-two ">
										<div className="text">
											<p>
												There are many variations of passages of lorem ipsum
												available but the majority have suffered alteration in
												some form by injected humor or random word which don't
												look even slightly believable you are going to use a
												passage.
											</p>
										</div>
										<h3 className="form-block-title">Select Information</h3>

										<div className="row">
											<div className="col">
												<div className="input-holder">
													<input
														type="text"
														name="name"
														placeholder="Your name"
													/>
												</div>
											</div>

											<div className="col">
												<div className="input-holder">
													<input
														type="text"
														name="name"
														placeholder="Email address"
													/>
												</div>
											</div>
										</div>

										<div className="row">
											<div className="col">
												<div className="input-holder">
													<input
														type="phone"
														name="number"
														placeholder="Phone"
													/>
												</div>
											</div>

											<div className="col">
												<div className="input-holder">
													<input
														type="text"
														name="name"
														placeholder="Passengers #"
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<div className="input-holder">
													<input
														type="text"
														name="name"
														placeholder="Pick up address"
													/>
												</div>
											</div>

											<div className="col">
												<div className="input-holder">
													<input
														type="text"
														name="name"
														placeholder="Drop off address"
													/>
												</div>
											</div>
										</div>
										<div className="row">
											<div className="col">
												<div className="input-holder">
													<input
														type="date"
														name="name"
														placeholder="Select date"
													/>
													<i className="conexi-icon-small-calendar" />
												</div>
											</div>

											<div className="col">
												<div className="input-holder">
													<select className="selectpicker">
														<option>Select Time</option>
														<option>10AM-10.59AM</option>
														<option>12PM-12.59PM</option>
														<option>1PM-1.59PM</option>
														<option>2PM-2.59PM</option>
													</select>
													<i className="conexi-icon-clock" />
												</div>
											</div>
										</div>

										<p>
											<br />
										</p>
										<section className="select-car-type">
											<h3 className="form-block-title">Select Car Type</h3>

											<div className="row">
												<div className="col-lg-6">
													<ul className="radio-fields clearfix">
														<li>
															<input
																type="radio"
																id="test1"
																name="radio-group"
																defaultChecked=""
															/>
															<label htmlFor="test1">Any type</label>
														</li>
														<li>
															<input
																type="radio"
																id="test2"
																name="radio-group"
															/>
															<label htmlFor="test2">Hybrid</label>
														</li>
													</ul>
													<ul className="radio-fields clearfix">
														<li>
															<input
																type="radio"
																id="test3"
																name="radio-group"
															/>
															<label htmlFor="test3">SUV</label>
														</li>

														<li>
															<input
																type="radio"
																id="test4"
																name="radio-group"
															/>
															<label htmlFor="test4">Luxury</label>
														</li>
													</ul>
													<ul className="radio-fields clearfix">
														<li>
															<input
																type="radio"
																id="test5"
																name="radio-group"
															/>
															<label htmlFor="test5">Vans</label>
														</li>
													</ul>
												</div>
											</div>
										</section>
										<p>
											<br />
										</p>
										<h3 className="form-block-title">Other Information</h3>

										<div className="row">
											<div className="col-lg-6">
												<div className="input-holder">
													<select className="selectpicker">
														<option>Car model</option>
														<option>Yaris 2014</option>
														<option>E Class 2010</option>
														<option>M5 2008</option>
													</select>
												</div>
											</div>

											<div className="col-lg-6">
												<div className="input-holder">
													<select className="selectpicker">
														<option>Driver age</option>

														<option>21</option>
														<option>36</option>
														<option>42</option>
														<option>48</option>
													</select>
												</div>
											</div>

											<div className="col-lg-6">
												<div className="input-holder">
													<input
														type="text"
														name="type of driver"
														placeholder="Professional driver"
													/>
												</div>
											</div>
										</div>

										<ul className="special-checkbox">
											<li>
												<span className="input-checker">
													<input
														type="radio"
														name="apt_vehicle_services_needed"
														defaultValue=""
													/>
												</span>
												By using this form you agree to our terms &amp;
												conditions.
											</li>
										</ul>
										<p>
											<button type="submit" className="book-btn">
												Book Now
											</button>
										</p>
									</div>
									<div className="wpcf7-response-output" aria-hidden="true" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BookRide;
