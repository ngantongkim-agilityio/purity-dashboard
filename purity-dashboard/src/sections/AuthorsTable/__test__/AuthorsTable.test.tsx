import { render } from '@testing-library/react';

// Components
import { AuthorsTable } from '..';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue('test')
  }),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn()
  }),
  usePathname: jest.fn().mockReturnValue('')
}));

describe('AuthorsTable component', () => {
  it('Should render AuthorsTable component with default props', () => {
    const { container } = render(<AuthorsTable authors={[]} />);

    expect(container).toMatchSnapshot();
  });
});
