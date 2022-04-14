import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import '../Styling/Footer.css';

const Footer = () => {
	return (
		<section id="fot mt-5" className="bg-dark text-light py-2">
			<footer className="footer mt-5">
				<div className="container">
					<div className="row">
						<div className="col col-sm-12 col-md-3">
							<h4>company</h4>
							<ul>
								<li>
									<a className="text-light" href="#">
										about us
									</a>
								</li>
								<li>
									<a className="text-light" href="#">
										our services
									</a>
								</li>
								<li>
									<a className="text-light" href="#">
										privacy policy
									</a>
								</li>
								<li>
									<a className="text-light" href="#">
										affiliate program
									</a>
								</li>
							</ul>
						</div>
						<div className="col col-sm-12 col-md-3">
							<h4>get help</h4>
							<ul>
								<li>
									<a className="text-light" href="#">
										FAQ
									</a>
								</li>
								<li>
									<a className="text-light" href="#">
										shipping
									</a>
								</li>
								<li>
									<a className="text-light" href="#">
										returns
									</a>
								</li>
								<li>
									<a className="text-light" href="#">
										order status
									</a>
								</li>
								<li>
									<a className="text-light" href="#">
										payment options
									</a>
								</li>
							</ul>
						</div>
						<div className="col col-sm-12 col-md-3">
							<h4>online shop</h4>
							<ul>
								<li>
									<a className="text-light" href="#">
										watch
									</a>
								</li>
								<li>
									<a className="text-light" href="#">
										bag
									</a>
								</li>
								<li>
									<a className="text-light" href="#">
										shoes
									</a>
								</li>
								<li>
									<a className="text-light" href="#">
										dress
									</a>
								</li>
							</ul>
						</div>
						<div className="col col-sm-12 col-md-3">
							<h4>follow us</h4>
							<div className="social-links">
								<a className="text-light" href="#">
									<i className="social-icons">
										<BsFacebook />
									</i>
								</a>
								<a className="text-light" href="#">
									<i className="social-icons">
										<BsTwitter />
									</i>
								</a>
								<a className="text-light" href="#">
									<i className="social-icons">
										<BsInstagram />
									</i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</section>
	);
};

export default Footer;
