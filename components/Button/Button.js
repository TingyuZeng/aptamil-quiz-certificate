import classes from "./Button.module.scss";

const Button = ({ primary = true, children, clickHandler }) => {
  return (
    <button
      className={primary ? classes.primary : classes.secondary}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};

export default Button;
