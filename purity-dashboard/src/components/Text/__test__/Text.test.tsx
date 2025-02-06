import { render } from '@testing-library/react';

// Components
import { Text } from '..';

describe('Text component', () => {
  it('Should render Text component with default props', () => {
    const { container } = render(<Text>Test</Text>);

    expect(container).toMatchSnapshot();
  });
});
