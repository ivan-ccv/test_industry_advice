import React from "react";
import Head from "../../assets/head.jpg";

const BubbleHead = (props) => {
  const { step, initialQuestion, question } = props;
  return (
    <div className='flex mb-5 mt-5 md:mt-10 px-2 mx-auto'>
      <img
        className='rounded-full md:h-20 md:w-20 w-16 h-16'
        width='72'
        height='72'
        src={Head}
        alt='Expert'
        aria-hidden='true'
      />
      <div className='flex mt-4'>
        <svg
          aria-hidden='true'
          width='12'
          height='10'
          viewBox='0 0 12 10'
          fill='#e6edf5'
          className='align-middle'
        >
          <path d='M0.136353 4C0.136353 4 3.98561 3.3203 6 2.5C8.77544 1.36979 10.1364 0 10.1364 0V8L0.136353 4Z'></path>
        </svg>
      </div>
      <div
        className='bg-[#E6EDF5] rounded-lg p-3 ml-[-2px] transition-all md:max-w-[600px] max-w-full'
        style={{
          width: "auto",
          height: "auto",
        }}
      >
        <div className='bubble-content'>
          <p className='font-bold'>James</p>
          {step === 0 && (
            <p className='max-w-md md:text-base text-sm'>{initialQuestion}</p>
          )}
          {step > 0 && <p className=' max-w-[350px]'>{question}</p>}
        </div>
      </div>
    </div>
  );
};

export default BubbleHead;
