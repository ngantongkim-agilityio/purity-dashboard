import { render } from '@testing-library/react';

// Components
import { SaleChart } from '..';

jest.mock('@/services', () => ({
  fetchRevenue: jest.fn(),
  fetchLatestProducts: jest.fn()
}));

describe('SaleChart component', () => {
  it('Should render SaleChart component with default props', () => {
    const { container } = render(<SaleChart />);

    expect(container).toMatchSnapshot();
  });
});
