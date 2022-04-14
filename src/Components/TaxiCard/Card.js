import React from 'react';
import '../../Styling/Card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TaxiCard from './TaxiCard';
import TaxiList from './TaxiList';

const Card = () => {
	return (
		<section>
			<div className="taxi">
				<div className="taxi-card">
					<div className="dot-line"></div>
					<p>Our Best Cars</p>
					<h2>Choose taxi</h2>
				</div>
				<ul className="ulist">
					<li className="taxi-list">
						<TaxiList taxiType="Hybrid Taxi" />
						<TaxiList taxiType="Town Taxi" />
						<TaxiList taxiType="Limousine Taxi" />
						<TaxiList taxiType="SUV Taxi" />
					</li>
				</ul>
			</div>

			<div className="row">
				<ul className="cards">
					<TaxiCard
						image="https://www.seekpng.com/png/detail/892-8923584_taxi-service-vijayawada-taxis.png"
						carName="Honda City 2018"
						baseRate="12.00"
						rate="4.50"
						passenger="4"
					/>
					<TaxiCard
						image="https://www.seekpng.com/png/detail/892-8923584_taxi-service-vijayawada-taxis.png"
						carName="Mercedes Benz 2021"
						baseRate="16.00"
						rate="6.50"
						passenger="4"
					/>
					<TaxiCard
						image="https://www.seekpng.com/png/detail/892-8923584_taxi-service-vijayawada-taxis.png"
						carName="XUV 2022"
						baseRate="14.00"
						rate="5.50"
						passenger="6"
					/>
				</ul>
			</div>
		</section>
	);
};

export default Card;
