import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../button';
import { useSignOutAccount } from '@/lib/react-query/queriesAndMutations';
import { useEffect } from 'react';
import { useUserContext } from '@/context/AuthContext';

const LeftSidebar = () => {
	const navigate = useNavigate();
	const { mutate: signOut, isSuccess } = useSignOutAccount();
	useEffect(() => {
		if (isSuccess) navigate(0);
	}, [isSuccess]);
	const { user } = useUserContext();

	return (
		<nav className='leftSidebar py-8 px-6'>
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
            <p className='small-regular text-light-3'>
              @{user.username}
            </p>
          </div>
				</Link>
        <ul className='flex flex-col gap-6'>
          
        </ul>
			</div>
		</nav>
	);
};

export default LeftSidebar;
