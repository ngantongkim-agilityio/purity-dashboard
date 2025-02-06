import { render } from '@testing-library/react';

// Components
import { RevenueChartSkeleton } from '..';

describe('RevenueChartSkeleton component', () => {
  it('Should render RevenueChartSkeleton component with default props', () => {
    const { container } = render(<RevenueChartSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
