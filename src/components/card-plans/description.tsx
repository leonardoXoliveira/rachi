import * as stylex from '@stylexjs/stylex';
import Balancer from 'react-wrap-balancer';

import { colors, fonts } from '../theme/tokens.stylex';

const styles = stylex.create({
  description: {
    marginVertical: 58,

    fontFamily: fonts.secondary,
    fontSize: '1.8rem',
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: 'center',
    color: colors.dark20,
  },
  preferred: {
    color: colors.dark30,
  },
});

interface CardPlansDescriptionProps {
  text: string;
  isPreferred?: boolean;
}

export function CardPlansDescription({
  text,
  isPreferred = false,
}: CardPlansDescriptionProps) {
  return (
    <p {...stylex.props(styles.description, isPreferred && styles.preferred)}>
      <Balancer>{text}</Balancer>
    </p>
  );
}
