import React, { useState, useEffect } from "react";
import "./animation.css";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const [percentage, setPercentage] = useState(0);
  const [showRealBar, setShowRealBar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRealBar(true);
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (currentStep > totalSteps) {
      console.error("Current step cannot be greater than total steps.");
      return;
    }

    const newPercentage = Math.floor((currentStep / totalSteps) * 100);
    setPercentage(newPercentage);
  }, [currentStep, totalSteps]);

  return (
    <>
      {showRealBar === true && (
        <div className='flex items-center justify-center h-6  bg-[#F7F7F7] my-3 mb-5 w-full relative  overflow-hidden'>
          <div
            className={` h-full  bg-[#39DA95] transition-all duration-300 absolute left-0 `}
            style={{ width: `${percentage}%` }}
          />
          <span className='text-center text-xs font-medium text-gray-500 z-10'>
            Progress: {percentage}%
          </span>
        </div>
      )}
      {showRealBar === false && (
        <div className='flex items-center justify-center h-8 bg-[#F7F7F7] my-3 w-full relative rounded-lg overflow-hidden'>
          <div className='h-full absolute  bg-[#39DA95] left-0  w-1/4 moving-element ' />
        </div>
      )}
    </>
  );
};

export default ProgressBar;
