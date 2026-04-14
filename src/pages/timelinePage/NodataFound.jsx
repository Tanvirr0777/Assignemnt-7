import React from 'react';
import { FaUserSlash } from 'react-icons/fa6';

const NodataFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-64 w-full text-center bg-gray-50 border border-dashed border-gray-300 rounded-xl p-6">
      <FaUserSlash className="text-5xl text-gray-400 mb-3" />

      <h2 className="text-xl font-semibold text-gray-700">
        No Friend Added In Timeline
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Your timeline is empty right now. Start adding friends to see updates here.
      </p>
    </div>
    );
};

export default NodataFound;