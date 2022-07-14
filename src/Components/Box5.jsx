import { motion, useAnimation } from "framer-motion";
import React from "react";

const Box5 = () => {
  const control = useAnimation();
  return (
    <div className="box-container">
      <div className="btns">
        <button
          className="btn"
          onClick={() => {
            control.start({
              x: 1000,
              transition: {
                duration: 2,
              },
            });
          }}
        >
          Move To Right
        </button>
        <button
          className="btn"
          onClick={() => {
            control.start({
              x: 0,
              transition: {
                duration: 2,
              },
            });
          }}
        >
          Move To Left
        </button>
        <button
          className="btn"
          onClick={() => {
            control.start({
              borderRadius: "50%",
              transition: {
                duration: 1,
              },
            });
          }}
        >
          Circle
        </button>
        <button
          className="btn"
          onClick={() => {
            control.start({
              borderRadius: 0,
              transition: {
                duration: 1,
              },
            });
          }}
        >
          Square
        </button>
        <button className="btn" onClick={() => control.stop()}>
          Stop
        </button>
      </div>
      <motion.div className="box" animate={control}></motion.div>
    </div>
  );
};

export default Box5;
