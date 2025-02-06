import { render } from '@testing-library/react';

// Components
import { AuthorsSkeleton } from '..';

describe('AuthorsSkeleton component', () => {
  it('Should render AuthorsSkeleton component with default props', () => {
    const { container } = render(<AuthorsSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
