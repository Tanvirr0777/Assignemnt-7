import React from 'react';
import { Link } from 'react-router';
import handleStatus from './handleStatus';

const FriendAcard = ({friend}) => {
    
    const {id,name,picture,days_since_contact,status,tags} = friend;


    return (
        <Link to={`/${id}`} className='bg-white shadow rounded-2xl p-5 text-center space-y-5 '>
            
            <div className='p-1 flex justify-center rounded-full border-2 border-gray-200 w-[60%] mx-auto'>
                 <img src={picture} alt={name} className='' />
            </div>
             <h2 className='text-2xl font-bold'>{name}</h2>
             <p className='text-gray-500'>{days_since_contact}d ago</p>
             <div className='flex gap-3 justify-center'>
                {
                    tags.map((tag,index)=>(
                       <p key={index} className='bg-[#CBFADB] px-3 py-1 rounded-3xl text-gray-600'>
                        {tag.toUpperCase()}</p> 
                    ))
                }
             </div>
             <div className='w-[40%] mx-auto'>
                <p className={handleStatus(status)}>  
                {status}</p>
             </div>
             
        </Link>
    );
};

export default FriendAcard;
