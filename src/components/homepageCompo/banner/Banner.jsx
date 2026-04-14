import React from 'react';
import useFriend from '../../../hook/useFriend';
import { GridLoader } from 'react-spinners';

const Banner = () => {
    const {friend,loading} = useFriend();

     if(loading){
        return <div className="flex justify-center ">
             <GridLoader color="green" />
        </div>
     }
     
    return (
        <div className='mt-15 text-center'>
            <div className='space-y-4'>
                <h1 className='text-5xl font-bold'>Friends to keep close in your life</h1>
                 <p className='text-gray-500'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br /> relationships that matter most.</p>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 justify-center my-15 w-[85%] mx-auto'>

                <div className='bg-white p-10 shadow-lg rounded-xl'>
                    <h2 className='text-2xl font-semibold'>{friend.length}</h2>
                    <p>Total Friend</p>
                </div>
                <div className='bg-white p-10 shadow-lg rounded-xl'>
                    <h2 className='text-2xl font-semibold'>3</h2>
                    <p>On Track</p>
                </div>
                <div className='bg-white p-10 shadow-lg rounded-xl'>
                    <h2 className='text-2xl font-semibold'>6</h2>
                    <p>Need Attention</p>
                </div>
                <div className='bg-white p-10 shadow-lg rounded-xl'>
                    <h2 className='text-2xl font-semibold'>12</h2>
                    <p>Interactions This Month</p>
                </div>

            </div>

            <hr className='text-gray-200 w-[80%] mx-auto' />
        </div>
    );
};

export default Banner;