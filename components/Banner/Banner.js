import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import classes from "./Banner.module.scss";

const BLURDATAURL =
  "data:image/png;base64,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";

const mainImage =
  "https://res.cloudinary.com/duykdzv1k/image/upload/v1627569173/main_visual_f46e561a43.png";

const Banner = ({ children, variants = null }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={classes.visual}
        variants={variants}
        initial="initial"
        exit="exit"
        animate="animate"
      >
        {!children && (
          <Image
            src={mainImage}
            alt="A mother holding her baby"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={BLURDATAURL}
          />
        )}
        {children && (
          <div className={classes.heading}>
            <div className={classes.text}>{children}</div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Banner;
