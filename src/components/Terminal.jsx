import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const Terminal = () => {
  const [done, setDone] = useState(false);

  return (
      <motion.div 
        className="fixed top-0 left-0 w-full h-screen text-primary text-lg flex items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{
          opacity: done ? 0 : 1,
          textShadow: done ? `0 0 20px var(--secondary)` : "none",
        }}
        transition={{ duration: 1 }}
      >
        <div className="relative -left-10">
          <div className="font-bold">~/ $</div>
          <div className="absolute top-0 left-14 flex">
            {!done ? (
              <>
                <TypeAnimation
                  sequence={[
                    1000,
                    'whoami',
                    500,
                    () => setDone(true),
                  ]}
                  speed={1}
                  cursor={false}
                  repeat={0}
                />
                <span className="ml-1 animate-blink">█</span>
              </>
            ) : (
              <>whoami</>
            )}
          </div>
        </div>
      </motion.div>
  );
};

export default Terminal;
