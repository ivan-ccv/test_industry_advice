import React from "react";
import Logo from "../../assets/white.svg";
const Header = () => {
  return (
    <div className='h-20 bg-[#101f30] flex items-center justify-center w-full font-["Playfair_Display"] text-white text-4xl'>
      <img className='w-1/2 md:w-1/5' src={Logo} alt='logo' />
    </div>
  );
};

export default Header;
