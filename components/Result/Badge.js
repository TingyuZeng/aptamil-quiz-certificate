import Image from "next/image";
import classes from "./Badge.module.scss";

const Badge = ({ certificate }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.flipper}>
        <div className={classes.front}>
          <Image src={certificate.badgeUrl} layout="fill" objectFit="contain" />
        </div>
        <div className={classes.back}>
          <p className={classes.time}>
            {certificate.courseTime.cn}
            <small className={classes.en}>{certificate.courseTime.en}</small>
          </p>
          <p>
            {certificate.courseContent.cn}
            <small className={classes.en}>{certificate.courseContent.en}</small>
          </p>
        </div>
      </div>
      <h5 className={classes.title}>
        {certificate.courseTitle.cn}
        <small className={classes.en}> {certificate.courseTitle.en}</small>
      </h5>
    </div>
  );
};

export default Badge;
