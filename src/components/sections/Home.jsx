import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import me from '../../assets/img/me.jpg';

const Home = () => {
  return (
    <motion.div 
      id="home" 
      className="flex flex-col items-center justify-center min-h-screen"
      initial={{
        opacity: 0
      }}
      animate={{
        opacity: 1
      }}
      transition={{duration: 0.5, delay: 3.5}}
    >
      <motion.div 
        className="w-64 h-64 rounded-full overflow-hidden"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={me}
          alt="Me"
          className="w-64 h-64 object-cover"
          style={{ 
            transform: 'scale(2.3) translate(-3.5%, 28%)',
          }}
        />
      </motion.div>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-primary text-center mb-7 mt-10"
      >
        Miguel Monteiro
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl mb-7 text-secondary text-center"
      >
        {"Software Engineer @ "}
        <a 
					href="https://humanready.io"
					target="_blank"
					rel="noopener noreferrer"
          className="relative cursor-pointer underline-animate"
        >
          Human Ready
        </a>
      </motion.p>
      <motion.ul 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-x-4"
      >
        <motion.a
          initial={{
            color: "var(--secondary)",
            filter: `drop-shadow(0px 0px 0px)`,
            opacity: 1,
          }}
          whileHover={{
            color: "var(--primary)",
            filter: `drop-shadow(0px 0px 5px var(--primary))`,
          }}
          href="https://www.linkedin.com/in/miguelafmonteiro/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </motion.a>
        <motion.a
          initial={{
            color: "var(--secondary)",
            filter: `drop-shadow(0px 0px 0px)`,
            opacity: 1,
            scale: 1,
          }}
          whileHover={{
            color: "var(--primary)",
            filter: `drop-shadow(0px 0px 5px var(--primary))`,
            scale: 1.2,
          }}
          href="https://github.com/miguelafmonteiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </motion.a>
        <motion.a
          initial={{
            color: "var(--secondary)",
            filter: `drop-shadow(0px 0px 0px)`,
            opacity: 1,
          }}
          whileHover={{
            color: "var(--primary)",
            filter: `drop-shadow(0px 0px 5px var(--primary))`,
          }}
          href="mailto:miguel.af.monteiro5@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
        </motion.a>
      </motion.ul>
    </motion.div>
  );
};

export default Home;
