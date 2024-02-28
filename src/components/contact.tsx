import * as stylex from '@stylexjs/stylex';
import { FormEvent, useState } from 'react';
import Balancer from 'react-wrap-balancer';

import BackgroundPng from '../assets/background.png';
import BackgroundWebp from '../assets/background.webp';
import { SECTIONS } from '../constants/sections';
import { isEmail } from '../utils/isEmail';
import { colors, fonts } from './theme/tokens.stylex';
import { Container, Input, RoundedButton, Title } from './ui';

const styles = stylex.create({
  section: {
    padding: '32px 24px',
    position: 'relative',

    '@media (min-width: 640px)': {
      paddingVertical: 50,
    },
  },
  backdrop: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#293145B2',
  },
  container: {
    position: 'relative',
  },
  title: {
    color: colors.dark40,
  },
  description: {
    marginTop: 16,

    fontFamily: fonts.secondary,
    fontSize: '1.4rem',
    fontWeight: 400,
    lineHeight: 1.5,
    textAlign: 'center',
    color: colors.dark30,

    '@media (min-width: 640px)': {
      fontSize: '1.8rem',
    },
  },
  form: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    gap: 32,
    marginTop: 24,
    flexWrap: 'wrap',

    '@media (min-width: 640px)': {
      gap: 40,
    },
  },
  inputWrapper: {
    width: '100%',
    maxWidth: 320,
    position: 'relative',
  },
  errorMessage: {
    position: 'absolute',
    left: 0,
    bottom: -20,

    fontSize: '1.2rem',
    fontWeight: 600,
    color: colors.error,
  },
  submitButton: {
    maxWidth: 320,

    '@media (min-width: 640px)': {
      maxWidth: 118,
    },
  },
});

const backgroundStyle = {
  backgroundImage: `image-set(url(${BackgroundWebp}) type('image/webp'), url(${BackgroundPng}) type('image/png'))`,
  backgroundSize: 'cover',
  backgroundPOsition: 'center',
};

interface FormValues {
  email: string;
}

interface FormErrors {
  email?: string;
}

export function Contact() {
  const [formValues, setFormValues] = useState<FormValues>({ email: '' });
  const [formErrors, setFormErrors] = useState<FormErrors>({});

  function isFormValid() {
    return Object.keys(formErrors).length === 0;
  }

  function validateEmail(email: HTMLInputElement) {
    const errors = { ...formErrors };

    if (email.required && !email.value) {
      errors.email = 'E-mail é obrigatório';
      setFormErrors(errors);

      return;
    }

    if (!isEmail(email.value)) {
      errors.email = 'E-mail inválido';
      setFormErrors(errors);

      return;
    }

    delete errors.email;
    setFormErrors(errors);
  }

  function handleInputChange(event: FormEvent<HTMLInputElement>) {
    const { name, value, type } = event.target as HTMLInputElement;
    setFormValues({ ...formValues, [name]: value });

    if (type === 'email' || name === 'email') {
      validateEmail(event.target as HTMLInputElement);
    }
  }

  return (
    <section
      id={SECTIONS.CONTACT}
      style={backgroundStyle}
      {...stylex.props(styles.section)}
    >
      <div {...stylex.props(styles.backdrop)} />

      <Container styles={styles.container}>
        <div>
          <Title as="h2" title="Contato" stylexs={styles.title} />
          <p {...stylex.props(styles.description)}>
            <Balancer>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Donec lacinia mi quis euismod ultrices.
            </Balancer>
          </p>
        </div>

        <form {...stylex.props(styles.form)}>
          <div {...stylex.props(styles.inputWrapper)}>
            <Input
              name="email"
              type="email"
              placeholder="Seu melhor e-mail"
              onChange={handleInputChange}
              required
            />
            {formErrors.email && (
              <div {...stylex.props(styles.errorMessage)}>
                {formErrors.email}
              </div>
            )}
          </div>

          <RoundedButton
            type="submit"
            stylexs={styles.submitButton}
            disabled={!isFormValid()}
          >
            Enviar
          </RoundedButton>
        </form>
      </Container>
    </section>
  );
}
