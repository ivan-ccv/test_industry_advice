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

  answers,
  answersValues,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(fieldValue);
  const [validSelf, setValidSelf] = useState("inital");

  useEffect(() => {
    setCurrentValue(fieldValue);
  }, [fieldValue]);

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
      {/* <p>{question}</p> */}

      <div>
        {answers.map((answer, index) => (
          <label
            key={index}
            className='p-3 border bg-[#f9f9f9] font-bold border-gray-300 mb-3 rounded-md w-full inline-flex items-center cursor-pointer hover:shadow-md accent-[#5ec2e6] hover:border-[#5EC2E6] transition-all  has-[:checked]:border-[#5EC2E6] has-[:checked]:bg-blue-50 '
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
                  ? "h-5 w-5 bg-white  border-[#5ec2e6] border-2 rounded-full mr-3  flex items-center justify-center"
                  : "h-5 w-5 bg-white border border-gray-400 rounded-full mr-3"
              }`}
            >
              {selectedAnswer === answersValues[index] && (
                <div className='h-3 w-3 bg-[#5ec2e6] rounded-full'></div>
              )}
            </div>
            {answer}
          </label>
        ))}
      </div>
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
