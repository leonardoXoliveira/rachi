import { motion } from 'framer-motion';

import { TSVGElementProps } from '../../types/TSVGElementProps';
import { motionConfig } from './motion';

export function SecuritySvgComponent(props: TSVGElementProps) {
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
        d="M26.25 31.106l-4.856-4.856-2.644 2.644 7.5 7.5 15-15-2.644-2.644L26.25 31.106z"
        fill="#0F9AFE"
        {...motionConfig}
      />
      <motion.path
        d="M30 56.25l-11.58-6.174A20.592 20.592 0 017.5 31.875V7.5a3.754 3.754 0 013.75-3.75h37.5A3.753 3.753 0 0152.5 7.5v24.375a20.591 20.591 0 01-10.92 18.2L30 56.25zM11.25 7.5v24.375a16.847 16.847 0 008.936 14.891L30 52l9.814-5.23a16.845 16.845 0 008.936-14.894V7.5h-37.5z"
        fill="#0F9AFE"
        {...motionConfig}
      />
    </svg>
  );
}
