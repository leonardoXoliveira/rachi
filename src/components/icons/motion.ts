import { MotionProps } from 'framer-motion';

export const variants = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
  },
};

export const motionConfig: MotionProps = {
  variants,
  initial: 'hidden',
  whileInView: 'visible',
  transition: { type: 'spring', stiffness: 25 },
};
