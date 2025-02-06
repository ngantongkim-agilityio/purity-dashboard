import { render } from '@testing-library/react';

// Components
import { ThemeSwitcher } from '..';

describe('ThemeSwitcher component', () => {
  beforeEach(() => {
    jest.mock('next-themes', () => ({
      useTheme: jest.fn(() => ({
        setTheme: jest.fn(),
        theme: 'light'
      }))
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render ThemeSwitcher component with default props', () => {
    const { container } = render(<ThemeSwitcher />);

    expect(container).toMatchSnapshot();
  });
});
