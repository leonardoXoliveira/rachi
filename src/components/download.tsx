import * as stylex from '@stylexjs/stylex';
import Balancer from 'react-wrap-balancer';
import { useMediaQuery } from 'usehooks-ts';

import NotificationPng from '../assets/notification.png';
import NotificationWebp from '../assets/notification.webp';
import { SECTIONS } from '../constants/sections';
import { AppStoreSvgComponent } from './icons/app-store';
import { PlayStoreSvgComponent } from './icons/play-store';
import { colors } from './theme/tokens.stylex';
import { Container, IconButton, Title } from './ui';

const styles = stylex.create({
  section: {
    paddingVertical: 32,
    backgroundColor: colors.primary,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
  },
  title: {
    textAlign: {
      default: 'center',
      '@media (min-width: 842px)': 'left',
    },

    fontSize: {
      default: '2.4rem',
      '@media (min-width: 640px)': '3.2rem',
    },
  },
  description: {
    margin: '16px 0 32px',

    textAlign: {
      default: 'center',
      '@media (min-width: 842px)': 'left',
    },
    fontSize: {
      default: '1.4rem',
      '@media (min-width: 640px)': '1.6rem',
    },
    fontWeight: 400,
    lineHeight: 1.25,
    color: colors.dark20,
  },
  buttonWrapper: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',

    '@media (min-width: 842px)': {
      gap: 24,
      justifyContent: 'start',
    },
  },
  button: {
    padding: '0.5rem 1rem',
    borderRadius: '0.25rem',
    backgroundColor: '#007bff',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
});

export function Download() {
  const matches = useMediaQuery('(min-width: 842px)');

  return (
    <section id={SECTIONS.DOWNLOAD} {...stylex.props(styles.section)}>
      <Container styles={matches && styles.container}>
        <div {...stylex.props(styles.wrapper)}>
          <Title
            as="h2"
            title="Baixe nosso app para desfrutar mais!"
            stylexs={styles.title}
          />
          <p {...stylex.props(styles.description)}>
            <Balancer>
              Amet in elementum nulla scelerisque dui, egestas at. Elit
              consectetur turpis elementum amet vitae et etiam nec.
            </Balancer>
          </p>
          <div {...stylex.props(styles.buttonWrapper)}>
            <IconButton>
              <AppStoreSvgComponent />
            </IconButton>

            <IconButton>
              <PlayStoreSvgComponent />
            </IconButton>
          </div>
        </div>

        {matches && (
          <picture>
            <source type="image/webp" src={NotificationWebp} />
            <img
              width={400}
              height={400}
              src={NotificationPng}
              alt="Menino de touca e blusa sentado em uma grande pedra usando o Notebook"
            />
          </picture>
        )}
      </Container>
    </section>
  );
}
