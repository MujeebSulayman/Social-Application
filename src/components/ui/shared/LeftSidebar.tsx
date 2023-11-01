import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Button } from '../button';
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations';
import { useEffect } from 'react';
import { useUserContext } from '@/context/AuthContext';
import { sidebarLinks } from '@/constants';
import { INavLink } from '@/types';

const LeftSidebar = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const { mutate: signOut, isSuccess } = useSignOutAccount();
	useEffect(() => {
		if (isSuccess) navigate(0);
	}, [isSuccess]);
	const { user } = useUserContext();

	return (
		<nav className='leftSidebar py-4 px-6 flex flex-col justify-between'>
			<div className='flex flex-col gap-11'>
				<Link
					to={`/profile${user.id}`}
					className='flex-center gap-3'>
					<img
						src={user.imageUrl || '/assets/images/profile-placeholder.JPG'}
						alt='avatar'
						className='h-10 w-10 rounded-full'
					/>
					<div className='flex flex-col'>
						<p className='body-bold'>{user.name} </p>
						<p className='small-regular text-light-3'>@{user.username}</p>
					</div>
				</Link>
				<ul className='flex flex-col gap-6'>
					{sidebarLinks.map((link: INavLink) => {
						const isActive = pathname === link.route;

						return (
							<li
								key={link.label}
								className={`leftsidebar-link group ${
									isActive && 'bg-primary-500'
								}`}>
								<NavLink
									to={link.route}
									className='flex gap-4 items-center p-4'>
									<img
										src={link.imgURL}
										alt={link.label}
										className={`group-hover:invert-white ${
											isActive && 'invert-white'
										}`}
									/>
									{link.label}
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>

			<Button
				variant='ghost'
				className='shad-button_ghost'
				onClick={() => signOut}>
				<img
					src='/assets/icons/logout.svg'
					alt='logout'
				/>
				<p className='small-medium lg:base-medium'>Logout</p>
			</Button>
		</nav>
	);
};

export default LeftSidebar;
