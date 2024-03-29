import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { colors, fonts } from '../theme/tokens.stylex';

const styles = stylex.create({
  roundedButton: {
    width: '100%',
    maxWidth: 144,
    height: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: 0,
    borderRadius: 50,
    cursor: 'pointer',
    backgroundColor: colors.brand,
    boxShadow: '1px 3px 4px 0px #137DE080',

    fontFamily: fonts.secondary,
    fontSize: '1.4rem',
    fontWeight: 600,
    color: colors.dark40,

    '@media (min-width: 640px)': {
      width: '100%',
      maxWidth: 216,
      height: 50,
      fontSize: '2rem',
    },
  },
  disabled: {
    boxShadow: 'none',
    backgroundColor: colors.dark20,
  },
});

interface RoundedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  stylexs?: StyleXStyles;
}

export function RoundedButton({
  stylexs,
  children,
  ...rest
}: PropsWithChildren<RoundedButtonProps>) {
  return (
    <button
      {...stylex.props(
        styles.roundedButton,
        stylexs,
        rest.disabled && styles.disabled,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
