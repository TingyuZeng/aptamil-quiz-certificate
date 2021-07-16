import classes from "./Button.module.scss";

const Button = ({
  left = false,
  right = false,
  primary = true,
  children,
  clickHandler,
  type = "button",
}) => {
  const btnClass1 = primary ? classes.primary : classes.secondary;
  const btnClass2 = left ? classes.left : "";
  const btnClass3 = right ? classes.right : "";

  return (
    <button
      className={`${btnClass1} ${btnClass2} ${btnClass3}`}
      onClick={clickHandler}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
