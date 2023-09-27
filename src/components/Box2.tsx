import { motion } from 'framer-motion';
const Box = () => {
  return (
    <motion.div
      className="box"
      initial={{
        opacity: 1,
      }}
      drag
      dragConstraints={{
        right: 100,
        top: 10,
        bottom: 20,
      }}
      whileHover={{
        scale: [1,2,1.4],
        rotate: 180, // Rotate to 180 degrees
      }}
      whileTap={{
        backgroundColor: 'red',
      }}
      transition={{
        transition:2,
        type: 'spring',
        stiffness: 200,
      }}
    ></motion.div>
  );
};
export default Box;
