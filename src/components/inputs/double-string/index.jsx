import React, { useState, useEffect } from "react";
import StringInput from "../string";
const DoubleStringInput = ({
  step,
  fieldValue,
  currentValueValid,
  setCurrentValue,
  currentValue,
  setToValid,
  setToInvalid,
  setValue,
  goToNextStep,
  setToInitial,
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
    fieldValue !== null ? [...fieldValue] : [null, null]
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

  // useEffect(() => {
  //   if (currentValue === "initial") setSelfValidOne("initial");
  // }, [currentValueValid]);

  // useEffect(() => {
  //   if (currentValue === "initial") setSelfValidTwo("initial");
  // }, [currentValueValid]);

  // useEffect(() => {
  //   if (fieldValue !== null) setInputValue(fieldValue);
  // }, [inputValue]);

  useEffect(() => {
    if (currentValueValid !== "valid" && currentValueValid !== "invalid")
      setToInitial(step);
  }, [step]);

  const setStepOneToValid = () => setSelfValidOne("valid");
  const setStepOneToInvalid = () => setSelfValidOne("invalid");
  const setStepOneToInitial = () => setSelfValidOne("initial");

  const setStepTwoToValid = () => setSelfValidTwo("valid");
  const setStepTwoToInvalid = () => setSelfValidTwo("invalid");
  const setStepTwoToInitial = () => setSelfValidTwo("initial");

  // kad se load, ako su inital onda
  useEffect(() => {
    if (validSelfOne === "initial" && currentValueValid === "invalid") {
      setStepOneToInvalid();
      setToInvalid(step);
    }
  }, [validSelfOne, currentValueValid]);

  useEffect(() => {
    if (validSelfTwo === "initial" && currentValueValid === "invalid") {
      setStepTwoToInvalid();
      setToInvalid(step);
    }
  }, [validSelfTwo, currentValueValid]);

  // useEffect(() => {
  //   if (validSelfOne === "valid") {
  //     setSelfValidOne("valid");
  //   } else if (validSelfTwo === "valid") {
  //     setSelfValidTwo("valid");
  //   }
  // }, [validSelfOne, validSelfTwo]);

  useEffect(() => {
    {
      setInputValue([valueOne, valueTwo]);
      setValue(step, [valueOne, valueTwo]);
      setCurrentValue([valueOne, valueTwo]);
    }
  }, [valueOne, valueTwo]);

  // ok
  useEffect(() => {
    if (validSelfOne === "valid" && validSelfTwo === "valid") {
      setValidSelf("valid");
      setToValid(step);
    } else if (
      (validSelfOne === "invalid" || validSelfTwo === "invalid") &&
      validSelfOne !== "initial" &&
      validSelfTwo !== "initial"
    ) {
      setValidSelf("invalid");
      setToInvalid(step);
    }
  }, [validSelfOne, validSelfTwo]);
  // ok
  const setValueIfValid = () => {
    if (validSelf === "valid") {
      setValue(step, inputValue);
      setToValid(step);
      goToNextStep();
    }
  };

  return (
    <>
      {/* <p>{currentValueValid}</p> */}
      {/* <div className='fixed top-32 left-10 h-44 w-72 bg-slate-100'>
        <p>OBA S:{validSelf}</p>
        <p>
          ONE S:{validSelfOne} - {valueOne}--{inputValue[0]}
        </p>
        <p>
          TWO S:{validSelfTwo} - {valueTwo}--{inputValue[1]}
        </p>
        <p>C1:{currentValue}</p>
        <p>field:{fieldValue}</p>
        <p>CurrentValVali:{currentValueValid}</p>
      </div> */}

      <div className='flex flex-col gap-20 relative'>
        <div className='flex flex-col  relative'>
          <StringInput
            step={step}
            key={step + "" + quoteOne}
            questionValue={typeOfValueOne}
            fieldValue={valueOne}
            setValue={setValueOne}
            // goToNextStep={setValueIfValid} //!!!
            setToValid={setStepOneToValid}
            setToInvalid={setStepOneToInvalid}
            regex={regexOne}
            quote={quoteOne}
            placeholder={placeholderOne}
            type={typeOfValueOne}
            icon={iconOne}
            setCurrentValue={setValueOne}
            setToInitial={setStepOneToInitial}
            currentValueValid={validSelfOne}
            setValueAboveToValid={setStepOneToValid}
            setValueAboveToInvalid={setStepOneToInvalid}
          />
        </div>
        <div className='flex flex-col gap-5 relative'>
          <StringInput
            step={step}
            key={step + "" + quoteTwo}
            questionValue={typeOfValueTwo}
            fieldValue={valueTwo}
            setValue={setValueTwo}
            // goToNextStep={setValueIfValid} //!!!
            setToValid={setStepTwoToValid}
            setToInvalid={setStepTwoToInvalid}
            regex={regexTwo}
            quote={quoteTwo}
            placeholder={placeholderTwo}
            type={typeOfValueTwo}
            icon={iconTwo}
            setCurrentValue={setValueTwo}
            setToInitial={setStepTwoToInitial}
            currentValueValid={validSelfTwo}
            setValueAboveToValid={setStepTwoToValid}
            setValueAboveToInvalid={setStepTwoToInvalid}
          />
        </div>
      </div>
    </>
  );
};

export default DoubleStringInput;
