import * as stylex from '@stylexjs/stylex';

import { colors, fonts } from '../theme/tokens.stylex';

const styles = stylex.create({
  flag: {
    width: 164,
    height: 27,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    borderRadius: 15,
    backgroundColor: colors.brand,
    visibility: 'hidden',

    fontFamily: fonts.secondary,
    fontWeight: 600,
    fontSize: '1.4rem',
    lineHeight: 1.5,
    letterSpacing: 2,
    color: colors.dark40,
  },
  preferred: {
    visibility: 'visible',
  },
});

interface CardPlansFlagProps {
  text?: string;
  isPreferred?: boolean;
}

export function CardPlansFlag({
  text = 'Preferido',
  isPreferred = false,
}: CardPlansFlagProps) {
  return (
    <span {...stylex.props(styles.flag, isPreferred && styles.preferred)}>
      {text.toUpperCase()}
    </span>
  );
}
