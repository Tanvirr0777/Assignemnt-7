import React from 'react';
import useFriend from '../../hook/useFriend';
import { GridLoader } from 'react-spinners';
import FriendAcard from './FriendAcard';

const Friend = () => {

     const {friend,loading} = useFriend();

     if(loading){
        return <div className="flex justify-center ">
             <GridLoader color="green" />
        </div>
     }
     console.log("Friend",friend);

    return (
        <div className='w-[85%] mx-auto my-15'>
             <h1 className='text-3xl font-semibold'>Your Firend </h1>

             <div className='grid grid-cols-1 gap-4 my-10 md:grid-cols-2 lg:grid-cols-3'>
                {
                    friend.map(friend => (
                        <FriendAcard key={friend.id}  friend={friend} />
                    ))
                }
             </div>
        </div>
    );
};

export default Friend;