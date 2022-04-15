import React from 'react';
import '../Styling/Home.css';
import Card from '../Components/TaxiCard/Card';
import Choice from '../Components/Choice';
import SimpleSlider from '../Components/Slider';
import Form from '../Components/Form';
import Quote from '../Components/Quote';

const Home = () => {
	return (
		<>
			<SimpleSlider />
			<Form />
			<Choice />
			<Quote />
			<Card />
		</>
	);
};

export default Home;
