import React from 'react';

import { FaExclamationTriangle, FaHome } from "react-icons/fa";
import { Link } from 'react-router';


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-[#1f4f43] to-[#163a33] text-white px-6">
      
      <div className="text-center max-w-xl">

       
        <div className="flex justify-center mb-6">
          <FaExclamationTriangle className="text-yellow-400 text-6xl animate-bounce" />
        </div>

       
        <h1 className="text-7xl font-extrabold mb-4 tracking-widest">
          404
        </h1>

       
        <h2 className="text-2xl font-semibold mb-4">
          Oops! Page not found
        </h2>

        <p className="text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

      
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-white text-[#1f4f43] px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          <FaHome />
          Back to Home
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;