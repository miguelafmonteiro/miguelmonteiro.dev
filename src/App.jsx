import Net from './components/Net.jsx';
import Terminal from './components/Terminal.jsx';
import Home from './components/sections/Home.jsx';
import Career from './components/sections/Career.jsx';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.jsx';
import Education from './components/sections/Education.jsx';
import Publications from './components/sections/Publications.jsx';

function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-50 bg-background"/>
      <Terminal/>
      <motion.div 
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
        transition={{duration: 0.5, delay: 3}}
      >
        <Net/>
        <Navbar/>
        <Home/>
        <Career/>
        <Education/>
        <Publications/>
      </motion.div>
    </>
  );
}

export default App;
