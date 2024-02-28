import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';
import { InputHTMLAttributes } from 'react';

import { colors, fonts } from '../theme/tokens.stylex';

const styles = stylex.create({
  input: {
    width: '100%',
    maxWidth: 320,
    height: 38,
    border: 'none',
    borderBottom: '1px solid',
    borderColor: colors.dark40,
    backgroundColor: 'transparent',
    outline: 'none',

    fontFamily: fonts.secondary,
    fontSize: '1.4rem',
    fontWeight: 500,
    lineHeight: 1.5,
    color: colors.dark40,

    '::placeholder': {
      fontFamily: fonts.secondary,
      fontSize: '1.4rem',
      fontWeight: 500,
      lineHeight: 1.5,
      color: colors.dark40,
    },

    '@media (min-width: 640px)': {
      fontSize: '1.8rem',

      '::placeholder': {
        fontSize: '1.8rem',
      },
    },
  },
});

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  stylexs?: StyleXStyles;
}

export function Input({ stylexs, ...rest }: InputProps) {
  return <input {...stylex.props(styles.input, stylexs)} {...rest} />;
}
