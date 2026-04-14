import React, { useState } from 'react';
import { FriendContext } from './ContextCreate';

const ContextProvider = ({children}) => {

    const [toTimeline,setToTimeLine] = useState([]);
    const [allTimeline, setAllTimeline] = useState([]);

    const data ={
        toTimeline,
        setToTimeLine,
        allTimeline,
        setAllTimeline
    };

    return <FriendContext.Provider value={data} >
        {children}
    </FriendContext.Provider>
};

export default ContextProvider;
