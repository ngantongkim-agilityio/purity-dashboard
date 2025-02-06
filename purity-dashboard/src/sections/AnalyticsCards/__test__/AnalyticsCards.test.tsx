import { render } from '@testing-library/react';

// Components
import { AnalyticsCards } from '..';

jest.mock('@/services/analytics.ts', () => ({
  fetchAnalytics: jest.fn()
}));

jest.mock('@/services/products.ts', () => ({
  fetchLatestProducts: jest.fn()
}));

describe('AnalyticsCards component', () => {
  it('Should render AnalyticsCards component with default props', () => {
    const { container } = render(<AnalyticsCards />);

    expect(container).toMatchSnapshot();
  });
});
