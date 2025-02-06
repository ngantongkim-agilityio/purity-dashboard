import { render, fireEvent } from '@testing-library/react';

// Components
import { Switch } from '..';

describe('Switch component', () => {
  it('Should render Switch component with default props', () => {
    const { container } = render(<Switch />);

    expect(container).toMatchSnapshot();
  });
});
