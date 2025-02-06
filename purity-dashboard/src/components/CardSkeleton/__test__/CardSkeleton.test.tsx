import { render } from '@testing-library/react';

// Components
import { CardSkeleton } from '..';

describe('CardSkeleton component', () => {
  it('Should render CardSkeleton component with default props', () => {
    const { container } = render(<CardSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
