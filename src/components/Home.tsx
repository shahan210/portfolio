import React from "react";
import { BsFileEarmarkPerson } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="sidelinks">
        <a href="https://www.google.com" target="blank">
          <motion.div
            initial={{ x: -72 }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="Links__resume"
          >
            Resume <BsFileEarmarkPerson className="icon" />
          </motion.div>
        </a>
        <a href="https://www.google.com" target="blank">
          <motion.div
            initial={{ x: -72 }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="Links__linkedIn"
          >
            LinkedIn <FaLinkedinIn />
          </motion.div>
        </a>
        <a href="https://www.google.com" target="blank">
          <motion.div
            initial={{ x: -72 }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="Links__gitHub"
          >
            GitHub <FaGithub />
          </motion.div>
        </a>
        <a href="https://www.google.com" target="blank">
          <motion.div
            initial={{ x: -72 }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
            className="Links__email"
          >
            Email <MdOutlineEmail />
          </motion.div>
        </a>
      </div>
      <div className="home__content">
        <div className="image__content">
          <div className="developer__content">
            <div className="developer__name">
              <p>Hey, my name is</p>
              <p className="developer__shahan">Mohammed Shahan</p>
            </div>
            <p className="developer__title">I'm a Full Stack Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
