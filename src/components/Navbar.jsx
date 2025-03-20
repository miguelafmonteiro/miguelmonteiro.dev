import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { colors } from '../assets/colors';
import { context } from './ContextProvider';

const Navbar = () => {
  const { nameStyle } = context();

  return (
    <motion.nav
      id="navbar"
      className="sticky w-full bg-transparent text-catppuccin-frappe-base p-3 top-0 z-10 font-smooch text-2xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to='top' smooth={true} duration={400}>
          <motion.div 
            className={`${nameStyle} text-3xl font-bold cursor-pointer`}
            whileHover={{
              filter: `drop-shadow(0px 0px 5px ${colors.catppuccin.frappe.flamingo.rgb})`,
              opacity: 1
            }}
            initial={{
              filter: `drop-shadow(0px 0px 0px ${colors.catppuccin.latte.crust.rgb})`,
              opacity: 0.7
            }}
          >
            Miguel Monteiro
          </motion.div>
        </Link>
        <ul className="flex space-x-4">
          <Link to='experience' smooth={true} duration={400}>
            <motion.div 
              className="text-catppuccin-frappe-base round-button gradient-background-frappe-lbt font-bold cursor-pointer"
              whileHover={{
                filter: `drop-shadow(0px 0px 5px ${colors.catppuccin.frappe.lavender.rgb})`,
                opacity: 1
              }}
              initial={{
                colors: colors.catppuccin.frappe.flamingo.hex,
                filter: `drop-shadow(0px 0px 0px ${colors.catppuccin.latte.crust.rgb})`,
                opacity: 0.7
              }}
            >
              Experience
            </motion.div>
          </Link>
          {/* <motion.a 
            href="#education" 
            className="text-catppuccin-frappe-base gradient-background-frappe-lbt font-bold"
            whileHover={{
              filter: `drop-shadow(0px 0px 5px ${colors.catppuccin.frappe.blue.rgb})`,
              opacity: 1
            }}
            initial={{
              colors: colors.catppuccin.frappe.flamingo.hex,
              filter: `drop-shadow(0px 0px 0px ${colors.catppuccin.latte.crust.rgb})`,
              opacity: 0.7
            }}
          >
            Education
          </motion.a>
          <motion.a 
            href="#publication" 
            className="text-catppuccin-frappe-base gradient-background-ggg font-bold"
            whileHover={{
              filter: `drop-shadow(0px 0px 5px ${colors.catppuccin.frappe.green.rgb})`,
              opacity: 1
            }}
            initial={{
              colors: colors.catppuccin.frappe.flamingo.hex,
              filter: `drop-shadow(0px 0px 0px ${colors.catppuccin.latte.crust.rgb})`,
              opacity: 0.7
            }}
          >
            Publications 
          </motion.a> */}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
