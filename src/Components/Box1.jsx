import React, { useState } from "react";
import { motion } from "framer-motion";

const Box1 = () => {
  const [isAnimate, setisAnimate] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          x: isAnimate ? 1000 : 0,
          opacity: isAnimate ? 1 : 0.5,
          rotate: isAnimate ? 360 : 0,
        }}
        initial={{
          opacity: 0.1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 5,
        }}
        onClick={() => setisAnimate(!isAnimate)}
      ></motion.div>
    </div>
  );
};

export default Box1;
