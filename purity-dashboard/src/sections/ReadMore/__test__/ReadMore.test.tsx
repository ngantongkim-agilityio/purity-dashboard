import { render } from '@testing-library/react';

// Components
import { ReadMore } from '..';

describe('ReadMore component', () => {
  it('Should render ReadMore component with default props', () => {
    const { container } = render(<ReadMore />);

    expect(container).toMatchSnapshot();
  });
});
