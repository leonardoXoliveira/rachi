import * as stylex from '@stylexjs/stylex';
import { useMediaQuery } from 'usehooks-ts';

import { Drawer } from './drawer';
import { LogoSvgComponent } from './icons/logo';
import { NavDesktop } from './nav';
import { Container } from './ui';

const styles = stylex.create({
  header: {
    height: 79,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export function Header() {
  const matches = useMediaQuery('(min-width: 768px)');

  return (
    <header {...stylex.props(styles.header)}>
      <Container styles={styles.wrapper}>
        <LogoSvgComponent />

        {matches ? <NavDesktop /> : <Drawer />}
      </Container>
    </header>
  );
}
