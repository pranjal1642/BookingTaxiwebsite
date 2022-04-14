import React from 'react';

function TaxiCard(props) {
	return (
		<li className="cards_item">
			<div className="card">
				<div className="card_image">
					<img src={props.image} alt="img" />
				</div>
				<div className="card_content">
					<h3 className="card_title">{props.carName}</h3>
					<div className="booktaxi">
						<p className="card_text">Base Rate: ${props.baseRate}</p>
						<p className="card_text">Per Mile/KM: ${props.rate}</p>
						<p className="card_text">Passengers: {props.passenger}</p>
						<div className=" t  text-center">
							<button className="btn  ">Book Taxi</button>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
}

export default TaxiCard;
