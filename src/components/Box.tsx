import { motion } from 'framer-motion';
import { useState } from 'react';

const Box = () => {
  const [isanimate, setisanimate] = useState(false);

  return (
    <motion.div
      initial={{
        opacity: 0.4,
      }}
      animate={{
        x: isanimate ? 400 : 10,
        opacity: isanimate ? 1 : 0.3,
        scale: isanimate ? 1.5 : 1,
        rotate: isanimate ? [120,360] : 0,
        borderRadius: isanimate ? '50%' : '20px',
      }}
      transition={{
        type: 'spring',
        stiffness: 100,
        damping: 60,
      }}
      className="box"
      onClick={() => {
        setisanimate(!isanimate);
      }}
    />
  );
};

export default Box;
