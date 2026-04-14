import React, { useContext } from 'react';
import { Legend, Pie, PieChart } from 'recharts';
import { FriendContext } from '../../context/ContextCreate';

const StatsPage = () => {

    const {toTimeline,setToTimeLine} = useContext(FriendContext);

    const calls = toTimeline.filter(call => call.medium === "call")
    console.log(calls);

    const data = [
  { name: 'Group A', value: 400, fill: '#0088FE' },
  { name: 'Group B', value: 300, fill: '#00C49F' },
  { name: 'Group C', value: 300, fill: '#FFBB28' },
];

    return (
        <div className='my-20 w-[75%] mx-auto'>
            <h2 className='text-4xl font-bold'>Friendship Analytics</h2>
            <div className='bg-white p-3 my-3 rounded-xl'>
                <h2 className='text-xl'>By Interaction Type</h2>


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
       <Legend className='my-4' />
    </PieChart>
            
            </div>   
   
            </div>
        </div>
    );
};

export default StatsPage;