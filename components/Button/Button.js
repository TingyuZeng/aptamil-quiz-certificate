import classes from "./Button.module.scss";

const Button = ({ primary = true, children }) => {
  return (
    <button className={primary ? classes.primary : classes.secondary}>
      {children}
    </button>
  );
};

export default Button;
