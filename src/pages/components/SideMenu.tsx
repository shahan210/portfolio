import React from "react";
const text = "Mohammed shahan";
import splitStringUsingRegex from "../../utils/splitStringUsingRegex";
import { motion } from "framer-motion";
const SideMenu: React.FC = () => {
  const textChars = splitStringUsingRegex(text);
  const charVariants = {
    hidden: {
      opacity: 0,
    },
    reveal: {
      opacity: 1,
    },
  };
  console.log(textChars);

  return (
    <nav className="sidemenu">
      <motion.p initial="hidden" whileInView="reveal" transition={{ staggerChildren: 0.02 }} className="name">
        {textChars.map((char, index) => (
          <motion.span key={index} transition={{ duration: 0.5 }} variants={charVariants} viewport={{ once: true }}>
            {char}
          </motion.span>
        ))}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="sidemenu__menu"
      >
        <p>Home</p>
        <p>About</p>
        <p>Work</p>
        <p>Project</p>
        <p>Contact</p>
      </motion.div>
    </nav>
  );
};

export default SideMenu;
