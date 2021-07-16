import Button from "../Button/Button";
import classes from "./Modal.module.scss";

const Modal = ({ clickHandler }) => {
  return (
    <div className={classes.backdrop} onClick={clickHandler}>
      <div className={classes.content}>
        <p>请截图并分享给您的微信好友</p>
        <Button clickHandler={clickHandler}>返回</Button>
      </div>
    </div>
  );
};

export default Modal;
