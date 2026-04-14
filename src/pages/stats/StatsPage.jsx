import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendContext } from '../../context/ContextCreate';
import NodataFound from '../timelinePage/NodataFound';

const StatsPage = () => {

    const {toTimeline,setToTimeLine} = useContext(FriendContext);

    const calls = toTimeline.filter(call => call.medium === "call")
    console.log(calls);
    const video = toTimeline.filter(call => call.medium === "video")
    console.log(calls);
    const text = toTimeline.filter(call => call.medium === "text")
    console.log(calls);

    const callvalue = calls.length;
    const textvalue = text.length;
    const videovalue = video.length;

    const data = [
  { name: 'Call', value: callvalue, fill: '#0088FE' },
  { name: 'Text', value: textvalue, fill: '#00C49F' },
  { name: 'Video', value: videovalue, fill: '#FFBB28' },
];

    return (
        <div className='my-20 w-[75%] mx-auto'>
            <h2 className='text-4xl font-bold'>Friendship Analytics</h2>
            <div className='bg-white p-3 px-5 my-3 rounded-xl'>
                <h2 className='text-xl'>By Interaction Type</h2>

          {
            (callvalue+textvalue+videovalue) === 0 ? (
            <div className='my-5'>
                 <NodataFound />
            </div>):
            (
                <div className='w-[35%] h-[30%] mx-auto py-8'>

          <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
         <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius="50%"
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Tooltip />
       <Legend className='mt-4' />
    </PieChart>
            
            </div>   
   
            ) 
          }


            </div>
        </div>
    );
};

export default StatsPage;