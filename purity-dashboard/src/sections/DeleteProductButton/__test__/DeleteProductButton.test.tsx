import { render } from '@testing-library/react';

// Components
import { DeleteProductButton } from '..';

jest.mock('@/services/products.ts', () => ({
  fetchLatestProducts: jest.fn()
}));

describe('DeleteProductButton component', () => {
  const mockProps = {
    id: '1'
  };

  it('Should render DeleteProductButton component with default props', () => {
    const { container } = render(<DeleteProductButton {...mockProps} />);

    expect(container).toMatchSnapshot();
  });
});
