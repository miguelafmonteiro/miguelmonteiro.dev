import React from 'react';
import Matrix from './components/Matrix.jsx';
import Home from './components/Home.jsx';

import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <div className="fixed inset-0 w-full h-full bg-black z-0 pointer-events-none">
        <Matrix className="absolute inset-0" />
      </div>

      <motion.div className="relative z-10">
        <Home />
      </motion.div>
    </>
  );
}

export default App;
