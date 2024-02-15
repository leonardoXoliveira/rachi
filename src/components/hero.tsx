import * as stylex from '@stylexjs/stylex';
import Balancer from 'react-wrap-balancer';

import HeroPng from '../assets/hero.png';
import HeroWebp from '../assets/hero.webp';
import HeroSmallPng from '../assets/hero-small.png';
import HeroSmallWebp from '../assets/hero-small.webp';
import { colors, fonts } from './theme/tokens.stylex';
import { Container, RoundedButton } from './ui';

const styles = stylex.create({
  section: {
    backgroundColor: colors.primary,
  },
  container: {
    paddingTop: 40,

    '@media (min-width: 842px)': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 0,
    },
  },
  wrapper: {
    flex: 1,
  },
  title: {
    textAlign: 'left',
    fontFamily: fonts.primary,
    fontWeight: 600,
    fontSize: {
      default: '2.4rem',
      '@media (min-width: 640px)': '4.8rem',
    },
    lineHeight: 1.25,
  },
  button: {
    marginTop: 16,
  },
  image: {
    display: 'block',
    margin: 'auto',
    marginTop: {
      default: 24,
      '@media (min-width: 842px)': 0,
    },
  },
});

export function Hero() {
  return (
    <section {...stylex.props(styles.section)}>
      <Container styles={styles.container}>
        <div {...stylex.props(styles.wrapper)}>
          <h1 {...stylex.props(styles.title)}>
            <Balancer>
              Rachi, <br /> é tudo o que você <br /> precisa em um só lugar.
            </Balancer>
          </h1>
          <RoundedButton stylexs={styles.button}>Cadastrar-se</RoundedButton>
        </div>

        <picture>
          <source
            type="image/webp"
            media="(max-width: 640px)"
            srcSet={HeroSmallWebp}
          />
          <source type="image/webp" srcSet={HeroWebp} />
          <img
            srcSet={`${HeroSmallPng} 210w, ${HeroPng}`}
            sizes="(max-width: 640px) 210px, 500px"
            alt="Menino de touca e blusa sentado em uma grande pedra usando o Notebook"
            {...stylex.props(styles.image)}
          />
        </picture>
      </Container>
    </section>
  );
}
