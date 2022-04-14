import React from 'react';
import '../Styling/Quote.css';
import { Row, Col, Button } from 'react-bootstrap';

const Quote = () => {
	return (
		<>
			<section className="home">
				<div className="container ml-7">
					<Row>
						<Col>
							<p>Make a call or fill form</p>
							<h3>Call our agent to get a quote.</h3>
							<Button className="btn btn-dark btn-lg p-6 mt-5  ">
								Book Taxi Now
							</Button>
						</Col>
					</Row>
				</div>
			</section>
		</>
	);
};

export default Quote;
