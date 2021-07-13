import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import classes from "./Content.module.scss";

const Content = ({
  title,
  children,
  logo = false,
  variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  },
}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className={classes.body}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {logo && (
          <div className={classes.logo}>
            <Image
              src="/logo-horizontal.svg"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}

        {title && <h1>{title}</h1>}

        <div>{children}</div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Content;
