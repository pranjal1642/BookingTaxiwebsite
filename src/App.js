import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookRide from './Pages/BookRide';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/about" element={<About />} />

					<Route path="/bookaride" element={<BookRide />} />

					<Route path="/contact" element={<Contact />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
};

export default App;
