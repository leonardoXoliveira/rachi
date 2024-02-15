import * as stylex from '@stylexjs/stylex';

import { mobileItemMotion } from './motion';
import { Nav } from './nav';

const styles = stylex.create({
  nav: {
    flexDirection: 'column',
    gap: 32,
    marginTop: 32,
  },
});

export function NavMobile() {
  return <Nav styles={styles.nav} itemMotion={mobileItemMotion} />;
}
