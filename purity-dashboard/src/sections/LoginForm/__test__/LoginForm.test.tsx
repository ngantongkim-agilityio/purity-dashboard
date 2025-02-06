import { render } from '@testing-library/react';

// Components
import { LoginForm } from '..';

jest.mock('@/services/products.ts', () => ({
  fetchLatestProducts: jest.fn()
}));

describe('LoginForm component', () => {
  it('Should render LoginForm component with default props', () => {
    const { container } = render(<LoginForm />);

    expect(container).toMatchSnapshot();
  });
});
