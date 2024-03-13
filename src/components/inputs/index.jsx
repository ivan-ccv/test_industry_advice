import React, { useState } from 'react';

const InputComponent = ({ type, onClick,questionValue,questionText,answerValue, answerText }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onClick();
  };

  if (type === 'yesno') {
    return (
      <div>
        <label>
          Yes
          <input
            type="radio"
            name="yesno"
            value="yes"
            checked={value === 'yes'}
            onChange={handleChange}
          />
        </label>
        <label>
          No
          <input
            type="radio"
            name="yesno"
            value="no"
            checked={value === 'no'}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  } else if (type === 'string') {
    return (
      <input
        type="text"
        value={value}
        onChange={handleChange}
      />
    );
  } else if (type === 'pickone') {
    return (
      <div>
        <label>
          Option 1
          <input
            type="radio"
            name="pickone"
            value="Option 1"
            checked={value === 'Option 1'}
            onChange={handleChange}
          />
        </label>
        <label>
          Option 2
          <input
            type="radio"
            name="pickone"
            value="Option 2"
            checked={value === 'Option 2'}
            onChange={handleChange}
          />
        </label>
        <label>
          Option 3
          <input
            type="radio"
            name="pickone"
            value="Option 3"
            checked={value === 'Option 3'}
            onChange={handleChange}
          />
        </label>
      </div>
    );
  } else {
    return null;
  }
};

export default InputComponent;