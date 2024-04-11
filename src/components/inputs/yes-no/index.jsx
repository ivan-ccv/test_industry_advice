import React, { useState, useEffect } from "react";

const YesNoInput = ({
  step,
  fieldValue,
  setToValid,
  setValue,
  goToNextStep,
  setCurrentValue,
  currentValueValid,
  setToInitial,
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

  const [validSelf, setValidSelf] = useState("inital");

  useEffect(() => {
    setCurrentValue(fieldValue);
  }, [fieldValue]);

  useEffect(() => {
    if (currentValueValid !== "valid" && currentValueValid !== "invalid")
      setToInitial(step);
  }, [step]);

  useEffect(() => {
    if (currentValueValid === "invalid") setValidSelf("invalid");
  }, [currentValueValid]);

  return (
    <div className='flex flex-col h-min absolute top-0 left-0 w-full '>
      <div className='justify-center md:gap-[15px] gap-[12px] flex '>
        <label
          htmlFor='yes'
          className={` inline-flex items-center justify-center text-[14px] md:text-[15px] h-[111px] w-[137px] md:h-[160px] md:w-[218px]  text-gray-500 bg-[#f9f9f9] border border-[#c6c6c6] rounded-[4px] cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-[#5EC2E6] hover:border-[#5EC2E6] has-[:checked]:shadow-custom_hover hover:shadow-md transition-all ${
            validSelf === "invalid" &&
            "!border-[#f9624e] hover:border-[#f9624e]"
          }`}
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
            <img
              src='/test_industry_advice/yes.svg'
              alt='yes'
              className='h-[60px] w-[60px]'
            />
            <p className='m-[0.3rem] font-bold text-black'>Yes</p>
          </div>
        </label>

        <label
          htmlFor='no'
          className={`inline-flex items-center justify-center text-[14px] md:text-[15px]  h-[111px] w-[137px] md:h-[160px] md:w-[218px]  text-gray-500 bg-[#f9f9f9] border border-[#c6c6c6] rounded-[4px] cursor-pointer has-[:checked]:bg-blue-50 has-[:checked]:border-[#5EC2E6] hover:border-[#5EC2E6] has-[:checked]:shadow-custom_hover hover:shadow-md transition-all ${
            validSelf === "invalid" &&
            "!border-[#f9624e] hover:border-[#f9624e]"
          }`}
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
            <img
              src='/test_industry_advice/no.svg'
              alt='no'
              className='h-[60px] w-[60px]'
            />
            <p className='m-[0.3rem] font-bold text-black'>No</p>
          </div>
        </label>
      </div>
      {validSelf === "invalid" && (
        <p className='text-[#f9624e] mt-[25px] font-normal  '>
          This field is required
        </p>
      )}
    </div>
  );
};

export default YesNoInput;
