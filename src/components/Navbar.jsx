import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <motion.nav
      id="navbar"
      className="top w-full bg-transparent text-primary p-3 top-0 z-10 text-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto flex justify-between items-right">
        <ul className="flex space-x-8 ml-auto">
          {/* <motion.a
            initial={{
              color: colors.secondary,
              filter: `drop-shadow(0px 0px 0px)`,
              opacity: 1,
            }}
            whileHover={{
              color: colors.primary,
              filter: `drop-shadow(0px 0px 5px ${colors.primary})`,
            }}
            href="https://www.linkedin.com/in/miguelafmonteiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative -translate-y-[3px]" // Adjust this value if needed

          >
            <FontAwesomeIcon icon={faSun} size="xs" />
          </motion.a> */}
          <Link to='career' smooth={true} duration={400}>
            <motion.div 
              className="relative text-base text-primary cursor-pointer underline-animate"
            >
              Career
            </motion.div>
          </Link>
          <Link to='education' smooth={true} duration={800}>
            <motion.div 
              className="relative text-base text-primary cursor-pointer underline-animate"
            >
              Education
            </motion.div>
          </Link>
          <Link to='publications' smooth={true} duration={1200}>
            <motion.div 
              className="relative text-base text-primary cursor-pointer underline-animate"
            >
              Publications
            </motion.div>
          </Link>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
