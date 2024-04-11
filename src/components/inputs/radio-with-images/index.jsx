import React, { useState, useEffect } from "react";

const RadioInputImages = ({
  step,
  fieldValue,
  setToValid,
  setValue,
  options,
  optionValues,
  goToNextStep,
  setCurrentValue,
  currentValueValid,
  answersValues,
  setToInitial,
  imagesValues,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(fieldValue);
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

  const handleOptionChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedAnswer(selectedValue);
    setCurrentValue(selectedValue);
    setValidSelf("valid");
    setValue(step, selectedValue);
    setToValid(step);
    goToNextStep();
  };

  return (
    <div className=' absolute top-0 left-0 w-full gap-4'>
      <div className='flex flex-wrap mx-auto items-center justify-center align-items-center gap-[15px] max-w-[390px]   m-auto'>
        {options?.map((option, index) => (
          <label
            key={index}
            className={`S relative p-3 border  w-[140px] h-[114px]  bg-[#f9f9f9] font-bold border-gray-300 rounded-md   md:w-[180px] md:h-[133px] flex flex-col items-center justify-center  cursor-pointer hover:shadow-md accent-[#5ec2e6] hover:border-[#5EC2E6] transition-all checked:bg-[#5EC2E6] has-[:checked]:border-[#5EC2E6] has-[:checked]:shadow-custom has-[:checked]:bg-blue-50 ${
              validSelf === "invalid" &&
              "!border-[#f9624e] hover:border-[#f9624e]"
            }
              ease-in-out
            duration-300
            shadow-custom
            hover:shadow-custom_hover`}
          >
            <img
              src={imagesValues[index]}
              className='h-[60px] mb-2 fill-blue-400  '
            />
            <input
              type='radio'
              value={optionValues[index]}
              checked={selectedAnswer === optionValues[index]}
              onChange={handleOptionChange}
              className='form-radio bg-[#5EC2E6] h-5 w-5   hidden '
            />
            <div
              className={`${
                selectedAnswer === optionValues[index]
                  ? "h-5 w-5 bg-white  border-[#5ec2e6] border-2 rounded-sm mr-3  flex items-center justify-center"
                  : ""
              } absolute top-3 left-3`}
            >
              {selectedAnswer === optionValues[index] && (
                <div className='h-5 w-5 bg-[#5ec2e6] p-[2px] flex items-center justify-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='fill-white'
                    viewBox='0 0 448 512'
                  >
                    <path d='M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' />
                  </svg>
                </div>
              )}
            </div>
            {option}
          </label>
        ))}
      </div>
      {validSelf === "invalid" && (
        <p className='text-[#f9624e] mt-[15px] font-normal  '>
          This field is required
        </p>
      )}
    </div>
  );
};

export default RadioInputImages;

//   const question = "What is your favorite color?";

//   const answers = [
//     ["Red", "Blue", "Green"],
//   ];

//   const answerValues = [
//     ["red", "blue", "green"],
//   ];
