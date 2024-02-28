import { motion } from 'framer-motion';

import { TSVGElementProps } from '../../types/TSVGElementProps';
import { motionConfig } from './motion';

export function SmileSvgComponent(props: TSVGElementProps) {
  return (
    <svg
      width={60}
      height={60}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <motion.path
        d="M37.07 37.07a10 10 0 01-14.14 0h14.14zM22.5 25h.025-.025zm15 0h.025-.025zm15 5a22.5 22.5 0 11-45.001 0A22.5 22.5 0 0152.5 30z"
        stroke="#0F9AFE"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...motionConfig}
      />
    </svg>
  );
}
