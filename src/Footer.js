import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGoogle, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#E6E6E6] flex items-center justify-center border-t border-gray-300 text-gray-700 text-sm mt-40 font-montserrat py-4">
      <div className="w-full max-w-[1440px] px-6 lg:px-10 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
        
        <div className="flex flex-col sm:flex-row sm:space-x-6 text-[17px] font-normal leading-[20.72px] text-[#003F6B] text-center sm:text-left">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        <div className="text-[18px] font-bold leading-[21.72px] text-center">
          All copyrights Reserved @MAI
        </div>

        <div className="flex flex-col sm:flex-row items-center space-x-3 text-[20px] text-[#003F6B]">
          <span className="text-[17px] font-normal leading-[20.72px]">Social Networks:</span>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-blue-500"><FaGoogle /></a>
            <a href="#" className="hover:text-blue-500"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
            <a href="#" className="hover:text-blue-500"><FaInstagram /></a>
            <a href="#" className="hover:text-green-500"><FaWhatsapp /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
