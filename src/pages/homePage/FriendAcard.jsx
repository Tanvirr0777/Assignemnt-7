import React from 'react';
import { Link } from 'react-router';

const FriendAcard = ({friend}) => {
     
    const {name,picture,days_since_contact,status,tags} = friend;

    const handleStatus = (status) =>{
        if(status === "Overdue"){
            return "bg-red-500 text-white rounded-2xl px-2 py-1";
        }
        if(status === "Almost due"){
            return "bg-amber-500 text-white rounded-2xl px-2 py-1";
        }else{
            return "bg-green-600 text-white rounded-2xl px-2 py-1"
        }
    }

    return (
        <Link to="/timeline" className='bg-white shadow rounded-2xl p-5 text-center space-y-5 '>
            
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
