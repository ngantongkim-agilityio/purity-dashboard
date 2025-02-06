import { render } from '@testing-library/react';

// Components
import { TableMobileSkeleton } from '..';

describe('TableMobileSkeleton component', () => {
  it('Should render TableMobileSkeleton component with default props', () => {
    const { container } = render(<TableMobileSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
