import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';
import { motion, Variants } from 'framer-motion';

import { NAVIGATION_PATHS } from '../../constants/navigation-paths';
import { containerMotion } from './motion';
import { baseStyles } from './styles';

interface NavProps {
  styles: StyleXStyles;
  itemMotion: Variants;
}

export function Nav({ styles, itemMotion }: NavProps) {
  return (
    <nav>
      <motion.ul
        variants={containerMotion}
        initial="hidden"
        whileInView="visible"
        {...stylex.props(baseStyles.container, styles)}
      >
        {NAVIGATION_PATHS.map(({ title, href }) => (
          <motion.li key={href} variants={itemMotion}>
            <a href={href} {...stylex.props(baseStyles.item)}>
              {title}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
