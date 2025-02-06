import { render } from '@testing-library/react';

// Components
import { Header } from '..';

describe('Header component', () => {
  it('Should render Header component with default props', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
