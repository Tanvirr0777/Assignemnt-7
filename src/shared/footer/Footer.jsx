import React from 'react';

import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#1f4f43] text-white text-center py-16 px-6 my-10">
      
      {/* Title */}
      <h1 className="text-5xl font-bold mb-4">KeenKeeper</h1>

      {/* Subtitle */}
      <p className="text-gray-300 max-w-2xl mx-auto mb-10">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      {/* Social Links */}
      <h3 className="text-lg font-semibold mb-4">Social Links</h3>

      <div className="flex justify-center gap-4 mb-10">
        
        <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
          <FaInstagram size={18} />
        </div>

        <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
          <FaFacebookF size={18} />
        </div>

        <div className="bg-white text-black p-3 rounded-full cursor-pointer hover:scale-110 transition">
          <FaXTwitter size={18} />
        </div>

      </div>

      {/* Divider */}
      <hr className="border-gray-500 opacity-30 mb-6" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
        
        <p>© 2026 KeenKeeper. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Cookies</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;