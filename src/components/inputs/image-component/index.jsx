import React, { useState, useEffect } from "react";
import glassGif from "../../../assets/glass.gif";
const ImageComponent = ({
  question,
  setValue,
  setCurrentValue,
  goToNextStep,
  step,
  alt,
  src,
}) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentValue("image");
      setValue(step, "image");
      goToNextStep();
    }, 4500);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center '>
      {/* <img src={src} alt={alt} className='h-28 md:h-44' /> */}
      <img src={glassGif} alt={alt} className='h-28 md:h-[130px]' />
      <p className='font-bold md:text-[16px] md:px-[40px] px-[20px] text-base text-center mt-10'>
        {question}
      </p>
    </div>
  );
};

export default ImageComponent;
