import { render, fireEvent } from '@testing-library/react';

// Components
import { Breadcrumbs } from '..';

describe('Breadcrumbs component', () => {
  it('Should render Breadcrumbs component with default props', () => {
    const { container } = render(<Breadcrumbs breadcrumbs={[]} />);

    expect(container).toMatchSnapshot();
  });
});
