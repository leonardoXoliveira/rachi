import * as usehooks from 'usehooks-ts';

import { render, screen } from '../utils/test-utils';
import { Header } from './header';

describe('Header', () => {
  it('should render drawer navigation when the screen size is smaller than 768px', () => {
    // Arrange
    const isMinWidth768px = vi.fn(() => false);
    vi.spyOn(usehooks, 'useMediaQuery').mockImplementation(isMinWidth768px);
    render(<Header />);

    // Act
    const hamburgerButton = screen.getByRole('button');
    const navigation = screen.queryByRole('navigation');

    // Assert
    expect(hamburgerButton).toBeInTheDocument();
    expect(navigation).not.toBeInTheDocument();
  });

  it('should render desktop navigation when the screen size is greater than or equal to 768px', () => {
    // Arrange
    const isMinWidth768px = vi.fn(() => true);
    vi.spyOn(usehooks, 'useMediaQuery').mockImplementation(isMinWidth768px);
    render(<Header />);

    // Act
    const hamburgerButton = screen.queryByRole('button');
    const navigation = screen.getByRole('navigation');

    // Assert
    expect(hamburgerButton).not.toBeInTheDocument();
    expect(navigation).toBeInTheDocument();
  });
});
