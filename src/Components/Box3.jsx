import React, { useState } from "react";
import { motion } from "framer-motion";

const Box3 = () => {
  const [isAnimate, setisAnimate] = useState(false);

  // const boxVariant = {
  //   lion: {
  //     x: 100,
  //     scale: 1.2,
  //   },
  //   ele: {
  //     x: 1000,
  //     scale: 0.5,
  //   },
  // };
  const boxvariant = {
    hidden: {
      x: "-100vh",
    },
    visible: {
      x: 0,
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className="box-container">
      <motion.div
        className="box"
        // variants={boxVariant}
        // initial="lion"
        // animate="ele"
        variants={boxvariant}
        animate="visible"
        initial="hidden"
      >
        {[1, 2, 3].map((box) => (
          <motion.li className="box-item" variants={listVariant}></motion.li>
        ))}
      </motion.div>
    </div>
  );
};

export default Box3;
