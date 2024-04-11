import React from "react";

const InPartnershipWith = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center md:mt-10 mt-8 md:mb-20 mb-6 md:px-0 px-3'>
      <h3 className='mb-2 font-bold text-center w-full text-[17px]'>
        In partnership with
      </h3>
      <div className='md:w-[930px] max-w-[95%] w-full border border-gray-300 border-t-1 border-l-0 border-r-0 border-b-0 py-8 md:pt-12 flex flex-row flex-wrap  m-auto items-center justify-center gap-4  '>
        <img
          className='h-8'
          src='https://images-plp.ecs.prd9.eu-west-1.mvfglobal.net/wp-content/uploads/sites/5/2023/07/paychex-logo.svg?width=161&height=30&format=webply'
        />
        <img
          className='h-8'
          src='https://images-plp.ecs.prd9.eu-west-1.mvfglobal.net/wp-content/uploads/sites/5/2023/07/adp-logo.svg?width=66&height=30&format=webply'
        />
        <img
          className='h-8'
          src='https://images-plp.ecs.prd9.eu-west-1.mvfglobal.net/wp-content/uploads/sites/5/2023/10/Timetrex_Logo1.png?width=87&height=30&format=webply'
        />
        <img
          className='h-8'
          src='https://images-plp.ecs.prd9.eu-west-1.mvfglobal.net/wp-content/uploads/sites/5/2023/10/TCP02221.png?width=42&height=30&format=webply'
        />
      </div>
    </div>
  );
};

export default InPartnershipWith;
