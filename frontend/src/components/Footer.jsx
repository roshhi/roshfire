import React from "react";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-black pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <h2 className="text-2xl font-semibold text-black mb-4">ROSHFIRE</h2>
            <p className="text-gray-400">
              Premium weapons and accessories for enthusiasts and professionals. 
              Delivering top-notch gear with speed and reliability.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2 text-gray-400 hover:text-[#DFB159] hover:font-bold cursor-pointer">Home</li>
              <li className="mb-2 text-gray-400 hover:text-[#DFB159] hover:font-bold  cursor-pointer">Shop</li>
              <li className="mb-2 text-gray-400 hover:text-[#DFB159] hover:font-bold  cursor-pointer">About Us</li>
              <li className="mb-2 text-gray-400 hover:text-[#DFB159] hover:font-bold  cursor-pointer">Contact</li>
              <li className="mb-2 text-gray-400 hover:text-[#DFB159] hover:font-bold  cursor-pointer">Support</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Get updates on new arrivals and exclusive offers.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#f8e8cb] w-full px-3 py-2 rounded-l-md focus:outline-none text-gray-900"
              />
              <button className="bg-[#DFB159] text-white px-4 py-2 rounded-r-md hover:bg-[#f9d085] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#DFB159] pt-6 pb-4 flex flex-col md:flex-row items-center justify-center gap-5 ">
          <p className="text-gray-500 text-sm">&copy; 2025 ROSHFIRE Weapon Store. All rights reserved.</p>
          
          <div className="flex mt-4 md:mt-0 space-x-4">
            <a href="https://github.com/roshhi/roshfire" target="_blank" className="hover:text-[#DFB159] transition text-[25px]"><FaGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
