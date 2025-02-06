import { render } from '@testing-library/react';

// Components
import { Footer } from '..';

describe('Footer component', () => {
  it('Should render Footer component with default props', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
