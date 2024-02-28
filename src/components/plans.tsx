import * as stylex from '@stylexjs/stylex';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';
import Balancer from 'react-wrap-balancer';

import { PLANS } from '../constants/plans';
import { SECTIONS } from '../constants/sections';
import { CardPlans } from './card-plans';
import { colors, fonts } from './theme/tokens.stylex';
import { Container, RoundedButton, Title } from './ui';

const styles = stylex.create({
  section: {
    padding: '40px 24px',
  },
  description: {
    margin: {
      default: '16px 0 40px',
      '@media (min-width: 640px)': '16px 0 96px',
    },

    fontFamily: fonts.secondary,
    fontSize: {
      default: '1.4rem',
      '@media (min-width: 640px)': '1.8rem',
    },
    lineHeight: 1.5,
    textAlign: 'center',
    color: colors.dark20,
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 20,
  },
  signButton: {
    margin: 'auto',
  },
});

const variants = {
  initial: {
    scale: 0.7,
  },
  toGrow: {
    scale: 1,
  },
};

export function Plans() {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  useLayoutEffect(() => {
    if (isInView) {
      controls.start('toGrow');
    }
  });

  return (
    <section id={SECTIONS.PLANS} {...stylex.props(styles.section)}>
      <Container>
        <Title as="h2" title="Nossos planos" />
        <p {...stylex.props(styles.description)}>
          <Balancer>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            lacinia mi quis euismod ultrices.
          </Balancer>
        </p>

        <div ref={ref} {...stylex.props(styles.wrapper)}>
          {PLANS.map(({ title, isPreferred, price, description }, index) => {
            return (
              <motion.div
                key={index}
                variants={variants}
                initial="initial"
                animate={controls}
                transition={{ type: 'spring', stiffness: 160 }}
              >
                <CardPlans.Root isPreferred={isPreferred}>
                  <CardPlans.Title title={title} isPreferred={isPreferred} />
                  <CardPlans.Flag isPreferred={isPreferred} />
                  <CardPlans.Price price={price} isPreferred={isPreferred} />
                  <CardPlans.Description
                    text={description}
                    isPreferred={isPreferred}
                  />

                  <RoundedButton stylexs={styles.signButton}>
                    Assinar
                  </RoundedButton>
                </CardPlans.Root>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
