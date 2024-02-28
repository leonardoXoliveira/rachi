import * as stylex from '@stylexjs/stylex';
import { PropsWithChildren } from 'react';

import { colors } from '../theme/tokens.stylex';

const styles = stylex.create({
  root: {
    width: '100%',
    maxWidth: 370,
    padding: 24,
    borderRadius: 8,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.1)',
    backgroundColor: colors.primary,
  },
  preferred: {
    backgroundColor: colors.dark10,
  },
});

interface CardPlansRootProps extends PropsWithChildren {
  isPreferred?: boolean;
}

export function CardPlansRoot({
  isPreferred = false,
  children,
}: CardPlansRootProps) {
  return (
    <div {...stylex.props(styles.root, isPreferred && styles.preferred)}>
      {children}
    </div>
  );
}
