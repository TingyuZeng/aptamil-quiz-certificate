import { useState } from "react";

const useInput = ({ validateHandler, defaultPlaceholder = "" }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);
  const [isTouched, setIsTouched] = useState(false);

  const enteredValueIsValid = validateHandler(enteredValue);
  const inputIsInvalid = !enteredValueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueInputBlurHandler = (e) => {
    setIsTouched(true);
    if (!enteredValueIsValid) {
      setPlaceholder(defaultPlaceholder);
    }
  };

  const clearInput = (e) => {
    e?.preventDefault();
    setIsTouched(false);
    setEnteredValue("");
  };

  return {
    enteredValue,
    enteredValueIsValid,
    placeholder,
    inputIsInvalid,
    valueChangeHandler,
    valueInputBlurHandler,
    clearInput,
  };
};

export default useInput;
