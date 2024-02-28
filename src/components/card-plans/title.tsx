import * as stylex from '@stylexjs/stylex';

import { colors, fonts } from '../theme/tokens.stylex';

const styles = stylex.create({
  title: {
    margin: 'auto',
    marginBottom: 16,

    fontFamily: fonts.primary,
    textAlign: 'center',
    fontSize: '2.4rem',
    fontWeight: 600,
    lineHeight: '32px',
    color: colors.dark10,
  },
  preferred: {
    color: colors.dark40,

    '@media (min-width: 640px)': {
      fontSize: '3.2rem',
    },
  },
});

interface CardPlansTitleProps {
  title: string;
  isPreferred?: boolean;
}

export function CardPlansTitle({
  title,
  isPreferred = false,
}: CardPlansTitleProps) {
  return (
    <h4 {...stylex.props(styles.title, isPreferred && styles.preferred)}>
      {title}
    </h4>
  );
}
