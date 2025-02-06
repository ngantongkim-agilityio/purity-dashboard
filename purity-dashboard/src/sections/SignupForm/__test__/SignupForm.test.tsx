import { render } from '@testing-library/react';

// Components
import { SignupForm } from '..';

jest.mock('@/services/products.ts', () => ({
  fetchLatestProducts: jest.fn()
}));

describe('SignupForm component', () => {
  it('Should render SignupForm component with default props', () => {
    const { container } = render(<SignupForm />);

    expect(container).toMatchSnapshot();
  });
});
