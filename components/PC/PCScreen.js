import Image from "next/image";
import pcBg from "../../public/pc-background.png";
import qrcode from "../../public/qrcode.png";

import classes from "./PCScreen.module.scss";

const PCScreen = () => {
  return (
    <div className={classes.screen}>
      <Image
        className={classes.bg}
        src={pcBg}
        layout="fill"
        objectFit="cover"
        placeholder="blur"
      />

      <div className={classes.text}>
        <h1>爱他美代购培训证书</h1>
        <h2>培训验证通道</h2>
        <div className={classes.qrcode}>
          <Image
            src={qrcode}
            layout="fill"
            objectFit="contain"
            placeholder="blur"
          />
        </div>
        <h3>请使用微信扫描二维码开始验证</h3>
      </div>
    </div>
  );
};

export default PCScreen;
