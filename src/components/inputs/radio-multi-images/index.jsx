import React, { useState, useEffect } from "react";

const MultiSelectImages = ({
  question,
  questionValue,
  imagesValues,
  options,
  optionValues,
  setValue,
  setToValid,
  setCurrentValue,
  fieldValue,
  step,
  setToInvalid,
}) => {
  const [selectedOptions, setSelectedOptions] = useState([fieldValue]); // Array to store selected values

  useEffect(() => {
    if (fieldValue) {
      const updatedOptions = [...fieldValue];
      setSelectedOptions(updatedOptions);
      setCurrentValue(updatedOptions);
    }
  }, [fieldValue]);

  useEffect(() => {
    if (selectedOptions.length > 1) {
      setToValid(step);
    } else {
      setToInvalid(step);
    }
  }, [selectedOptions]);

  const handleOptionChange = (e) => {
    const value = e.target.value;
    const updatedOptions = [...selectedOptions]; // Create a copy to avoid mutation

    if (e.target.checked) {
      updatedOptions.push(value); // Add selected option
    } else {
      const index = updatedOptions.indexOf(value); // Find index of deselected option
      updatedOptions.splice(index, 1); // Remove deselected option
    }

    setSelectedOptions(updatedOptions);
    setCurrentValue(updatedOptions);
    setValue(step, updatedOptions); // Pass updated options to the onClick function
  };

  return (
    <div className='h-min  absolute top-0 left-0 w-full gap-4'>
      {/* Adjust styling as needed */}
      {/* <p>{question}</p> */}
      {/* <h1>{selectedOptions.length}</h1> */}
      <div className='flex flex-wrap justify-center flex-1 items-center gap-5 w-full md:w-8/12 m-auto'>
        {options.map((option, index) => (
          <div key={index} className='w-[40%] justify-center items-center flex'>
            <label className='relative p-3 border  bg-[#f9f9f9] font-bold border-gray-300 mb-3 rounded-md w-44 h-32 flex flex-col items-center justify-center  cursor-pointer hover:shadow-md accent-[#5ec2e6] hover:border-[#5EC2E6] transition-all checked:bg-[#5EC2E6] has-[:checked]:border-[#5EC2E6] has-[:checked]:bg-blue-50'>
              <img
                src={imagesValues[index]}
                className='h-12 mb-2 fill-blue-400  '
              />
              <input
                type='checkbox'
                value={optionValues[index]} // Use either provided values or options
                checked={selectedOptions.includes(optionValues[index])}
                onChange={handleOptionChange}
                className='form-radio bg-[#5EC2E6] h-5 w-5   hidden '
              />
              <div
                className={`${
                  selectedOptions.includes(optionValues[index])
                    ? "h-5 w-5 bg-white  border-[#5ec2e6] border-2 rounded-sm mr-3  flex items-center justify-center"
                    : ""
                } absolute top-3 left-3`}
              >
                {selectedOptions.includes(optionValues[index]) && (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectImages;
