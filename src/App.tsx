import SigninForm from './_auth/forms/SigninForm';
import Home from './_root/pages/Home';
import './globals.css';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<main className='flex h-screen'>
			<Routes>
				{/* {PUBLIC ROUTES} */}
				<Route
					path='/sign-in'
					element={<SigninForm />}
				/>

				{/* PRIVATE ROUTES */}
				<Route
					index
					element={<Home />}
				/>
			</Routes>
		</main>
	);
};

export default App;
