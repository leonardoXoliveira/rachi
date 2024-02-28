import * as stylex from '@stylexjs/stylex';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { useContext } from 'react';

import { IconButton } from '../components/ui';
import { DrawerContext } from '../contexts/drawer';
import { CloseSvgComponent } from './icons/close';
import { HamburgerSvgComponent } from './icons/hamburger';
import { NavMobile } from './nav';
import { colors } from './theme/tokens.stylex';

const styles = stylex.create({
  aside: {
    width: '100%',
    height: '100vh',
    maxWidth: 360,
    padding: 16,
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: colors.dark40,
    boxShadow: '-2px 1px 4px 0px rgba(0,0,0,0.2)',
  },
  backdrop: {
    width: '100vw',
    height: '100vh',
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  closeButton: {
    float: 'right',
  },
});

export function Drawer() {
  const { isDrawerOpen, toggle } = useContext(DrawerContext);

  return (
    <>
      <IconButton onClick={toggle}>
        <HamburgerSvgComponent />
      </IconButton>

      <MotionConfig
        transition={{
          duration: 0.5,
          type: 'spring',
          bounce: 0.2,
        }}
      >
        <motion.aside
          initial={{ x: '100%' }}
          animate={{ x: isDrawerOpen ? 0 : '100%' }}
          {...stylex.props(styles.aside)}
        >
          <IconButton onClick={toggle} stylexs={styles.closeButton}>
            <CloseSvgComponent />
          </IconButton>

          <NavMobile />
        </motion.aside>

        <AnimatePresence>
          {isDrawerOpen && (
            <motion.div
              onClick={toggle}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              {...stylex.props(styles.backdrop)}
            ></motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
}
