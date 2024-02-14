import * as stylex from '@stylexjs/stylex';
import { useMediaQuery } from 'usehooks-ts';

import { Drawer } from './drawer';
import { LogoSvgComponent } from './icons/logo';
import { Nav } from './nav';

const styles = stylex.create({
  header: {
    height: '70px',
    paddingHorizontal: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export function Header() {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <header {...stylex.props(styles.header)}>
      <LogoSvgComponent />

      {matches ? <Nav /> : <Drawer />}
    </header>
  );
}
