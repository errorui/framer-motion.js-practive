import { FC } from 'react';
import { motion } from 'framer-motion';
import './style.css';
import Box from './components/Box';
import Box2 from './components/Box2';
import Box3 from './components/Box3';
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <div>
      <h1 className="title">Hello framer-motion</h1>
      <Box />
      <Box2 />
      <Box3 />
      <p>Start editing todd see some magic happen :)</p>
    </div>
  );
};
