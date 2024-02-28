import * as stylex from '@stylexjs/stylex';
import { Balancer } from 'react-wrap-balancer';

import { FEATURES } from '../constants/features';
import { SECTIONS } from '../constants/sections';
import { colors, fonts } from './theme/tokens.stylex';
import { Container, Title } from './ui';

const styles = stylex.create({
  section: {
    paddingVertical: {
      default: 40,
      '@media (min-width: 768px)': 56,
    },
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 32,
    marginTop: 32,

    '@media (min-width: 768px)': {
      marginTop: 80,
    },
  },
  featureWrapper: {
    width: '100%',
    maxWidth: 280,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 'auto',
  },
  featureTitle: {
    marginTop: 18,

    fontFamily: fonts.primary,
    fontSize: '1.6rem',
    fontWeight: 600,
    lineHeight: 1.25,
    color: colors.dark10,

    '@media (min-width: 768px)': {
      marginTop: 30,

      fontSize: '1.8rem',
    },
  },
  featureDescription: {
    marginTop: 4,

    textAlign: 'center',
    fontFamily: fonts.secondary,
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: 1.25,
    color: colors.dark20,

    '@media (min-width: 768px)': {
      marginTop: 16,

      fontSize: '1.6rem',
    },
  },
});

export function Features() {
  return (
    <section id={SECTIONS.FEATURES} {...stylex.props(styles.section)}>
      <Container>
        <Title as="h2" title="Como funciona" />

        <div {...stylex.props(styles.wrapper)}>
          {FEATURES.map(({ icon: Icon, title, description }) => (
            <div key={title} {...stylex.props(styles.featureWrapper)}>
              <Icon />
              <h3 {...stylex.props(styles.featureTitle)}>
                <Balancer>{title}</Balancer>
              </h3>
              <p {...stylex.props(styles.featureDescription)}>
                <Balancer>{description}</Balancer>
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
