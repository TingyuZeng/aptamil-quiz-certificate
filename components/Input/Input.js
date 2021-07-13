import * as React from "react";
import classes from "./Input.module.scss";

const Input = (props) => {
  const {
    label,
    type,
    name,
    handleChange,
    handleBlur,
    errorMessage,
    isValid,
    value,
    placeholder,
  } = props;
  return (
    <div className={classes.container}>
      {label && <lable>{lable}</lable>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errorMessage && !isValid && <span>{errorMessage}</span>}
    </div>
  );
};

export default React.memo(Input);
