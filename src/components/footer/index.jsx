import React from "react";
import Logo from "../../assets/white.svg";
const Footer = () => {
  return (
    <div className=' bottom-0 left-0 bg-[#101f30] flex flex-col items-center justify-center w-full px-5 '>
      <div className='flex flex-col md:flex-row justify-center items-center md:justify-end  py-5  md:items-center w-4/5 gap-4 max-w-[1080px] md:mr-[-25px]'>
        <img className=' h-[36px] md:h-[42px]' src={Logo} alt='logo' />
      </div>
      <div className='text-white py-5   border border-l-0 border-r-0 border-b-0 border-t-white m-auto text-[12px] max-w-[1080px] w-full'>
        <p>© 2024 Industry Advice - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
