import * as stylex from '@stylexjs/stylex';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { useState } from 'react';

import { IconButton } from '../components/ui';
import { CloseSvgComponent } from './icons/close';
import { HamburgerSvgComponent } from './icons/hamburger';
import { Nav } from './nav';
import { colors } from './theme/tokens.stylex';

const styles = stylex.create({
  aside: {
    width: '100%',
    height: '100vh',
    maxWidth: '360px',
    padding: '16px',
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
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  function handleDrawer() {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <>
      <IconButton onClick={handleDrawer}>
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
          {...stylex.props(styles.aside)}
          initial={{ x: '100%' }}
          animate={{ x: isDrawerOpen ? '0' : '100%' }}
        >
          <IconButton onClick={handleDrawer} stylexs={styles.closeButton}>
            <CloseSvgComponent />
          </IconButton>

          <Nav />
        </motion.aside>

        <AnimatePresence>
          {isDrawerOpen && (
            <motion.div
              onClick={handleDrawer}
              {...stylex.props(styles.backdrop)}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
            ></motion.div>
          )}
        </AnimatePresence>
      </MotionConfig>
    </>
  );
}
