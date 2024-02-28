import { StyleXStyles } from '@stylexjs/stylex';
import * as stylex from '@stylexjs/stylex';
import Balancer from 'react-wrap-balancer';

import { colors, fonts } from '../theme/tokens.stylex';

const styles = stylex.create({
  title: {
    fontFamily: fonts.primary,
    fontWeight: 600,
    fontSize: {
      default: '2.4rem',
      '@media (min-width: 640px)': '4rem',
    },
    lineHeight: 1.5,
    textAlign: 'center',
    color: colors.dark10,
  },
});

interface TitleProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  title: string;
  stylexs?: StyleXStyles;
}

export function Title({ as = 'h1', title, stylexs }: TitleProps) {
  const Component = as;

  return (
    <Component {...stylex.props(styles.title, stylexs)}>
      <Balancer>{title}</Balancer>
    </Component>
  );
}
