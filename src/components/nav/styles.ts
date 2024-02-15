import * as stylex from '@stylexjs/stylex';

import { colors, fonts } from '../theme/tokens.stylex';

export const baseStyles = stylex.create({
  container: {
    display: 'flex',
  },
  item: {
    fontFamily: fonts.secondary,
    fontSize: '1.8rem',
    fontWeight: 500,
    textDecoration: {
      default: 'none',
      ':hover': 'underline',
    },
    color: colors.dark20,
  },
});
