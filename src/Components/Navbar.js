import React from 'react';
import { Link } from 'react-router-dom';

import '../Styling/Navbar.css';

const Navbar = () => {
	return (
		<>
			<header>
				<div className="container">
					<div className="row">
						<div className="col-lg-12 ">
							<nav className="navbar navbar-expand-lg navbar-light bg-warning">
								<div className="container">
									<a className="navbar-brand" href="#">
										<img
											className="img-fluid"
											src="http://ashik.templatepath.net/conexi-preview-files/images/resources/logo-1-1.png"
											alt="Awesome Image"
										/>
									</a>
									<button
										className="navbar-toggler"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#navbarSupportedContent"
										aria-controls="navbarSupportedContent"
										aria-expanded="false"
										aria-label="Toggle navigation"
									>
										<span class="navbar-toggler-icon"></span>
									</button>
									<div
										class="collapse navbar-collapse"
										id="navbarSupportedContent"
									>
										<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
											<li class="nav-item">
												<Link
													to={`/`}
													class="nav-link active"
													aria-current="page"
												>
													Home
												</Link>
											</li>
											<li class="nav-item ">
												<Link to={`/about`} class="nav-link ">
													About
												</Link>
											</li>
											<li class="nav-item ">
												<Link to={`/bookaride`} class="nav-link ">
													Book A ride
												</Link>
											</li>
											<li class="nav-item ">
												<Link to={`/contact`} class="nav-link ">
													Contact
												</Link>
											</li>
										</ul>
									</div>
									{/* <div className="social-block">
								<a href="">
									<i className="fa fa-twitter"></i>
								</a>
								<a href="">
									<i className="fa fa-facebook"></i>
								</a>
								<a href="">
									<i className="fa fa-youtube-play"></i>
								</a>

								<a href="">
									<i className="fa fa-google-plus"></i>
								</a>
							</div> */}
								</div>
							</nav>
						</div>
					</div>
				</div>
			</header>
			<div className="header"></div>
		</>
	);
};

export default Navbar;
