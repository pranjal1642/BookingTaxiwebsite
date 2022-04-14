import React from 'react';
import Slider from 'react-slick-slider';
import '../Styling/Home.css';

const SimpleSlider = () => {
	var settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		speed: 500,
		fade: true,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<>
			<section className="bg">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<Slider {...settings}>
								<div className="wrap">
									<div className="bg-banner">
										<h1>
											Cheap & Trusted <br /> Taxi Company sety
										</h1>
										<br></br>
										<p>
											Enjoy your comfortable trip with
											<br />
											conexi taxi company
										</p>
										<div className="cta">Learn More</div>
									</div>
								</div>

								<div className="wrap">
									<h1>
										Cheap & Trusted <br /> Taxi Company
									</h1>
									<br></br>
									<p>
										Enjoy your comfortable trip with
										<br />
										conexi taxi company
									</p>
									<div className="cta">Learn More</div>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SimpleSlider;
