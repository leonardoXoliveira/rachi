import * as stylex from '@stylexjs/stylex';
import { StyleXStyles } from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';

const baseStyles = stylex.create({
  container: {
    width: '100%',
    height: '100%',
    maxWidth: 1200,
    paddingHorizontal: 24,
    margin: 'auto',
  },
});

interface ContainerProps extends PropsWithChildren {
  styles?: StyleXStyles;
}

export function Container({ children, styles }: ContainerProps) {
  return <div {...stylex.props(baseStyles.container, styles)}>{children}</div>;
}
