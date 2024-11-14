import React from "react";
import { motion } from "framer-motion";
const Intro: React.FC = () => {
  return (
    <div className="developer__content">
      <div className="developer__name">
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          Hey, my name is
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="developer__shahan"
        >
          Mohammed Shahan
        </motion.p>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="developer__title"
      >
        I'm a Full Stack Developer
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="developer__description"
      >
        A Full Stack Developer, specialized in crafting dynamic and user-friendly web applications. Expertise lies in
        leveraging MongoDB, Express.js, React, Node.js and Typescript to deliver innovative digital solutions.
      </motion.p>
    </div>
  );
};

export default Intro;
