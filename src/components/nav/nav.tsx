import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';
import { motion, Variants } from 'framer-motion';
import { useContext } from 'react';

import { NAVIGATION_PATHS } from '../../constants/navigation-paths';
import { DrawerContext } from '../../contexts/drawer';
import { containerMotion } from './motion';
import { baseStyles } from './styles';

interface NavProps {
  styles: StyleXStyles;
  itemMotion: Variants;
}

export function Nav({ styles, itemMotion }: NavProps) {
  const { toggle } = useContext(DrawerContext);

  return (
    <nav>
      <motion.ul
        variants={containerMotion}
        initial="hidden"
        whileInView="visible"
        {...stylex.props(baseStyles.container, styles)}
      >
        {NAVIGATION_PATHS.map(({ title, href }) => (
          <motion.li key={href} variants={itemMotion} onClick={toggle}>
            <a href={href} {...stylex.props(baseStyles.item)}>
              {title}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </nav>
  );
}
