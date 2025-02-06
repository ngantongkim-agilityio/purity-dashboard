import { render } from '@testing-library/react';

// Components
import { TableRowSkeleton } from '..';

describe('TableRowSkeleton component', () => {
  it('Should render TableRowSkeleton component with default props', () => {
    const { container } = render(<TableRowSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
