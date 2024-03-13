import React, { useState, useEffect } from "react";
import StringInput from "../string";
const DoubleStringInput = ({
  step,
  fieldValue,

  setCurrentValue,
  currentValue,
  setToValid,
  setToInvalid,
  setValue,
  goToNextStep,

  typeOfValueOne,
  typeOfValueTwo,
  iconOne,
  iconTwo,
  quoteOne,
  quoteTwo,
  placeholderOne,
  placeholderTwo,
  regexOne,
  regexTwo,
}) => {
  const [inputValue, setInputValue] = useState(
    fieldValue !== null ? fieldValue : [null, null]
  );
  const [validSelf, setValidSelf] = useState("initial");
  const [validSelfOne, setSelfValidOne] = useState("initial");
  const [validSelfTwo, setSelfValidTwo] = useState("initial");

  const [valueOne, setValueOne] = useState(
    inputValue[0] === null ? null : inputValue[0]
  );
  const [valueTwo, setValueTwo] = useState(
    inputValue[1] === null ? null : inputValue[1]
  );

  const setStepOneToValid = () => setSelfValidOne("valid");
  const setStepOneToInvalid = () => setSelfValidOne("invalid");
  const setStepTwoToValid = () => setSelfValidTwo("valid");
  const setStepTwoToInvalid = () => setSelfValidTwo("invalid");

  useEffect(() => {
    {
      setInputValue({ valueOne, valueTwo });
      setValue([valueOne, valueTwo]);
      setCurrentValue([valueOne, valueTwo]);
    }
  }, [valueOne, valueTwo]);

  useEffect(() => {
    if (validSelfOne === "valid" && validSelfTwo === "valid") {
      setValidSelf("valid");
      setToValid(step);
    } else {
      setValidSelf("invalid");
      setToInvalid(step);
    }
  }, [validSelfOne, validSelfTwo]);

  const setValueIfValid = () => {
    if (validSelf === "valid") {
      setValue(step, inputValue);
      setToValid(step);
      goToNextStep();
    }
  };

  useEffect(() => {
    if (fieldValue !== null) setInputValue(fieldValue);
  }, [inputValue]);

  return (
    <>
      {/* <h1>Current:{currentValue}</h1>
      <h1>Field:{currentValue}</h1>
      <h1>
        Input:{inputValue[0] !== null ? inputValue[0] : "nema"} i
        {inputValue[1] !== null ? inputValue[1] : "nema2"}
      </h1> */}
      {/* <h2>ValidTotal:{validSelf}</h2>
      <h2>Valid1:{validSelfOne}</h2>
      <h2>Valid2:{validSelfTwo}</h2> */}

      <div className='flex flex-col gap-20 relative'>
        <div className='flex flex-col  relative'>
          <StringInput
            step={step}
            key={step + "" + quoteOne}
            questionValue={typeOfValueOne}
            fieldValue={valueOne}
            setValue={setValueOne}
            goToNextStep={setValueIfValid} //!!!
            setToValid={setStepOneToValid}
            setToInvalid={setStepOneToInvalid}
            regex={regexOne}
            quote={quoteOne}
            placeholder={placeholderOne}
            type={typeOfValueOne}
            icon={iconOne}
            setCurrentValue={setValueOne}
          />
        </div>
        <div className='flex flex-col gap-5 relative'>
          <StringInput
            step={step}
            key={step + "" + quoteTwo}
            questionValue={typeOfValueTwo}
            fieldValue={valueTwo}
            setValue={setValueTwo}
            goToNextStep={setValueIfValid} //!!!
            setToValid={setStepTwoToValid}
            setToInvalid={setStepTwoToInvalid}
            regex={regexTwo}
            quote={quoteTwo}
            placeholder={placeholderTwo}
            type={typeOfValueTwo}
            icon={iconTwo}
            setCurrentValue={setValueTwo}
          />
        </div>
      </div>
    </>
  );
};

export default DoubleStringInput;
