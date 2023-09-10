import React from 'react';

import Navbar from "./Components/Navbar/Navbar"
import Body from './Components/body/body'
import Footer from './Components/footer/footer'
import { Routes, Route } from "react-router-dom";
import SignIn from './Components/signUp signIn/SignIn';
import SignUp from './Components/signUp signIn/SignUp';



function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Body />} />
				<Route path='/login' element={<SignIn />} />
				<Route path='/register' element={<SignUp />} />
			</Routes>
			
			<Footer />

		</>


	);
}


export default App;