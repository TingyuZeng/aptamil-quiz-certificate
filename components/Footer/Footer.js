import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import classes from "./Footer.module.scss";
import ClientOnlyPortal from "../Modal/ClientOnlyPortal";

const Footer = ({ children }) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const router = useRouter();

  let buttons;
  if (typeof children === "undefined") {
    buttons = (
      <>
        <Button
          left
          primary={false}
          clickHandler={() => router.push("/verify")}
        >
          返回
        </Button>
        <Button right clickHandler={() => setModalIsShown(true)}>
          分享
        </Button>
        {modalIsShown && (
          <ClientOnlyPortal selector="#modal">
            <Modal clickHandler={() => setModalIsShown(false)} />
          </ClientOnlyPortal>
        )}
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
