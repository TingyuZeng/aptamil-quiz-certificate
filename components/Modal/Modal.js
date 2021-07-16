import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import classes from "./Modal.module.scss";

const Modal = ({ clickHandler }) => {
  const ref = useRef(null);

  useEffect(() => {
    const adjustHeight = () => {
      ref.current.style.height = `${document.body.clientHeight}px`;
    };
    adjustHeight();
    window.addEventListener("resize", adjustHeight);

    return () => {
      window.removeEventListener("resize", adjustHeight);
    };
  }, []);

  return (
    <div className={classes.backdrop} onClick={clickHandler} ref={ref}>
      <div className={classes.content}>
        <p>请截图并分享给您的微信好友</p>
        <Button clickHandler={clickHandler}>返回</Button>
      </div>
    </div>
  );
};

export default Modal;
