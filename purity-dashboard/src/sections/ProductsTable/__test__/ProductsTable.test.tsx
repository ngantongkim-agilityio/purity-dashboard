import { render } from '@testing-library/react';

// Components
import { ProductsTable } from '..';

jest.mock('@/services/products.ts', () => ({
  fetchFilteredProducts: jest.fn()
}));

describe('ProductsTable component', () => {
  const mockProps = {
    query: 'test',
    currentPage: 1
  };

  it('Should render ProductsTable component with default props', () => {
    const { container } = render(<ProductsTable {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
