import { render } from '@testing-library/react';

// Components
import { CardsSkeleton } from '..';

describe('CardsSkeleton component', () => {
  it('Should render CardsSkeleton component with default props', () => {
    const { container } = render(<CardsSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
