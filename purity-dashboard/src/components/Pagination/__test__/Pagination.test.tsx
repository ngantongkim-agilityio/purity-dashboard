import { render } from '@testing-library/react';

// Components
import { Pagination } from '..';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useSearchParams: jest.fn(
    () =>
      new URLSearchParams({
        query: 'test',
        page: '3'
      })
  ),
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({ replace: jest.fn() }))
}));

describe('Pagination component', () => {
  it('Should render Pagination component with default props', () => {
    const { container } = render(<Pagination totalPages={3} />);

    expect(container).toMatchSnapshot();
  });
});
