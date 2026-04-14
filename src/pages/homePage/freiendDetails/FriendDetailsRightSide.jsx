import React from 'react';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaVideo } from 'react-icons/fa';
import { IoIosText } from 'react-icons/io';

const FriendDetailsRightSide = ({expectedFriend}) => {
    const {days_since_contact,goal,
          next_due_date} = expectedFriend;

    return (
        <div className='space-y-6'>

            <div className='grid grid-cols-2 md:grid-cols-3 gap-3 justify-center w-[100%] mx-auto text-center'>

                <div className='bg-white p-10 shadow-lg rounded-xl'>
                    <h2 className='text-3xl font-semibold'>{days_since_contact}</h2>
                    <p className='text-gray-400'>Days Since Contact</p>
                </div>
                <div className='bg-white p-10 shadow-lg rounded-xl'>
                    <h2 className='text-3xl font-semibold'>{goal}</h2>
                    <p className='text-gray-400'>Goal(Days)</p>
                </div>
                <div className='bg-white p-10 shadow-lg rounded-xl'>
                    <h2 className='text-2xl font-semibold'>{next_due_date}</h2>
                    <p className='text-gray-400'>Next Due</p>
                </div>
            
            </div>

            <div className='bg-white rounded-xl p-5 space-y-4 shadow-lg'>
                <div className='flex justify-between items-center'>
                    <h2 className='text-xl font-bold'>Relationship Goal</h2>
                    <button className='btn'>Edit</button>
                </div>
                <p className='text-gray-600'>Connect every <span className='font-bold'>30 days</span></p>
            </div>

            <div className='bg-white rounded-xl px-4 py-6 space-y-4'>
                <h2 className='text-xl font-bold '>Quick Check-In</h2>
                <div className='grid grid-cols-2 text-center gap-4 md:grid-cols-3 '>
                    <button className='btn p-3 h-25 rounded-xl flex flex-col  justify-center gap-2 text-xl'>
                        <BiSolidPhoneCall size={25} /> 
                        Call</button>
                    <button className='btn p-3 h-25 rounded-xl flex flex-col  justify-center gap-2 text-xl'>
                        <IoIosText size={25} />
                        Text</button>
                    <button className='btn p-3 h-25 rounded-xl flex flex-col  justify-center gap-2 text-xl'>
                        <FaVideo size={25} />
                        Video</button>
                </div>
            </div>
            
        </div>
    );
};

export default FriendDetailsRightSide;