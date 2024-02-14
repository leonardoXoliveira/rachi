import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';

const styles = stylex.create({
  iconButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    border: 'none',
    cursor: 'pointer',
    background: 'transparent',
  },
});

interface IconButtonProps extends ComponentPropsWithoutRef<'button'> {
  stylexs?: StyleXStyles;
}

export function IconButton({
  stylexs,
  children,
  ...rest
}: PropsWithChildren<IconButtonProps>) {
  return (
    <button {...stylex.props(styles.iconButton, stylexs)} {...rest}>
      {children}
    </button>
  );
}
