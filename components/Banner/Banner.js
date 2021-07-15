import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import mainImage from "../../public/main-visual.png";

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
            src={mainImage}
            alt="A mother holding her baby"
            layout="fill"
            objectFit="cover"
            placeholder="blur"
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
