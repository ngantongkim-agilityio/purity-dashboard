import { render } from '@testing-library/react';

// Components
import { LatestProducts } from '..';

jest.mock('@/services/products.ts', () => ({
  fetchLatestProducts: jest.fn()
}));

describe('LatestProducts component', () => {
  it('Should render LatestProducts component with default props', () => {
    const { container } = render(<LatestProducts />);

    expect(container).toMatchSnapshot();
  });
});
