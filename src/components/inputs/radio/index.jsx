import React, { useState, useEffect } from "react";

const RadioInput = ({
  step,
  fieldValue,
  setToValid,
  setToInvalid,
  setValue,
  goToNextStep,
  questionValue,
  typeOfValue,
  onClick,
  quote,
  placeholder,
  setCurrentValue,
  currentValueValid,
  answers,
  answersValues,
  setToInitial,
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

  // const checkInputValidity = (value) => {
  //   if (selectedAnswer !== null) {
  //     setValidSelf("valid");
  //   } else {
  //     setValidSelf("initial");
  //   }
  // };

  // useEffect(() => {
  //   if (fieldValue !== null) checkInputValidity(selectedAnswer);
  // }, []);

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
    <div className={` absolute top-0 left-0 w-full`}>
      <div>
        {answers.map((answer, index) => (
          <label
            key={index}
            className={`p-3 px-3 md:px-5 border h-[50px] text-[#000000de] bg-[#f9f9f9] font-bold text-[15px] border-[#C6C6C6] mb-3 rounded-[4px] w-full inline-flex items-center cursor-pointer ease-in-out duration-300 shadow-custom hover:shadow-custom_hover accent-[#5ec2e6] hover:border-[#5EC2E6] transition-all  has-[:checked]:border-[#5EC2E6] has-[:checked]:bg-blue-50 has-[:checked]:shadow-custom ${
              validSelf === "invalid" &&
              "border-[#f9624e] hover:border-[#f9624e]"
            }`}
          >
            <input
              type='radio'
              value={answersValues[index]}
              checked={selectedAnswer === answersValues[index]}
              onChange={handleOptionChange}
              className='form-radio bg-[#5EC2E6] h-5 w-5 mr-2 hidden'
            />
            <div
              className={`${
                selectedAnswer === answersValues[index]
                  ? "h-6 w-6 bg-white  border-[#5ec2e6] border-2 rounded-full mr-4 shadow-custom_hover  flex items-center justify-center"
                  : "h-6 w-6 bg-white border border-[#C6C6C6] rounded-full mr-4"
              }`}
            >
              {selectedAnswer === answersValues[index] && (
                <div className='h-4 w-4 bg-[#5ec2e6] rounded-full'></div>
              )}
            </div>
            {answer}
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

export default RadioInput;

//   const question = "What is your favorite color?";

//   const answers = [
//     ["Red", "Blue", "Green"],
//   ];

//   const answerValues = [
//     ["red", "blue", "green"],
//   ];
