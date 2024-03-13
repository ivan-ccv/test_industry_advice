import React, { useState, useEffect } from "react";

const YesNoInput = ({
  step,
  fieldValue,
  setToValid,
  setValue,
  goToNextStep,
  setCurrentValue,
}) => {
  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setValue(step, selectedValue);
    setToValid(step);
    goToNextStep();
  };
  const [inputValue, setInputValue] = useState(fieldValue);
  useEffect(() => {
    setCurrentValue(inputValue);
  }, [inputValue]);

  return (
    <div className='h-min absolute top-0 left-0 w-full justify-around flex '>
      <label
        htmlFor='yes'
        className='inline-flex items-center justify-between  p-5 px-12 md:px-20  text-gray-500 bg-[#f9f9f9] border border-gray-200 rounded-lg cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-[#5EC2E6] hover:shadow-md transition-all'
      >
        <input
          type='radio'
          value='Yes'
          id='yes'
          checked={fieldValue === "Yes"}
          onClick={handleOptionChange}
          onChange={() => null}
          required
          name='yesno'
          className='hidden peer'
        />
        <div className='flex flex-col justify-center items-center'>
          <svg
            className='h-12 md:h-20 fill-[#5EC2E6]'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z' />
          </svg>
          <p className='my-2 font-bold text-black'>Yes</p>
        </div>
      </label>

      <label
        htmlFor='no'
        className='inline-flex items-center justify-between  p-5 px-12 md:px-20 text-gray-500 bg-[#f9f9f9] border border-gray-200 rounded-lg cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-[#5EC2E6] hover:shadow-md transition-all'
      >
        <input
          type='radio'
          value='No'
          id='no'
          name='yesno'
          checked={fieldValue === "No"}
          onClick={handleOptionChange}
          onChange={() => null}
          className=' hidden peer'
        />
        <div className='flex flex-col justify-center items-center'>
          <svg
            className='h-12 md:h-20 fill-red-500'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z' />
          </svg>
          <p className='my-2 font-bold text-black'>No</p>
        </div>
      </label>
    </div>
  );
};

export default YesNoInput;
