import { useRouter } from "next/router";
import Button from "../Button/Button";

import classes from "./Footer.module.scss";

const Footer = ({ children }) => {
  const router = useRouter();

  let buttons;
  if (typeof children === "undefined") {
    buttons = (
      <>
        <Button primary={false} clickHandler={() => router.push("/verify")}>
          返回
        </Button>
        <Button clickHandler={() => router.back()}>分享</Button>
      </>
    );
  }

  return (
    <div className={classes.footer}>
      {router.pathname === "/" && (
        <img className={classes.svg} src="/curve.svg" alt="" />
      )}
      <div className={classes.buttons}>{children ?? buttons}</div>
    </div>
  );
};

export default Footer;
