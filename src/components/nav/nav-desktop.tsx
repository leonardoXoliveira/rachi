import * as stylex from '@stylexjs/stylex';

import { desktopItemMotion } from './motion';
import { Nav } from './nav';

const styles = stylex.create({
  nav: {
    gap: 66,
  },
});

export function NavDesktop() {
  return <Nav styles={styles.nav} itemMotion={desktopItemMotion} />;
}
