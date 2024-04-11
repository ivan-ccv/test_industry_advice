import React from "react";
import Logo from "../../assets/white.svg";
const Header = () => {
  return (
    <div className='h-[44px] md:h-[66px] bg-[#101f30] flex items-center justify-center w-full font-["Playfair_Display"] text-white text-4xl'>
      <img className=' h-[36px] md:h-[42px]' src={Logo} alt='logo' />
    </div>
  );
};

export default Header;
