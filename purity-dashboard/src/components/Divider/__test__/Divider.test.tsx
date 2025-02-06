import { render } from '@testing-library/react';

// Components
import { Divider } from '..';

describe('Divider component', () => {
  it('Should render Divider component with default props', () => {
    const { container } = render(<Divider />);

    expect(container).toMatchSnapshot();
  });
});
