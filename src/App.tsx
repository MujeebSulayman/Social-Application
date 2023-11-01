import AuthLayout from './_auth/AuthLayout';
import SigninForm from './_auth/forms/SigninForm';
import SignupForm from './_auth/forms/SignupForm';
import RootLayout from './_root/RootLayout';
import Home from './_root/pages/Home';
import './globals.css';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import {
	AllUsers,
	EditPost,
	PostDetails,
	Profile,
	Saved,
	UpdateProfile,
	CreatePost,
	Explore,
} from './_root/pages';


const App = () => {
	return (
		<main className='flex h-screen'>
			<Routes>
				{/* {PUBLIC ROUTES} */}
				<Route element={<AuthLayout />}>
					<Route
						path='/sign-in'
						element={<SigninForm />}
					/>
					<Route
						path='/sign-up'
						element={<SignupForm />}
					/>
				</Route>
				{/* PRIVATE ROUTES */}

				<Route element={<RootLayout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='/saved'
						element={<Saved />}
					/>
					<Route
						path='/explore'
						element={<Explore />}
					/>
					<Route
						path='/all-users'
						element={<AllUsers />}
					/>
					<Route
						path='/create-post'
						element={<CreatePost />}
					/>
					<Route
						path='/update-post/:id'
						element={<EditPost />}
					/>
					<Route
						path='/posts/:id'
						element={<PostDetails />}
					/>

					<Route
						path='/profile/:id/*'
						element={<Profile />}
					/>
					<Route
						path='/update-profile/:id'
						element={<UpdateProfile />}
					/>
				</Route>
			</Routes>
			<Toaster />
		</main>
	);
};

export default App;
