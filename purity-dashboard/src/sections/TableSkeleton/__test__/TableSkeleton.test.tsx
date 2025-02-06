import { render } from '@testing-library/react';

// Components
import { TableSkeleton } from '..';

describe('TableSkeleton component', () => {
  it('Should render TableSkeleton component with default props', () => {
    const { container } = render(<TableSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
