import { render } from '@testing-library/react';

// Components
import { Sidebar } from '..';

jest.mock('next-auth', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    handlers: jest.fn(),
    signOut: jest.fn(),
    auth: jest.fn()
  })
}));

jest.mock('@/services', () => ({
  getUser: jest.fn()
}));

describe('Sidebar component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should render Sidebar component with default props', () => {
    const { container } = render(<Sidebar />);

    expect(container).toMatchSnapshot();
  });
});
