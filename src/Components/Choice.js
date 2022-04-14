import React from 'react';
import '../Styling/Choice.css';

import { FaPlay, FaPhoneAlt } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';

const Choice = () => {
	return (
		<>
			<section className="homechoice">
				<Container>
					<div className="homechoice-header">
						<div className="dot-line"></div>
						<p>Welcome to conexi company</p>
						<h2>
							Your first choice
							<br /> for travelling anywhere.
						</h2>
					</div>
					<Row>
						<Col lg="6">
							<div className="homechoice-image1">
								<img
									src={`	http://ashik.templatepath.net/conexi-preview-files/images/resources/choise-1-1.png`}
								/>
							</div>
						</Col>

						<Col lg="6">
							<div className="homechoice-text">
								<div className="homechoice-video-block">
									<div className="homechoice-first-text-block">
										<h3>
											We're specialised in providing a high quality service.
										</h3>
									</div>
									<div className="homechoice-image2">
										<img
											src={`	http://ashik.templatepath.net/conexi-preview-files/images/resources/video-1-1.png`}
											alt="Loading..."
										/>
										<a
											href="#"
											className="video-popup"
											style={{ fontSize: '1.5rem' }}
										>
											<FaPlay />
										</a>
									</div>
								</div>

								<p className="homechoice-para-block">
									There are many variations of passages of lorem ipsum available
									but the majority have suffered alterations orem ipsum
									available but the majority have suffered alterations in some
									from suffered alterations in some from us.
								</p>
								<hr style={{ marginTop: '4rem' }} />
								<div className="homechoice-call-block">
									<div className="homechoice-left-block">
										<div className="icon-block">
											<FaPhoneAlt />
										</div>
										<div className="homechoice-content-block">
											<p>
												Call us now and make <br /> your booking.
											</p>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Choice;
