import React from "react";

const Footer = () => {
  return (
    <div className=' bottom-0 left-0 bg-[#101f30] flex flex-col items-center justify-center w-full '>
      <div className='flex flex-col md:flex-row justify-between  py-5  md:items-center w-4/5 gap-4'>
        <div className='flex gap-3 text-bold text-white flex-col md:flex-row'>
          <p>Privacy Policy</p>
          <p>Your Privacy Choices</p>
          <p>Terms of Use</p>
        </div>
        <p className='font-["Playfair_Display"] text-white text-4xl'>
          <span className='font-bold '>Industry</span>
          Advice
        </p>
      </div>
      <div className='text-gray-400 py-5 text-center w-4/5 border border-l-0 border-r-0 border-b-0 border-t-white m-auto'>
        <p>© 2024 Industry Advice - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
