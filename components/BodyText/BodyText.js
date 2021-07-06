import Image from "next/image";

import classes from "./BodyText.module.scss";

const BodyText = ({ title, children }) => {
  return (
    <div className={classes.body}>
      <div className={classes.logo}>
        <Image
          src="/logo-horizontal.svg"
          alt="logo"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <h1>{title}</h1>

      <div>{children}</div>
    </div>
  );
};

export default BodyText;
