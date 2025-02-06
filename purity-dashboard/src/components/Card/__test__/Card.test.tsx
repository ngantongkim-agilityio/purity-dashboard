import { render } from '@testing-library/react';

// Components
import { Card } from '..';
import { CartIcon } from '@/icons';

describe('Card component', () => {
  it('Should render Card component with default props', () => {
    const { container } = render(
      <Card title='Test' value={1} icon={CartIcon} />
    );

    expect(container).toMatchSnapshot();
  });
});
