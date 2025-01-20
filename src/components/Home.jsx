import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
      <div id="home" style={{ backdropFilter: "blur(2px)" }} className="mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-6">
        {/* <motion.img
          src={me}
          alt="Me"
          className="rounded-full shadow-lg w-64 h-64 object-cover"
          initial={{ opacity: 0, y: -20 }}
          style={{
            objectPosition: 'center 100%',
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8}}
        /> */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-4xl lg:text-6xl font-smooch font-bold text-white mb-7 mt-10 text-center"
        >
          Miguel Monteiro
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-3xl font-smooch text-white mb-7 text-center"
        >
          Software Engineer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex">
          <motion.a
            whileHover={{
              scale: 1.2,
              color: "#0f0",
            }}
            className="mr-4 text-gray-400"
            href="https://www.linkedin.com/in/miguelafmonteiro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2xl" />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.2,
              color: "#0f0",
            }}
            className="mr-4 text-gray-400"
            href="https://github.com/miguelafmonteiro"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} size="2xl" />
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.2,
              color: "#0f0",
            }}
            className="mr-4 text-gray-400"
            href="mailto:miguel.af.monteiro5@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          </motion.a>
        </motion.div>
      </div>
  );
};

export default Home;
