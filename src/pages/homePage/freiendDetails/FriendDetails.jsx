import React from 'react';
import useFriend from '../../../hook/useFriend';
import { useParams } from 'react-router';
import { GridLoader } from 'react-spinners';
import handleStatus from '../handleStatus';
import { HiBellSnooze } from 'react-icons/hi2';
import { LuArchive } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';
import FriendDetailsRightSide from './FriendDetailsRightSide';

const FriendDetails = () => {

    const {id} = useParams();

    const {friend,loading} = useFriend();
   
   const expectedFriend = friend.find(expfirend => expfirend.id === parseInt(id) );
   console.log(expectedFriend);
    
   if(loading){
        return <div className="flex justify-center ">
             <GridLoader color="green" />
        </div>
     }

     const {name,picture,status,tags,bio,email} = expectedFriend;


    return (
        <div className='flex gap-10 my-10 m-2 space-y-4 items-start '>
                     
        <div className='space-y-3'>
             <div className='space-y-3 bg-white shadow text-center p-3 rounded-xl'>
                  
                  <div className='w-[80%] mx-auto'>
                    <img src={picture} alt={name} className='w-[40%] mx-auto' />
                     <h1 className='text-2xl font-bold'>{name}</h1>
                  </div>

                  <div className='w-[40%] mx-auto px-3'>
                    <span className={handleStatus(status)}>{status}</span>
                  </div>
                 <div className='flex gap-3 justify-center'>
                     {
                    tags.map((tag,index)=>(
                       <p key={index} className='bg-[#CBFADB] px-3 py-1 rounded-3xl text-gray-600'>
                        {tag.toUpperCase()}</p> 
                    ))
                    }
                  </div> 

                  <p className='text-gray-600 font-semibold'><i>"{bio}"</i></p>
                  <p className='text-gray-500'>email : {email}</p>
                  

                  
              </div>
              
              <div className='flex items-center gap-2 bg-white rounded-xl py-3 justify-center font-semibold'>
                 <HiBellSnooze />
                 <span>Snooze 2 Weeks</span>
              </div>
              
               <div className='flex items-center gap-2 bg-white rounded-xl py-3 justify-center font-semibold'>
                 <LuArchive />
                 <span>Archive</span>
              </div>

               <div className='flex items-center gap-2 bg-white rounded-xl py-3 justify-center font-semibold'>
                 <RiDeleteBin6Line color='red' />
                 <span>Delete</span>
              </div>
             </div>

            <div >
                <FriendDetailsRightSide expectedFriend={expectedFriend} />
            </div>

        </div>
    );
};

export default FriendDetails;