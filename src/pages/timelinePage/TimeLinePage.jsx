import React, { useContext } from 'react';
import { FriendContext } from '../../context/ContextCreate';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { IoIosText } from 'react-icons/io';
import { FaVideo } from 'react-icons/fa';
import NodataFound from './NodataFound';

const TimeLinePage = () => {

     const iconMap = {
        call:<BiSolidPhoneCall />,
        text:<IoIosText />,
        video:<FaVideo />
    };

    const {allTimeline,toTimeline,setToTimeLine} = useContext(FriendContext);

    console.log(toTimeline);
    const handleFilter = (type) =>{
        if(type==="all"){
            setToTimeLine(allTimeline);
        }
        else{    
            const onlyShow = allTimeline.filter(element => element.medium === type)
            setToTimeLine(onlyShow)
        }
    }

     
    return (
        <div className='w-[85%] mx-auto my-15'>
            <h2 className='text-3xl font-bold mb-5'>Timeline</h2>
            <div className="dropdown dropdown-hover rounded-xl mb-8">
                 <div tabIndex={0} role="button" className="btn m-1 text-gray-400">Filter timeline</div>
                 <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a onClick={()=>{handleFilter("all")}}>All</a></li>
                 <li><a onClick={()=>{handleFilter("call")}}>Call</a></li>
                  <li><a onClick={()=>{handleFilter("text")}}>Text</a></li>
                  <li><a onClick={()=>{handleFilter("video")}}>video</a></li>
                </ul>
           </div>

           {
              toTimeline.length === 0 ? (
                <NodataFound />
              ) : (
                 <div className='space-y-3'>
            {
                toTimeline.map(friend => (
                   <div key={friend.id} className='bg-white rounded-xl p-4'>
                    <div className='flex items-center gap-3'>
                        {iconMap[friend.medium]}
                        <h2 className='font-semibold text-gray-500'>{friend.medium.toUpperCase()} WITH {friend.name.toUpperCase()}</h2>
                    </div>
                    <p className='font-semibold text-gray-500'>{friend.date}</p>
                   </div> 
                ))
            }
        </div>
              )
           }

       

        </div>
    );
};

export default TimeLinePage;