import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../button';
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations';
import { useEffect } from 'react';
import { useUserContext } from '@/context/AuthContext';

const Topbar = () => {
	const navigate = useNavigate();
	const { mutate: signOut, isSuccess } = useSignOutAccount();
	useEffect(() => {
		if (isSuccess) navigate(0);
	}, [isSuccess]);
	const { user } = useUserContext();

	return (
		<section className='topbar'>
			<div className='flex-between py-4 px5'>
				<Link
					to='/'
					className='flex gap-3 items-center ml-4'>
					<img
						src='/assets/images/logo.svg'
						alt='logo'
						height={325}
						width={130}
					/>
				</Link>

				<div className='flex gap-4'>
					<Button
						variant='ghost'
						className='shad-button_ghost'
						onClick={() => signOut}>
						<img
							src='/assets/icons/logout.svg'
							alt='logout'
						/>
					</Button>
					<Link
						to={`/profile${user.id}`}
						className='flex-center gap-3 mr-4'>
						<img
							src={user.imageUrl || '/assets/icons/profile-placeholder.JPG'}
							alt='avatar'
							className='h-10 w-10 rounded-full'
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Topbar;
