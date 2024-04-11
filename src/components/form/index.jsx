import React, { useState, useEffect, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useStore } from "../../store/store";

import YesNoInput from "../inputs/yes-no";
import RadioInput from "../inputs/radio";
import StringInput from "../inputs/string";
import MultiSelectInput from "../inputs/radio_multi";
import MultiSelectInputWithImages from "../inputs/radio-multi-with-images";
import MultiSelectImages from "../inputs/radio-multi-images";
import DoubleStringInput from "../inputs/double-string";
import ImageComponent from "../inputs/image-component/";
import BubbleHead from "../bubble-head";
import ProgressBar from "../progress-bar";
import RemainingTime from "../remaining-time";

import {
  extractQuestions,
  extractValues,
  mergeArraysIntoMap,
} from "../../store/helpers";

import gifImage from "../../assets/glass.gif";
import endImage from "../../assets/end.jpg";

import "../../App.css";
import RadioInputImages from "../inputs/radio-with-images";
import MapDisplay from "../map-display";

const Form = ({ data }) => {
  const initialQuestion =
    "Hey, I'm James. I'm here to help you find a Storage Container Solution that suits your business or home, and budget. Let's get started!";

  const [numberOfFields, setNumberOfFields] = useState(0);

  const valuesArray = useStore((state) => state.valuesArray);
  const validationArray = useStore((state) => state.validationArray);
  const goToNextStep = useStore((state) => state.goToNextStep);
  const goToPrevStep = useStore((state) => state.goToPrevStep);
  const goToPrevStepTwice = useStore((state) => state.goToPrevStepTwice);
  const stepBre = useStore((state) => state.step);
  const prevStepBre = useStore((state) => state.previousStep);
  const setToValid = useStore((state) => state.setToValid);
  const setToInvalid = useStore((state) => state.setToInvalid);
  const setToInitial = useStore((state) => state.setToInitial);
  const setValue = useStore((state) => state.setValue);
  const setQuestionVersion = useStore((state) => state.setQuestionVersion);
  const currentValue = useStore((state) => state.currentValue);
  const setCurrentValue = useStore((state) => state.setCurrentValue);
  const resetCurrentValue = useStore((state) => state.setCurrentValue);

  const tmpData = data;

  let mappedData = {};

  if (stepBre === tmpData.length - 1) {
    const questions = extractQuestions(tmpData);
    const values = extractValues(valuesArray);
    mappedData = mergeArraysIntoMap(questions, values);
  }

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isCurrentStepValid = validationArray[stepBre];
  const screenIsMobile = screenWidth < 769;
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array to run only once on initial render

  const heightCalculator = (type) => {
    switch (type) {
      case "yesNo":
        return screenIsMobile ? 315 : 295;
      case "radio":
        return screenIsMobile
          ? 65 * numberOfFields + (isCurrentStepValid === "invalid" && 40)
          : 65 * numberOfFields + (isCurrentStepValid === "invalid" && 45);
      case "radioMulti":
        return screenIsMobile
          ? 65 * numberOfFields + (isCurrentStepValid === "invalid" && 40)
          : 65 * numberOfFields + (isCurrentStepValid === "invalid" && 45);
      case "radioMultiWithImages":
        return screenIsMobile
          ? 65 * numberOfFields + (isCurrentStepValid === "invalid" && 40)
          : 65 * numberOfFields + (isCurrentStepValid === "invalid" && 45);
      case "radioMultiImages":
        return screenIsMobile
          ? 162 * Math.ceil(numberOfFields / 2) +
              (isCurrentStepValid === "invalid" && 40)
          : 165 * Math.ceil(numberOfFields / 2) +
              (isCurrentStepValid === "invalid" && 45);
      case "radioImages":
        return screenIsMobile
          ? 162 * Math.ceil(numberOfFields / 2) +
              (isCurrentStepValid === "invalid" && 40)
          : 165 * Math.ceil(numberOfFields / 2) +
              (isCurrentStepValid === "invalid" && 45);
      case "string":
        return screenIsMobile ? 285 : 265;
      case "doubleString":
        return screenIsMobile ? 285 : 265;
      case "imageComponent":
        return screenIsMobile ? 285 : 320;
      default:
        return null;
    }
  };

  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      const button = event.currentTarget;

      const circle = document.createElement("span");
      const diameter = Math.max(button.clientWidth, button.clientHeight);
      const radius = diameter / 2;

      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
      circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
      circle.classList.add("ripple");

      const ripple = button.getElementsByClassName("ripple")[0];

      if (ripple) {
        ripple.remove();
      }

      button.appendChild(circle);
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener("click", handleClick);
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener("click", handleClick);
      }
    };
  }, [buttonRef]);

  const steps = tmpData.map((dataObject) => {
    switch (dataObject.type) {
      case "yesNo":
        return (
          <YesNoInput
            step={stepBre}
            key={stepBre}
            question={dataObject.question}
            questionValue={dataObject.questionValue}
            fieldValue={valuesArray[stepBre]}
            setValue={setValue}
            goToNextStep={goToNextStep}
            setToValid={setToValid}
            setCurrentValue={setCurrentValue}
            currentValueValid={validationArray[stepBre]}
            setToInitial={setToInitial}
          />
        );
      case "string":
        return (
          <StringInput
            step={stepBre}
            key={stepBre}
            question={dataObject.question}
            questionValue={dataObject.questionValue}
            fieldValue={valuesArray[stepBre]}
            setValue={setValue}
            goToNextStep={goToNextStep}
            setToValid={setToValid}
            setToInvalid={setToInvalid}
            regex={dataObject.regex}
            quote={dataObject.quote}
            placeholder={dataObject.placeholder}
            typeBre={dataObject.typeBre}
            icon={dataObject.icon}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
            currentValueValid={validationArray[stepBre]}
            setToInitial={setToInitial}
          />
        );
      case "radio":
        return (
          <RadioInput
            fieldValue={valuesArray[stepBre]}
            step={stepBre}
            key={dataObject.step}
            question={dataObject.question}
            questionValue={dataObject.questionValue}
            answers={dataObject.answers}
            answersValues={dataObject.answersValues}
            setValue={setValue}
            setToValid={setToValid}
            setToInvalid={setToInvalid}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
            goToNextStep={goToNextStep}
            currentValueValid={validationArray[stepBre]}
            setToInitial={setToInitial}
          />
        );
      case "image":
        return (
          <img
            className='h-[250px] m-auto'
            key={dataObject.step}
            src={endImage}
            alt='searching'
          />
        );
      case "imageComponent":
        return (
          <ImageComponent
            key={dataObject.step}
            src={dataObject.src}
            alt='searching'
            goToNextStep={goToNextStep}
            setCurrentValue={setCurrentValue}
            setValue={setValue}
            question={dataObject.question}
            currentValueValid={validationArray[stepBre]}
            setToInitial={setToInitial}
          />
        );
      case "radioMulti":
        return (
          <MultiSelectInput
            step={stepBre}
            fieldValue={valuesArray[stepBre]}
            key={dataObject.step}
            question={dataObject.question}
            questionValue={dataObject.questionValue}
            options={dataObject.answers}
            optionValues={dataObject.answersValues}
            setValue={setValue}
            setToValid={setToValid}
            setToInvalid={setToInvalid}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
            currentValueValid={validationArray[stepBre]}
            setToInitial={setToInitial}
          />
        );
      case "radioMultiWithImages":
        return (
          <MultiSelectInputWithImages
            step={stepBre}
            fieldValue={valuesArray[stepBre]}
            key={dataObject.step}
            question={dataObject.question}
            questionValue={dataObject.questionValue}
            options={dataObject.answers}
            optionValues={dataObject.answersValues}
            setValue={setValue}
            setToValid={setToValid}
            setToInvalid={setToInvalid}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
            imagesValues={dataObject.imagesValues}
            currentValueValid={validationArray[stepBre]}
            setToInitial={setToInitial}
          />
        );
      case "radioMultiImages":
        return (
          <MultiSelectImages
            step={stepBre}
            fieldValue={valuesArray[stepBre]}
            key={dataObject.step}
            question={dataObject.question}
            questionValue={dataObject.questionValue}
            options={dataObject.answers}
            optionValues={dataObject.answersValues}
            setValue={setValue}
            setToValid={setToValid}
            setToInvalid={setToInvalid}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
            imagesValues={dataObject.imagesValues}
            setQuestionVersion={setQuestionVersion}
            currentValueValid={validationArray[stepBre]}
            setToInitial={setToInitial}
          />
        );
      case "doubleString":
        return (
          <DoubleStringInput
            step={stepBre}
            fieldValue={valuesArray[stepBre]}
            key={dataObject.step}
            currentValue={currentValue}
            question={dataObject.question}
            questionValue={dataObject.questionValue}
            setValue={setValue}
            setToValid={setToValid}
            setToInvalid={setToInvalid}
            setCurrentValue={setCurrentValue}
            regexOne={dataObject.regexOne}
            quoteOne={dataObject.quoteOne}
            placeholderOne={dataObject.placeholderOne}
            typeOne={dataObject.typeOfDataOne}
            iconOne={dataObject.iconOne}
            regexTwo={dataObject.regexTwo}
            quoteTwo={dataObject.quoteTwo}
            placeholderTwo={dataObject.placeholderTwo}
            typeTwo={dataObject.typeOfDataTwo}
            iconTwo={dataObject.iconTwo}
            currentValueValid={validationArray[stepBre]}
            setToInitial={setToInitial}
          />
        );
      case "radioImages":
        return (
          <RadioInputImages
            step={stepBre}
            fieldValue={valuesArray[stepBre]}
            key={dataObject.step}
            question={dataObject.question}
            questionValue={dataObject.questionValue}
            options={dataObject.answers}
            optionValues={dataObject.answersValues}
            setValue={setValue}
            setToValid={setToValid}
            setToInvalid={setToInvalid}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
            imagesValues={dataObject.imagesValues}
            setQuestionVersion={setQuestionVersion}
            currentValueValid={validationArray[stepBre]}
            setToInitial={setToInitial}
            goToNextStep={goToNextStep}
          />
        );
      default:
        return null;
    }
  });

  useEffect(() => {
    setNumberOfFields(
      tmpData[stepBre].answers?.length ? tmpData[stepBre].answers.length : null
    );
  }, [stepBre]);

  return (
    <div className='flex flex-col m-auto max-w-full md:max-w-[710px] font-["Roboto"] mb-32 md:p-0 p-[8px] sm:p-3'>
      <BubbleHead
        step={stepBre}
        initialQuestion={initialQuestion}
        question={tmpData[stepBre].question}
      />

      <ProgressBar currentStep={stepBre} totalSteps={tmpData.length - 1} />
      {stepBre === 0 && (
        <p className='text-black text-[18px] md:text-[22px] md:mt-[-6px] mt-[-20px] font-bold mx-auto md:mb-5 mb-3'>
          {tmpData[stepBre].question}
        </p>
      )}
      <div
        style={{
          height: heightCalculator(tmpData[stepBre].type),
        }}
        className={` bac overflow-hidden relative md:min-h-[220px] min-h-[100px] px-[8px] md:px-0 min-w-[300px] md:max-w-[666px] max-w-full w-[666px] m-auto transition-[height] duration-300 ease-in-out`}
      >
        <TransitionGroup>
          <CSSTransition
            key={stepBre}
            classNames={{
              enter:
                stepBre > prevStepBre ? "fade-enter-right" : "fade-enter-left",
              enterActive: "fade-enter-active",
              exit:
                stepBre < prevStepBre ? "fade-exit-right" : "fade-exit-left",
              exitActive: "fade-exit-active",
            }}
            timeout={300}
          >
            {/* {renderStep()} */}
            <div className='relative'>
              <div>{steps[stepBre]}</div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className='flex flex-col justify-between px-[8px] md:px-0 pt-1 pb-3 max-w-[100%] w-[666px] m-auto'>
        {validationArray[stepBre] === "invalid" &&
          tmpData[stepBre].type !== "string" &&
          tmpData[stepBre].type !== "doubleString" && (
            <p className='text-[#f9624e] mb-5 font-normal hidden'>
              This field is required
            </p>
          )}

        <div className='flex'>
          {stepBre > 0 && (
            <button
              disabled={stepBre === 0}
              onClick={() => {
                resetCurrentValue();
                {
                  tmpData[stepBre - 1].type === "imageComponent"
                    ? goToPrevStepTwice()
                    : goToPrevStep();
                }
              }}
              className={`p-3 font-bold text-xl bg-[#ededed] rounded-md  hover:shadow-big_button_hover   box-border h-[45px] w-[45px]  md:w-[55px] md:h-[55px] transition-shadow duration-300 flex items-center justify-center ${
                tmpData[stepBre].type === "imageComponent" ||
                stepBre === tmpData.length - 1
                  ? "hidden"
                  : ""
              }`}
            >
              <svg
                className=' h-3 '
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'
              >
                <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
              </svg>
            </button>
          )}

          <button
            ref={buttonRef}
            className={`ripple_button p-2 font-bold  md:text-[18px] text-[17px] bg-[#fea122] rounded-md  hover:shadow-big_button_hover shadow-big_button h-[45px] md:h-[55px]  box-border text-white transition-all duration-300 disabled:bg-gray-400 ${
              stepBre === 0 ? "w-full" : " w-full ml-[10px]"
            } ${
              tmpData[stepBre].type === "imageComponent" ||
              stepBre === tmpData.length - 1
                ? "hidden"
                : ""
            }`}
            // disabled={validationArray[stepBre] !== "valid"}
            onClick={() => {
              if (validationArray[stepBre] === "valid") {
                setValue(stepBre, currentValue);
                resetCurrentValue();
                goToNextStep();
              } else {
                setToInvalid(stepBre);
              }
            }}
          >
            {stepBre === 0 ? "Compare Quotes" : "Continue"}
          </button>
        </div>
      </div>
      <RemainingTime currentStep={stepBre} totalSteps={tmpData.length} />
      {stepBre === tmpData.length - 1 && <MapDisplay map={mappedData} />}
    </div>
  );
};

export default Form;
