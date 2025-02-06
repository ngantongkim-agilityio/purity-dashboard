import { render } from '@testing-library/react';

// Components
import { ProductSkeleton } from '..';

describe('ProductSkeleton component', () => {
  it('Should render ProductSkeleton component with default props', () => {
    const { container } = render(<ProductSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
