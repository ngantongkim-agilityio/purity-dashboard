import { render } from '@testing-library/react';

// Components
import { Status } from '..';

describe('Status component', () => {
  it('Should render Status component with default props', () => {
    const { container } = render(<Status />);

    expect(container).toMatchSnapshot();
  });
});
