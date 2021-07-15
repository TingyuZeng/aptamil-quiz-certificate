import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import classes from "./Banner.module.scss";

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
            src="/main-visual.png"
            alt="A mother holding her baby"
            layout="fill"
            objectFit="cover"
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
