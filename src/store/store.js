import { create } from "zustand";

function createValidityArray(tmpDataLength) {
  // Create an empty array
  const array = [];

  // Fill the array with "initial" using a loop
  for (let i = 0; i < tmpDataLength; i++) {
    array.push("initial");
  }

  // Return the populated array
  return array;
}
function createValuesArray(tmpDataLength) {
  // Create an empty array
  const array = [];

  // Fill the array with "null" using a loop
  for (let i = 0; i < tmpDataLength; i++) {
    array.push(null);
  }

  // Return the populated array
  return array;
}

const tmpData = [
  {
    step: 0,
    question: "Do you already have a time and attendance system ?",
    questionValue: "isItTrue",
    type: "yesNo",
  },
  {
    step: 1,
    questionValue: "usersZIP",
    question: "What is your company's ZIP code?",
    typeOfData: "ZIP",
    type: "string",
    placeholder: "e.g. 90001",
    // icon: (
    //   <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
    //     <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
    //   </svg>
    // ),
    quote: "Company ZIP code",
    regex: /^\d{5}$/,
  },
  {
    step: 2,
    questionValue: "usersEmail",
    question: "What is your email?",
    typeOfData: "email",
    type: "email",
    placeholder: "e.g. example@email.com",
    // icon: (
    //   <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'>
    //     <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
    //   </svg>
    // ),
    quote: "Your e-mail",
    regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  {
    step: 3,
    question: "How many employees do you need to track?",
    questionValue: "color",
    answers: ["1 - 9", "10 - 24", "25 - 49", "50 - 99", "100+"],
    answersValues: ["1-9", "10-24", "25-49", "50-99", "100+"],
    type: "radio",
  },

  {
    step: 4,
    question:
      " What is your favorite color 2? What is your favorite color 2? What is your favorite color 2",
    questionValue: "color2",
    answers: ["Red", "Blue", "Green"],
    answersValues: ["red", "blue", "green"],
    type: "radioMulti",
  },
  {
    step: 5,
    question:
      " Laboris in tempor anim cillum exercitation sint ea minim incididunt excepteur do ut.",
    questionValue: "color2",
    answers: ["Car", "Train", "Van"],
    answersValues: ["car", "train", "van"],
    // imagesValues: [Car, Train, Van],
    type: "radioMultiWithImages",
  },
  {
    step: 6,
    question:
      " Cupidatat incididunt enim pariatur laborum laboris deserunt deserunt id commodo pariatur.",
    questionValue: "color2",
    answers: ["Car/Automobile", "Train/Tram", "Van/Truck"],
    answersValues: ["car", "train", "van"],
    // imagesValues: [Car, Train, Van],
    type: "radioMultiImages",
  },
  {
    step: 7,
    type: "image",
    question: "Hold on - we're finding providers that best match your needs!",
  },
  {
    step: 8,
    type: "image",
    question: "Hold on - we're finding providers that best match your needs!",
  },
  {
    step: 9,
    type: "image",
    question: "Hold on - we're finding providers that best match your needs!",
  },
  {
    step: 10,
    type: "image",
    question: "Hold on - we're finding providers that best match your needs!",
  },
];

const validationArray = createValidityArray(tmpData.length);
const valuesArray = createValuesArray(tmpData.length);

export const useStore = create((set) => ({
  step: 0,
  currentValue: null,
  previousStep: 0,
  validationArray: validationArray,
  valuesArray: valuesArray,

  goToNextStep: () =>
    set((state) => ({
      previousStep: state.step, // Update previousStep
      step: state.step + 1,
    })),
  goToPrevStep: () =>
    set((state) => ({
      previousStep: state.step, // Update previousStep
      step: state.step - 1,
    })),
  goToPrevStepTwice: () =>
    set((state) => ({
      previousStep: state.step, // Update previousStep
      step: state.step - 2,
    })),
  setToValid: (step) =>
    set((state) => ({
      validationArray: state.validationArray.map((item, index) =>
        index === step ? "valid" : item
      ),
    })),
  setToInvalid: (step) =>
    set((state) => ({
      validationArray: state.validationArray.map((item, index) =>
        index === step ? "invalid" : item
      ),
    })),
  setValue: (step, value) =>
    set((state) => ({
      valuesArray: state.valuesArray.map((item, index) =>
        index === step ? value : item
      ),
    })),
  setCurrentValue: (value) =>
    set((state) => ({
      currentValue: value,
    })),
  resetCurrentValue: () =>
    set((state) => ({
      currentValue: null,
    })),
}));
