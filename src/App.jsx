import { motion } from 'framer-motion';
import Matrix from './components/Matrix.jsx';
import { ContextProvider } from './components/ContextProvider.jsx';
import Home from './components/sections/Home.jsx';
import Experience from './components/sections/Experience.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <ContextProvider>
      <Matrix 
        className="absolute inset-0"
      />
      <motion.div id="top" style={{backdropFilter: "blur(2px)"}}>
        <Navbar/>
        <Home/>
        <Experience/>
      </motion.div>
    </ContextProvider>
  );
}

export default App;
