import { render } from '@testing-library/react';

// Components
import { NavLinks } from '..';

describe('NavLinks component', () => {
  it('Should render NavLinks component with default props', () => {
    const { container } = render(<NavLinks links={[]} />);

    expect(container).toMatchSnapshot();
  });
});
