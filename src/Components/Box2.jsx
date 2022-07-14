import React, { useState } from "react";
import { motion } from "framer-motion";

const Box2 = () => {
  const [isAnimate, setisAnimate] = useState(false);
  return (
    <div className="box-container">
      <motion.div
        className="box"
        whileHover={{
          scale: 1.1,
        }}
        drag
        dragConstraints={{
          right: 20,
          left: -20,
          top: 5,
          bottom: 5,
        }}
        whileTap={{
          scale: 0.9,
        }}
        initial={{
          opacity: 0.5,
        }}
      ></motion.div>
    </div>
  );
};

export default Box2;
