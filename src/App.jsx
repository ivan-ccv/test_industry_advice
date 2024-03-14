import React, { useState, useEffect } from "react";
import { useStore } from "./store/store";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import YesNoInput from "./components/inputs/yes-no";
import RadioInput from "./components/inputs/radio";
import StringInput from "./components/inputs/string";
import MultiSelectInput from "./components/inputs/radio_multi";
import MultiSelectInputWithImages from "./components/inputs/radio-multi-with-images";
import MultiSelectImages from "./components/inputs/radio-multi-images";
import DoubleStringInput from "./components/inputs/double-string";
import gifImage from "./assets/glass.gif";
import endImage from "./assets/end.jpg";
import Car from "./assets/car-solid.svg";
import Train from "./assets/train-solid.svg";
import Van from "./assets/van-shuttle-solid.svg";
import Head from "./assets/head.jpg";
import ProgressBar from "./components/progress-bar";
import Header from "./components/header";
import RemainingTime from "./components/remaining-time";
import Footer from "./components/footer";
import InPartnershipWith from "./components/in-partnership-with";
import SaveMoney from "./components/save-money-on-time";
import "./App.css";
import ImageComponent from "./components/inputs/image-component";

function App() {
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
  const setValue = useStore((state) => state.setValue);
  const currentValue = useStore((state) => state.currentValue);
  const setCurrentValue = useStore((state) => state.setCurrentValue);
  const resetCurrentValue = useStore((state) => state.setCurrentValue);

  const tmpData = [
    {
      step: 0,
      question: "How would you like to collect data?",
      questionValue: "wayToCollectData",
      answers: [
        "Swipe card (magnetic strip)",
        "Biometrics (finger print)",
        "Web/browers-based (online)",
        "Unsure, please advise",
      ],
      answersValues: ["1-9", "10-24", "25-49", "50-99", "100+"],
      type: "radio",
    },
    {
      step: 1,
      question: "How many employees do you have?",
      questionValue: "numberOfEmployees",
      answers: [
        "Less than 10",
        "10 - 49",
        "50 - 99",
        "100 - 250",
        "More than 250",
      ],
      answersValues: ["lessThan10", "10-49", "50-99", "100-200", "moreThan250"],
      type: "radio",
    },
    {
      step: 2,
      questionValue: "usersZIP",
      question:
        "What is your company's ZIP code? \nWe will help you get accurate quotes for your area",
      typeOfData: "ZIP",
      type: "string",
      placeholder: "e.g. 90001",
      icon: (
        <svg
          focusable='false'
          aria-hidden='true'
          viewBox='0 0 24 24'
          data-testid='LocationOnOutlinedIcon'
        >
          <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9'></path>
          <circle cx='12' cy='9' r='2.5'></circle>
        </svg>
      ),
      quote: "Company ZIP code",
      regex: /^\d{5}$/,
    },
    {
      step: 3,
      type: "imageComponent",
      question: "Hold on - we're finding providers that best match your needs!",
      src: gifImage,
      alt: "image_of_search",
    },
    {
      step: 4,
      questionValue: "usersEmail",
      question: "Almost there! \nFill in your last few details to continue.",
      typeOfData: "email",
      type: "string",
      placeholder: "e.g. example@email.com",
      icon: (
        <svg
          focusable='false'
          aria-hidden='true'
          viewBox='0 0 24 24'
          data-testid='EmailOutlinedIcon'
        >
          <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z'></path>
        </svg>
      ),
      quote: "Email",
      regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },

    {
      step: 5,
      questionValue: "nameAndCompany",
      question: "Only two steps left",
      type: "doubleString",
      typeOfDataOne: "string",
      typeOfDataTwo: "string",

      placeholderOne: "e.g. John Doe",
      placeholderTwo: "e.g. Company Inc.",
      iconOne: (
        <svg
          focusable='false'
          aria-hidden='true'
          viewBox='0 0 24 24'
          data-testid='PersonOutlineIcon'
        >
          <path d='M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4'></path>
        </svg>
      ),

      iconTwo: (
        <svg
          focusable='false'
          aria-hidden='true'
          viewBox='0 0 24 24'
          data-testid='BusinessOutlinedIcon'
        >
          <path d='M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z'></path>
        </svg>
      ),
      quoteOne: "Full Name",
      quoteTwo: "Company Name",
      regexOne: /^([a-zA-Z]+)\s+([a-zA-Z]+)$/,
      regexTwo: /\b\w+\b/,
    },
    {
      step: 4,
      questionValue: "phone",
      question: "Final step! What's your phone number?",
      typeOfData: "phone",
      type: "string",
      placeholder: "e.g. 123-456-7890",
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 512 512'
          className='!h-5'
        >
          <path d='M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z' />
        </svg>
      ),
      quote: "Phone",
      regex: /^\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}$/,
    },

    {
      step: 7,
      type: "image",
      question: "Thank you for submitting form, we will contact you soon!",
      src: endImage,
    },
  ];

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
            type={dataObject.typeOfData}
            icon={dataObject.icon}
            setCurrentValue={setCurrentValue}
            currentValue={currentValue}
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
    <>
      <Header />
      <div className='triangle'></div>
      <div className='flex flex-col m-auto max-w-2xl font-["Roboto"] mb-32 md:p-0 p-3'>
        <div className='flex mb-5 mt-5 md:mt-10 mx-auto'>
          <img
            className='rounded-full h-20 w-20'
            width='72'
            height='72'
            src={Head}
            alt='Expert'
            aria-hidden='true'
          />
          <div className='flex mt-4'>
            <svg
              aria-hidden='true'
              width='12'
              height='10'
              viewBox='0 0 12 10'
              fill='#e7f6df'
              className='align-middle'
            >
              <path d='M0.136353 4C0.136353 4 3.98561 3.3203 6 2.5C8.77544 1.36979 10.1364 0 10.1364 0V8L0.136353 4Z'></path>
            </svg>
          </div>
          <div
            className='bg-[#E6EDF5] rounded-lg p-3 ml-[-2px] transition-all max-w-[600px]'
            style={{
              width: "auto",
              height: "auto",
            }}
          >
            <div className='bubble-content'>
              <p className='font-bold'>James</p>
              {stepBre === 0 && <p className='max-w-md'>{initialQuestion}</p>}
              {stepBre > 0 && (
                <p className=' max-w-[350px]'>{tmpData[stepBre].question}</p>
              )}
            </div>
          </div>
        </div>

        <ProgressBar currentStep={stepBre} totalSteps={tmpData.length - 1} />
        {stepBre === 0 && (
          <p className='text-black text-lg md:text-2xl font-bold mx-auto mb-5'>
            {tmpData[stepBre].question}
          </p>
        )}
        <div
          style={{ height: `${numberOfFields ? numberOfFields * 65 : 200}px` }}
          className={` bac overflow-hidden relative md:min-h-[200px] min-h-[100px] min-w-[300px] transition-[height] duration-300 ease-in-out`}
        >
          <TransitionGroup>
            <CSSTransition
              key={stepBre}
              classNames={{
                enter:
                  stepBre > prevStepBre
                    ? "fade-enter-right"
                    : "fade-enter-left",
                enterActive: "fade-enter-active",
                exit:
                  stepBre < prevStepBre ? "fade-exit-right" : "fade-exit-left",
                exitActive: "fade-exit-active",
              }}
              timeout={300}
            >
              {/* {renderStep()} */}
              <div className='relative'>{steps[stepBre]}</div>
            </CSSTransition>
          </TransitionGroup>
        </div>
        <div className='flex justify-between pt-3 pb-3'>
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
              className={`p-3 font-bold text-xl bg-[#ededed] rounded-md hover:shadow-xl  box-border w-[13%] md:w-[8%] transition-shadow duration-300 flex items-center justify-center ${
                tmpData[stepBre].type === "imageComponent" ||
                stepBre === tmpData.length - 1
                  ? "hidden"
                  : ""
              }`}
            >
              <svg
                className='h-4'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 320 512'
              >
                <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
              </svg>
            </button>
          )}
          <button
            className={`p-3 font-bold text-xl bg-[#fea122] rounded-lg  hover:shadow-xl   box-border text-white transition-all duration-300 disabled:bg-gray-400 ${
              stepBre === 0 ? "w-full" : "w-[85%] md:w-[90%]"
            } ${
              tmpData[stepBre].type === "imageComponent" ||
              stepBre === tmpData.length - 1
                ? "hidden"
                : ""
            }`}
            disabled={validationArray[stepBre] !== "valid"}
            onClick={() => {
              setValue(stepBre, currentValue);
              resetCurrentValue();
              goToNextStep();
            }}
          >
            {stepBre === 0 ? "Compare Quotes" : "Continue"}
          </button>
        </div>
        <RemainingTime currentStep={stepBre} totalSteps={tmpData.length} />
      </div>
      {/* <div className='m-auto w-full flex items-center justify-center'>
        {valuesArray.map((value) => (
          <li>
            {value}
            <br />
          </li>
        ))}
      </div> */}
      <InPartnershipWith />
      <SaveMoney />
      <Footer />
    </>
  );
}

export default App;

// const tmpData = [
//   {
//     step: 0,
//     question: "Do you already have a time and attendance system ?",
//     questionValue: "isItTrue",
//     type: "yesNo",
//   },
//   {
//     step: 1,
//     questionValue: "nameAndCompany",
//     question: "What is your full name and company name?",
//     type: "doubleString",
//     typeOfDataOne: "string",
//     typeOfDataTwo: "string",

//     placeholderOne: "e.g. John Doe",
//     placeholderTwo: "e.g. Company Inc.",
//     iconOne: (
//       <svg
//         focusable='false'
//         aria-hidden='true'
//         viewBox='0 0 24 24'
//         data-testid='PersonOutlineIcon'
//       >
//         <path d='M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4'></path>
//       </svg>
//     ),

//     iconTwo: (
//       <svg
//         focusable='false'
//         aria-hidden='true'
//         viewBox='0 0 24 24'
//         data-testid='BusinessOutlinedIcon'
//       >
//         <path d='M12 7V3H2v18h20V7zM6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm4 12H8v-2h2zm0-4H8v-2h2zm0-4H8V9h2zm0-4H8V5h2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8zm-2-8h-2v2h2zm0 4h-2v2h2z'></path>
//       </svg>
//     ),
//     quoteOne: "Full Name",
//     quoteTwo: "Company Name",
//     regexOne: /^([a-zA-Z]+)\s+([a-zA-Z]+)$/,
//     regexTwo: /\b\w+\b/,
//   },
//   {
//     step: 2,
//     questionValue: "usersZIP",
//     question: "What is your company's ZIP code?",
//     typeOfData: "ZIP",
//     type: "string",
//     placeholder: "e.g. 90001",
//     icon: (
//       <svg
//         focusable='false'
//         aria-hidden='true'
//         viewBox='0 0 24 24'
//         data-testid='LocationOnOutlinedIcon'
//       >
//         <path d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7M7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9'></path>
//         <circle cx='12' cy='9' r='2.5'></circle>
//       </svg>
//     ),
//     quote: "Company ZIP code",
//     regex: /^\d{5}$/,
//   },
//   {
//     step: 3,
//     questionValue: "usersEmail",
//     question: "What is your e-mail?",
//     typeOfData: "email",
//     type: "string",
//     placeholder: "e.g. example@email.com",
//     icon: (
//       <svg
//         focusable='false'
//         aria-hidden='true'
//         viewBox='0 0 24 24'
//         data-testid='EmailOutlinedIcon'
//       >
//         <path d='M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0-8 5-8-5zm0 12H4V8l8 5 8-5z'></path>
//       </svg>
//     ),
//     quote: "Email",
//     regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//   },
//   {
//     step: 4,
//     question: "How many employees do you need to track?",
//     questionValue: "color",
//     answers: ["1 - 9", "10 - 24", "25 - 49", "50 - 99", "100+"],
//     answersValues: ["1-9", "10-24", "25-49", "50-99", "100+"],
//     type: "radio",
//   },

//   {
//     step: 5,
//     question:
//       " What is your favorite color 2? What is your favorite color 2? What is your favorite color 2",
//     questionValue: "color2",
//     answers: ["Red", "Blue", "Green"],
//     answersValues: ["red", "blue", "green"],
//     type: "radioMulti",
//   },
//   {
//     step: 6,
//     question:
//       " Laboris in tempor anim cillum exercitation sint ea minim incididunt excepteur do ut.",
//     questionValue: "color2",
//     answers: ["Car", "Train", "Van"],
//     answersValues: ["car", "train", "van"],
//     imagesValues: [Car, Train, Van],
//     type: "radioMultiWithImages",
//   },
//   {
//     step: 7,
//     question:
//       " Laboris in tempor anim cillum exercitation sint ea minim incididunt excepteur do ut.",
//     questionValue: "color2",
//     answers: ["Paychex", "TCP", "ADP"],
//     answersValues: ["paychex", "tcp", "adp"],
//     imagesValues: [
//       "https://chameleon-assets.mvfglobal.com/images/icons/21a16efdf23efa41c252f39e5e6874c1.svg",
//       "https://chameleon-assets.mvfglobal.com/images/icons/de503a2807c222460469a392532d23b1.svg",
//       "https://chameleon-assets.mvfglobal.com/images/icons/d42fa404614a7ebd43b83e1abd5e86a5.svg",
//     ],
//     type: "radioMultiWithImages",
//   },
//   {
//     step: 8,
//     question:
//       " Cupidatat incididunt enim pariatur laborum laboris deserunt deserunt id commodo pariatur.",
//     questionValue: "color2",
//     answers: ["Car/Automobile", "Train/Tram", "Van/Truck", "Other Van"],
//     answersValues: ["car", "train", "van", "other van"],
//     imagesValues: [Car, Train, Van, Van],
//     type: "radioMultiImages",
//   },
//   {
//     step: 9,
//     question:
//       " Cupidatat incididunt enim pariatur laborum laboris deserunt deserunt id commodo pariatur.",
//     questionValue: "firm",
//     answers: ["Paychex", "TCP", "ADP", "Timetrex"],
//     answersValues: ["paychex", "tcp", "adp", "timetrex"],
//     imagesValues: [
//       "https://chameleon-assets.mvfglobal.com/images/icons/21a16efdf23efa41c252f39e5e6874c1.svg",
//       "https://chameleon-assets.mvfglobal.com/images/icons/de503a2807c222460469a392532d23b1.svg",
//       "https://chameleon-assets.mvfglobal.com/images/icons/d42fa404614a7ebd43b83e1abd5e86a5.svg",
//       "https://chameleon-assets.mvfglobal.com/images/icons/87985503d1cba1264770383d4af7fdb0.svg",
//     ],
//     type: "radioMultiImages",
//   },
//   {
//     step: 10,
//     type: "imageComponent",
//     question: "Hold on - we're finding providers that best match your needs!",
//     src: gifImage,
//     alt: "image_of_search",
//   },

//   {
//     step: 11,
//     type: "image",
//     question: "Hold on - we're finding providers that best match your needs!",
//     src: endImage,
//   },
// ];
