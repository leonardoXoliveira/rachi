import * as stylex from '@stylexjs/stylex';

import { NAVIGATION_PATHS } from '../constants/navigationPaths';
import { colors, fonts } from './theme/tokens.stylex';

const styles = stylex.create({
  containerList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginTop: '24px',

    '@media (min-width: 768px)': {
      flexDirection: 'row',
      marginTop: 0,
    },
  },
  item: {
    fontFamily: fonts.secondary,
    fontSize: '1.8rem',
    fontWeight: '500',
    textDecoration: {
      default: 'none',
      ':hover': 'underline',
    },
    color: colors.dark20,
  },
});

export function Nav() {
  return (
    <nav>
      <ul {...stylex.props(styles.containerList)}>
        {NAVIGATION_PATHS.map(({ title, href }) => (
          <li key={href}>
            <a href={href} {...stylex.props(styles.item)}>
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
