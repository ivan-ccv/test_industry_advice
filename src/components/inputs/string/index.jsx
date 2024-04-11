import React, { useState, useEffect } from "react";

const StringInput = ({
  step,
  fieldValue,
  setToValid,
  setToInvalid,
  setValue,
  goToNextStep,
  typeBre,
  icon,
  quote,
  placeholder,
  regex,
  setCurrentValue,
  setToInitial,
  currentValueValid,
  setValueAboveToInvalid,
  setValueAboveToValid,
}) => {
  const [inputValue, setInputValue] = useState(fieldValue);
  const [validSelf, setValidSelf] = useState("inital");

  useEffect(() => {
    if (fieldValue !== null) {
      checkInputValidity(inputValue);
    }
  }, [inputValue]);

  useEffect(() => {
    setCurrentValue(inputValue);
  }, [inputValue]);

  const setValueIfValid = () => {
    if (validSelf === "valid") {
      setValue(step, inputValue);
      setToValid(step);
      if (goToNextStep) {
        goToNextStep();
      }
    }
  };
  useEffect(() => {
    if (currentValueValid !== "valid" && currentValueValid !== "invalid")
      setToInitial(step);
  }, [step]);
  // CHANGE
  useEffect(() => {
    if (currentValueValid === "invalid" && validSelf !== "valid")
      setValidSelf("invalid");
  }, [currentValueValid, validSelf]);

  useEffect(() => {
    if (validSelf === "valid") {
      setToValid(step);
    } else if (validSelf === "invalid") {
      setToInvalid(step);
    }
  }, [validSelf, step]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setValue(step, e.target.value);
    checkInputValidity(e.target.value);
  };

  const checkInputValidity = (value) => {
    if (regex && regex !== "") {
      const pattern = new RegExp(regex);

      const isValid = pattern.test(value);

      if (setValueAboveToValid && isValid) {
        setValueAboveToValid();
        console.log("valid trigger" + value);
      }
      if (setValueAboveToInvalid && !isValid) {
        setValueAboveToInvalid();
        console.log("invalid trigger");
      }
      setValidSelf(isValid ? "valid" : "invalid");
    } else {
      setValidSelf("initial");
    }
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      if (validSelf === "valid") {
        handleOnClick();
      } else {
        // Show message that input is not valid
        console.log("Input is not valid");
      }
    }
  };

  const handleOnClick = () => {
    setValueIfValid();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEnterKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEnterKeyPress);
    };
  }, [inputValue, validSelf]); // Add valid to the dependency array

  return (
    <>
      {/* <p className='z-100 fixed top-60 left-52 '>VALUE:{typeBre}</p> */}
      {/* <div className='fixed top-5 left-5 bg-red-400 h-32 w-44'>
        <h2 className='absolute top-[0px]'>INPUT:{inputValue}</h2>
        <h2 className='absolute top-[20px]'>field:{fieldValue}</h2>
        <h2 className='absolute top-[40px]'>CURRENT:{fieldValue}</h2>
        <h2 className='absolute top-[60px]'>SLEF:{validSelf}</h2>
        <h2 className='absolute top-[80px]'>GLOBAL{currentValueValid}</h2>
      </div> */}
      <div className='h-min  absolute top-0 left-0 w-full'>
        <div className='input-container relative'>
          <input
            type={typeBre}
            value={inputValue}
            onChange={handleChange}
            // placeholder={` ${placeholder.toLowerCase()}`}
            placeholder={` ${placeholder}`}
            className={`appearance-none block w-full bg-[#f9f9f9] text-gray-700 font-bold border peer border-gray-200 rounded pb-3 pt-6 pl-10 leading-tight focus:outline-none focus:bg-white focus:border-[#5EC2E6]
             ${validSelf === "invalid" && "border-red-500"}  ${
              validSelf === "valid" && "border-[#5EC2E6]"
            } `}
          />
          <div
            className={`bg-[#5EC2E6] rounded-full p-[4px]  h-5 w-5 absolute right-5 bottom-5 z-10 ${
              validSelf === "valid" ? "" : "hidden"
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='fill-white'
              viewBox='0 0 448 512'
            >
              <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
            </svg>
          </div>
          <div
            className={`bg-[#f9624e] rounded-full p-[4px]  h-[22px] w-[22px] absolute right-5 bottom-[18px] z-10 flex items-center peer-focus:hidden
             justify-center ${validSelf === "invalid" ? "" : "hidden"}`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 384 512'
              className='fill-white'
            >
              <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
            </svg>
          </div>
          <div
            className={`absolute left-3 top-2 text-[11px] font-bold  peer-focus:text-[#5EC2E6] 
              ${validSelf === "invalid" && "text-[#f9624e]"} *: ${
              validSelf === "valid" && "text-[#5EC2E6]"
            } `}
          >
            {quote}
          </div>
          <div
            className={`[&>svg]:h-6 absolute left-3 bottom-[11px] peer-focus:fill-[#5EC2E6] 
              ${validSelf === "invalid" && "fill-[#f9624e]"}
               ${validSelf === "valid" && "fill-[#5EC2E6]"}`}
          >
            {icon}
          </div>
          {validSelf === "invalid" && (
            <p className='text-xs ml-2 mt-[5px] absolute text-[#d32f2f]  peer-focus:hidden'>
              Please enter a valid {quote}
            </p>
          )}
        </div>

        {validSelf === "initial" && (
          <p className='text-lg text-red-400'>init</p>
        )}
      </div>
    </>
  );
};

export default StringInput;
