import React from 'react';
import Matrix from './components/Matrix.jsx';
import Home from './components/Home.jsx';

import { motion } from 'framer-motion';

function App() {
  return (
    // <div className="min-h-screen">
    //   <Matrix className="absolute inset-0" />
    //   <motion.div className="flex flex-col">
    //     <Home />
    //   </motion.div>
    // </div>
    // <>
    //   <div className="fixed inset-0 w-full h-full bg-black z-0 pointer-events-none">
    //     <Matrix className="absolute inset-0" />
    //   </div>

    //   <motion.div className="relative z-10">
    //     <Home />
    //   </motion.div>
    // </>
    <div>
      <Routes>
        <Route path={`/miguelmonteiro.dev`} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
