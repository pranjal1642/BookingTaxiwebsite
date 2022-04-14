import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegClock } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
import '../Styling/Form.css';

const Form = () => {
	return (
		<>
			<section className="book-ride">
				<Container>
					<Row>
						<Col lg="4">
							<div className="content-block">
								<div className="block-title">
									<p>Looking for taxi ?</p>
									<h2>
										Make your <br /> booking
									</h2>
								</div>
								<p>
									Our taxis commit to make your trips unique <br /> by best
									answering your needs.
								</p>
							</div>
						</Col>
						<Col lg="8">
							<form action="#">
								<Row>
									<Col lg="6">
										<div className="input-holder">
											<input type="text" placeholder="Your name" />
										</div>
									</Col>
									<Col lg="6">
										<div className="input-holder">
											<input type="text" placeholder="Email Address" />
										</div>
									</Col>
									<Col lg="6">
										<div className="input-holder">
											<input type="text" placeholder="Passengers" />
										</div>
									</Col>
									<Col lg="6">
										<div className="input-holder">
											<input type="text" placeholder="Pick up address" />
										</div>
									</Col>
									<Col lg="6">
										<div className="input-holder">
											<input type="text" placeholder="Drop off address" />
										</div>
									</Col>
									<Col lg="6">
										<div className="input-holder">
											<input type="text" placeholder="Select date" />
											<FaRegCalendarAlt />
										</div>
									</Col>
									<Col lg="6">
										<div className="input-holder">
											<input type="text" placeholder="Select Time" />
											<FaRegClock />
										</div>
									</Col>
									<Col lg="6">
										<div className="input-holder">
											<button>Book Now</button>
										</div>
									</Col>
								</Row>
							</form>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Form;
