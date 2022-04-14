import React from 'react';
// import { Button } from 'react-bootstrap';

function TaxiList(props) {
	return (
		<button type="button" className="card-btn">
			{props.taxiType}
		</button>
	);
}

export default TaxiList;
