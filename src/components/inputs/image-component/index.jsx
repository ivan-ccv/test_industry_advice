import React, { useState, useEffect } from "react";

const ImageComponent = ({
  question,
  questionValue,
  options,
  optionValues,
  setValue,
  setToValid,
  setCurrentValue,
  fieldValue,
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
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center'>
      <img src={src} alt={alt} className='h-36' />
      <p className='font-bold text-xl'>{question}</p>
    </div>
  );
};

export default ImageComponent;
