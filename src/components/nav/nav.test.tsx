import { NAVIGATION_PATHS } from '../../constants/navigation-paths';
import { render, screen } from '../../utils/test-utils';
import { Nav } from './nav';

describe('Nav', () => {
  it.each(NAVIGATION_PATHS)(
    'should each drawer item has the right href path to navigate',
    async ({ title, href }) => {
      // Arrange
      render(<Nav styles={{}} itemMotion={{}} />);

      // Act
      const drawerItem = screen.getByText(title);

      // Assert
      expect(drawerItem).toHaveAttribute('href', href);
    },
  );
});
