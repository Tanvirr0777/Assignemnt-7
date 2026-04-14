import React, { useEffect, useState } from 'react';
import Friend from '../pages/homePage/Friend';

const useFriend = () => {

     const [friend,setFriend] = useState([]);
     const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async() =>{
            const res = await fetch("data.json");
            const data = await res.json();
            setFriend(data);
            setLoading(false);
        }
        fetchData();
    },[]);
    

    return {friend,loading};
};

export default useFriend;