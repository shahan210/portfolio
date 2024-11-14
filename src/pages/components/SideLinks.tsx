import React from "react";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
const SideLinks: React.FC = () => {
  return (
    <div className="sidelinks">
      <a href="https://www.google.com" target="blank">
        <motion.div
          initial={{ x: 76 }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className="Links__linkedIn"
        >
          <FaLinkedinIn className="icon" />
          LinkedIn
        </motion.div>
      </a>
      <a href="https://www.google.com" target="blank">
        <motion.div initial={{ x: 76 }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} className="Links__gitHub">
          <FaGithub className="icon" />
          GitHub
        </motion.div>
      </a>
      <a href="https://www.google.com" target="blank">
        <motion.div initial={{ x: 76 }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} className="Links__email">
          <MdOutlineEmail className="icon" />
          Email
        </motion.div>
      </a>

      <a href="https://www.google.com" target="blank">
        <motion.div initial={{ x: 76 }} whileHover={{ x: 0 }} transition={{ duration: 0.3 }} className="Links__resume">
          <BsFileEarmarkPerson className="icon" /> Resume
        </motion.div>
      </a>
    </div>
  );
};

export default SideLinks;
