import { NAVIGATION_PATHS } from '../constants/navigation-paths';
import { DrawerContextProvider } from '../contexts/drawer';
import {
  fireEvent,
  render,
  screen,
  userEvent,
  waitForElementToBeRemoved,
} from '../utils/test-utils';
import { Drawer } from './drawer';

describe('Drawer', () => {
  it('should initialize closed', () => {
    // Arrange
    render(
      <DrawerContextProvider>
        <Drawer />
      </DrawerContextProvider>,
    );

    // Act
    const drawer = screen.queryByRole('complementary');

    // Assert
    expect(drawer).not.toBeInTheDocument();
  });

  it('should be opened when hamburger button is clicked', async () => {
    // Arrange
    render(
      <DrawerContextProvider>
        <Drawer />
      </DrawerContextProvider>,
    );

    // Act
    const hamburgerButton = screen.getByRole('button');
    userEvent.click(hamburgerButton);
    const drawer = await screen.findByRole('complementary');

    // Assert
    expect(drawer).toBeInTheDocument();
  });

  it('should be closed when close (X) button is clicked', async () => {
    // Arrange
    render(
      <DrawerContextProvider>
        <Drawer />
      </DrawerContextProvider>,
    );

    // Act
    const hamburgerButton = screen.getByRole('button');
    userEvent.click(hamburgerButton);
    const closeButton = await screen.findByTestId('closeDrawerButton');
    const drawer = screen.getByRole('complementary');

    userEvent.click(closeButton);

    await waitForElementToBeRemoved(() => screen.queryByRole('complementary'));

    // Assert
    expect(drawer).not.toBeInTheDocument();
  });

  it('should be closed when backdrop is clicked', async () => {
    // Arrange
    render(
      <DrawerContextProvider>
        <Drawer />
      </DrawerContextProvider>,
    );

    // Act
    const hamburgerButton = screen.getByRole('button');
    userEvent.click(hamburgerButton);
    const backdrop = await screen.findByTestId('backdrop');
    const drawer = screen.getByRole('complementary');

    userEvent.click(backdrop);

    await waitForElementToBeRemoved(() => screen.queryByRole('complementary'));

    // Assert
    expect(drawer).not.toBeInTheDocument();
  });

  it('should be closed when escape key is pressed', async () => {
    // Arrange
    render(
      <DrawerContextProvider>
        <Drawer />
      </DrawerContextProvider>,
    );

    // Act
    const hamburgerButton = screen.getByRole('button');
    userEvent.click(hamburgerButton);
    const drawer = await screen.findByRole('complementary');

    fireEvent.keyDown(document, { key: 'Escape' });

    await waitForElementToBeRemoved(() => screen.queryByRole('complementary'));

    // Assert
    expect(drawer).not.toBeInTheDocument();
  });

  it.each(NAVIGATION_PATHS)(
    'should be closed when drawer item is clicked',
    async ({ title }) => {
      // Arrange
      render(
        <DrawerContextProvider>
          <Drawer />
        </DrawerContextProvider>,
      );

      // Act
      const hamburgerButton = screen.getByRole('button');
      userEvent.click(hamburgerButton);
      const drawerItem = await screen.findByText(title);
      const drawer = screen.getByRole('complementary');

      userEvent.click(drawerItem);

      await waitForElementToBeRemoved(() =>
        screen.queryByRole('complementary'),
      );

      // Assert
      expect(drawer).not.toBeInTheDocument();
    },
  );
});
