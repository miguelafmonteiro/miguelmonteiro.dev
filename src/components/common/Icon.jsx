import { motion } from 'framer-motion';
import Tooltip from '@mui/material/Tooltip';

const Icon = ({icon, className, tooltip}) => {
  return (
    <Tooltip title={tooltip}>
        <motion.i className={`${icon} ${className}`}></motion.i>
    </Tooltip>
  );
};

export default Icon;
