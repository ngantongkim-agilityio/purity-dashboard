import { render } from '@testing-library/react';

// Components
import { Button } from '..';

describe('Button component', () => {
  it('should render Button component with default props', () => {
    const { container } = render(<Button>Click me</Button>);
    expect(container).toMatchSnapshot();
  });
});
