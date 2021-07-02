import Image from "next/image";
import logo from "../../public/logo.png";

import PCScreen from "../PC/PCScreen";

import classes from "./Base.module.scss";

const Base = (props) => {
  if (props.mobile != true) return <PCScreen />;

  return (
    <>
      <div className={classes.logo}>
        <Image src={logo} alt="logo" layout="fill" objectFit="contain" />
      </div>
      {props.children}
    </>
  );
};

export default Base;
