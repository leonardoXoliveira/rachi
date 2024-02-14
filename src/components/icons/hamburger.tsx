import { motion } from 'framer-motion';

import { TSVGElementProps } from '../../types/TSVGElementProps';
import { colors } from '../theme/tokens.stylex';

export function HamburgerSvgComponent(props: TSVGElementProps) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <motion.path
        stroke={colors.dark10}
        strokeLinecap="round"
        strokeWidth={2}
        d="M5 7h14M5 12h14M5 17h10"
      />
    </svg>
  );
}
