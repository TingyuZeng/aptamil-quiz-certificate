import Image from "next/image";
import { useSelector } from "react-redux";
import placeholder from "../../public/avatar-placeholder.png";

import classes from "./Avatar.module.scss";

const Avatar = () => {
  const player = useSelector((state) => state.players)[0];

  const headimgurl = player?.headimgurl ?? placeholder;
  const isCertified = player?.isCertified ?? false;

  if (isCertified)
    return (
      <div className={classes.pos}>
        <div className={classes.avatar}>
          <svg
            width="84"
            height="104"
            viewBox="0 0 84 104"
            // height="0"
            // width="0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="shield-mask">
                <path d="M41.546 -7.62939e-06C11.646 -7.62939e-06 0 6.30001 0 22.473V64.06C0 76.22 11.778 87.93 21.845 94.265C27.9812 98.086 34.6086 101.055 41.545 103.089C48.4748 101.057 55.0964 98.093 61.228 94.278C71.313 87.943 83.073 76.233 83.073 64.073V22.473C83.09 6.29902 71.447 -7.62939e-06 41.546 -7.62939e-06Z" />
              </clipPath>
            </defs>
          </svg>

          <Image src={headimgurl} layout="fill" objectFit="cover" />
        </div>
      </div>
    );

  return (
    <div className={classes.neg}>
      <div className={classes.avatar}>
        <Image src={headimgurl} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Avatar;
