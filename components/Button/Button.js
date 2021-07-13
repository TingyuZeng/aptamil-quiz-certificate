import classes from "./Button.module.scss";

const Button = ({
  primary = true,
  children,
  clickHandler,
  type = "button",
}) => {
  return (
    <button
      className={primary ? classes.primary : classes.secondary}
      onClick={clickHandler}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
