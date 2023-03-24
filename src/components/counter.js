import React, { useState } from "react";
import { motion } from "framer-motion";
import "./counter.css";

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  // delay: { delay: 5 },
  visible: { opacity: 1, x: 0, delay: 10 },
  hidden: { opacity: 0, x: -100 },
};

function countInitial() {
  return 0;
}

function Counter() {
  const [count, setcount] = useState(() => countInitial());

  function dec() {
    setcount((prevCount) => prevCount - 1);
  }

  function inc() {
    setcount((prevCount) => prevCount + 1);
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      className="body"
    >
      <motion.button variants={item} onClick={dec}>
        -
      </motion.button>
      <motion.span variants={item}>{count}</motion.span>
      <motion.button variants={item} onClick={inc}>
        +
      </motion.button>
    </motion.div>
  );
}
export default Counter;
