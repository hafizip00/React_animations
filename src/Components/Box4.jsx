import React from "react";
import { motion } from "framer-motion";

const Box4 = () => {
  return (
    <div className="box-container">
      <motion.div
        className="box"
        animate={{
          scale: [1, 1.4, 1.4, 1, 1],
          borderRadius: ["25%", "25%", "50%", "50%", "25%"],
          rotate: [0, 0, 270, 270, 0],
          transition: {
            duration: 2,
          },
        }}
      ></motion.div>
    </div>
  );
};

export default Box4;
