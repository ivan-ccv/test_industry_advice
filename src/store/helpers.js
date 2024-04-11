export const extractQuestions = (formData) => {
  const questions = [];

  formData.forEach((item) => {
    if (item.type === "doubleString") {
      questions.push(item.questionValueOne);
      questions.push(item.questionValueTwo);
    } else {
      questions.push(item.questionValue);
    }
  });

  return questions;
};

export const extractValues = (formData) => {
  const values = [];

  formData.forEach((item) => {
    if (Array.isArray(item)) {
      values.push(item[0]);
      values.push(item[1]);
    } else {
      values.push(item);
    }
  });

  return values;
};

export const mergeArraysIntoMap = (keys, values) => {
  const mergedMap = new Map();

  if (keys.length !== values.length) {
    throw new Error("Arrays must be of the same length");
  }

  for (let i = 0; i < keys.length; i++) {
    if (!values[i]) {
      continue;
    }
    mergedMap.set(keys[i], values[i]);
  }

  return mergedMap;
};
