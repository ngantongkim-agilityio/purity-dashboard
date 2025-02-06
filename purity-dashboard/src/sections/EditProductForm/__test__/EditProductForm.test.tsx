import { render } from '@testing-library/react';

// Components
import { EditProductForm } from '..';

jest.mock('@/services/products.ts', () => ({
  fetchLatestProducts: jest.fn()
}));

describe('EditProductForm component', () => {
  const mockProps = {
    product: {
      id: '1',
      author_id: '1',
      amount: 1,
      status: 'pending'
    },
    authors: []
  };

  it('Should render EditProductForm component with default props', () => {
    const { container } = render(<EditProductForm {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
