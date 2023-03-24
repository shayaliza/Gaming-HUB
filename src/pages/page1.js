import React from "react";
import { motion } from "framer-motion";
// import { animate } from "framer-motion";
import "./page1.css";
import "./gamecontrol.jpeg";

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  // delay: { delay: 5 },
  visible: { opacity: 1, x: 0, delay: 10 },
  hidden: { opacity: 0, x: -100 },
};

function Page1() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={list}
      className="main"
    >
      <div className="left1">
        <motion.div
          animate={{ x: 0, y: 1 }}
          transition={{ duration: 0.5 }}
          className="left"
        ></motion.div>
        <motion.h1 variants={item}>Let the game begin</motion.h1>
        <motion.p variants={item}>
          Hello, I have recently developed this gaming website using react.js
          and would appreciate it if you could take a look at it. If you have
          any feedback or suggestions on how to improve it, I would be grateful
          to hear your thoughts. Additionally, if you have any experience with
          debugging, I would appreciate your help in identifying and resolving
          any issues. Thank you for your time.
        </motion.p>
        <motion.div variants={item} className="chat">
          Greetings! Would you care to engage in a brief conversation with me?
        </motion.div>
        <motion.div variants={item} className="my_form">
          {" "}
          <form
            action="https://formsubmit.co/magicalmind01@email.com"
            method="POST"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="email"
          />
          <input
            type="text"
            name="message"
            required
            placeholder="messsage"
            className="msg"
          />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="https://yourdomain.co/thanks.html"
          />
          <input
            type="hidden"
            name="_subject"
            value="New submission from gaming HUB!"
          />
          <input
            type="hidden"
            name="_blacklist"
            value="spammy pattern, banned term, phrase"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Hello, nice to hear from you I will get in touch with you very soon "
          />
          <button type="submit" class="btn btn-outline-dark">
            Send
          </button>
        </motion.div>
      </div>
      <motion.div variants={item} className="my_container">
        {/* <motion.div variants={item} className="child_container"></motion.div> */}
      </motion.div>
    </motion.div>
  );
}
export default Page1;
