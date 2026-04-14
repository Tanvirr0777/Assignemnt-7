import React from 'react';

export const handleStatus = (status) =>{
        if(status === "Overdue"){
            return "bg-red-500 text-white rounded-2xl px-2 py-1 text-center";
        }
        if(status === "Almost due"){
            return "bg-amber-500 text-white rounded-2xl px-2 py-1 text-center";
        }else{
            return "bg-green-600 text-white rounded-2xl px-2 py-1 text-center"
        }  
};

export default handleStatus;