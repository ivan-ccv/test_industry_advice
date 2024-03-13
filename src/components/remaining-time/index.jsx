import React from "react";

const RemainingTime = ({ currentStep, totalSteps }) => {
  const jump = 60 / totalSteps;
  const end = currentStep === totalSteps - 1;
  return (
    <div
      className={`flex gap-3 w-full text-center items-center justify-center ${
        end && "hidden"
      }`}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 448 512'
        className='h-5'
      >
        <path d='M176 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h16V98.4C92.3 113.8 16 200 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-41.8-12.3-80.7-33.5-113.2l24.1-24.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L355.7 143c-28.1-23-62.2-38.8-99.7-44.6V64h16c17.7 0 32-14.3 32-32s-14.3-32-32-32H224 176zm72 192V320c0 13.3-10.7 24-24 24s-24-10.7-24-24V192c0-13.3 10.7-24 24-24s24 10.7 24 24z' />
      </svg>
      {currentStep === 0 && <p>It only takes a minute!</p>}
      {currentStep > 0 && (
        <p>
          <span className='font-bold'>
            {Math.ceil(60 - jump * currentStep)}
          </span>{" "}
          seconds left...
        </p>
      )}
    </div>
  );
};

export default RemainingTime;
