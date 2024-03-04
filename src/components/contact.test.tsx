import { render, screen, userEvent } from '../utils/test-utils';
import { Contact } from './contact';

describe('Contact', () => {
  it('should render the input fields and the submit button', () => {
    // Arrange
    render(<Contact />);

    // Act
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /enviar/i });

    // Assert
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should change input value', async () => {
    // Arrange
    render(<Contact />);

    // Act
    const emailInput = screen.getByLabelText(/email/i);
    const inputValue = 'leonardo@gmail.com';
    await userEvent.type(emailInput, inputValue);

    // Assert
    expect(emailInput).toHaveValue(inputValue);
  });

  it('should show an error message when the email is invalid', async () => {
    // Arrange
    render(<Contact />);

    // Act
    const emailInput = screen.getByLabelText(/email/i);
    const inputValue = 'leonardo';
    await userEvent.type(emailInput, inputValue);

    const invalidError = screen.getByText(/e-mail inválido/i);

    // Assert
    expect(invalidError).toBeInTheDocument();
  });

  it('should show an error message when the email is empty', async () => {
    // Arrange
    render(<Contact />);

    // Act
    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'leonardo');
    await userEvent.clear(emailInput);

    const requiredError = screen.getByText(/e-mail é obrigatório/i);

    // Assert
    expect(requiredError).toBeInTheDocument();
  });

  it('should not show an error message when the email is valid', async () => {
    // Arrange
    render(<Contact />);

    // Act
    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'leonardo@gmail.com');

    const requiredError = screen.queryByText(/e-mail é obrigatório/i);
    const invalidError = screen.queryByText(/e-mail inválido/i);

    // Assert
    expect(requiredError).not.toBeInTheDocument();
    expect(invalidError).not.toBeInTheDocument();
  });

  it('should not show an error message when the email initialize empty', async () => {
    // Arrange
    render(<Contact />);

    // Act
    const requiredError = screen.queryByText(/e-mail é obrigatório/i);
    const invalidError = screen.queryByText(/e-mail inválido/i);

    // Assert
    expect(requiredError).not.toBeInTheDocument();
    expect(invalidError).not.toBeInTheDocument();
  });

  it('should disable the submit button when the form is invalid', async () => {
    // Arrange
    render(<Contact />);

    // Act
    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'leonardo');

    const submitButton = screen.getByRole('button', { name: /enviar/i });

    // Assert
    expect(submitButton).toBeDisabled();
  });

  it('should enable the submit button when the form is valid', async () => {
    // Arrange
    render(<Contact />);

    // Act
    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.type(emailInput, 'leonardo@gmail.com');

    const submitButton = screen.getByRole('button', { name: /enviar/i });

    // Assert
    expect(submitButton).toBeEnabled();
  });
});
