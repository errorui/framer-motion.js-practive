import { motion } from 'framer-motion';

const Box3 = () => {
  const boxvariant = {
    hidden: {
      x: '-100',
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: [1, 1.8, 1.4, 1],
      borderRaidus: '50%',
      rotate: [0, 120, 240, 0],
      staggerChildren: 0.5,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5, // Adjust the stagger duration as needed
      },
    },
  };

  const listvariant = {
    hiddenlist: {
      opacity: 0,
      y: -10,
    },
    visiblelist: {
      opacity: 1,
      y: 0,

      transition: {
        delay: 1,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="box3"
      variants={boxvariant}
      initial="hidden"
      animate="visible"
    >
      {[1, 2, 3].map((i) => {
        return (
          <motion.li
            key={i}
            variants={listvariant}
            initial="hiddenlist"
            animate="visiblelist"
            className="box-item"
          ></motion.li>
        );
      })}
    </motion.div>
  );
};

export default Box3;
