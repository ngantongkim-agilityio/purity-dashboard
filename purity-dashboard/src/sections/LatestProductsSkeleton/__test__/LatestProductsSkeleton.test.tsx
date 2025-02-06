import { render } from '@testing-library/react';

// Components
import { LatestProductsSkeleton } from '..';

describe('LatestProductsSkeleton component', () => {
  it('Should render LatestProductsSkeleton component with default props', () => {
    const { container } = render(<LatestProductsSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
