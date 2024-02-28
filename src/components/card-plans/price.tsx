import * as stylex from '@stylexjs/stylex';

import { colors, fonts } from '../theme/tokens.stylex';

const styles = stylex.create({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 32,

    fontFamily: fonts.primary,
    fontWeight: 600,
    color: colors.dark10,
  },
  preferred: {
    color: colors.dark40,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  currency: {
    fontSize: '2rem',
  },
  price: {
    fontSize: '4.8rem',
  },
  recurrence: {
    marginLeft: 4,

    fontSize: '2.6rem',
  },
});

interface CardPlansPriceProps {
  price: number;
  isPreferred?: boolean;
}

export function CardPlansPrice({
  price,
  isPreferred = false,
}: CardPlansPriceProps) {
  return (
    <div {...stylex.props(styles.root, isPreferred && styles.preferred)}>
      <div {...stylex.props(styles.wrapper)}>
        <span {...stylex.props(styles.currency)}>R$</span>
        <span {...stylex.props(styles.price)}>{price}</span>
      </div>

      <span {...stylex.props(styles.recurrence)}>/mês</span>
    </div>
  );
}
