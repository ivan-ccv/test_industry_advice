import React, { useState, useEffect } from "react";

const MultiSelectInputWithImages = ({
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
    <div className='h-min  absolute top-0 left-0 w-full'>
      {" "}
      {/* Adjust styling as needed */}
      {/* <p>{question}</p> */}
      {/* <h1>{selectedOptions.length}</h1> */}
      <div>
        {options.map((option, index) => (
          <div key={index} className='w-full'>
            <label className='p-3 border bg-[#f9f9f9] font-bold border-gray-300 mb-3 rounded-md w-full inline-flex items-center cursor-pointer hover:shadow-md accent-[#5ec2e6] hover:border-[#5EC2E6] transition-all checked:bg-emerald-400 has-[:checked]:border-[#5EC2E6] has-[:checked]:bg-blue-50'>
              <img
                src={imagesValues[index]}
                className='h-6 fill-[#5EC2E6] mr-3 '
              />
              <input
                type='checkbox'
                value={optionValues[index]} // Use either provided values or options
                checked={selectedOptions.includes(optionValues[index])}
                onChange={handleOptionChange}
                className='form-radio bg-[#5EC2E6] h-5 w-5  mr-2 hidden '
              />
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelectInputWithImages;
