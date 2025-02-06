import { render } from '@testing-library/react';

// Components
import { CreateProductForm } from '..';

jest.mock('@/services/products.ts', () => ({
  fetchLatestProducts: jest.fn()
}));

describe('CreateProductForm component', () => {
  const mockProps = {
    authors: []
  };

  it('Should render CreateProductForm component with default props', () => {
    const { container } = render(<CreateProductForm {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
