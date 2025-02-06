import { render } from '@testing-library/react';

// Components
import { SearchInput } from '..';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn().mockReturnValue({
    get: jest.fn().mockReturnValue('test')
  }),
  useRouter: jest.fn().mockReturnValue({
    replace: jest.fn()
  }),
  usePathname: jest.fn().mockReturnValue('')
}));

describe('SearchInput component', () => {
  it('Should render SearchInput component with default props', () => {
    const { container } = render(<SearchInput />);

    expect(container).toMatchSnapshot();
  });
});
