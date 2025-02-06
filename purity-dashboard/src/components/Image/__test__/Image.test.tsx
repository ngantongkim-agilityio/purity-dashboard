// Libs
import { render, fireEvent, act } from '@testing-library/react';

// Components
import { Image } from '..';

describe('Image component', () => {
  const mockProps = {
    width: 100,
    height: 100,
    alt: 'Test Image',
    src: '/test.src'
  };

  it('Should render Image component with default props', () => {
    const { container } = render(<Image {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it('Should show fallbackSrc after loading get error', async () => {
    const { getByAltText } = render(<Image {...mockProps} />);
    const image = getByAltText('Test Image') as HTMLImageElement;

    await act(async () => {
      fireEvent.error?.(image);
    });

    expect(image.getAttribute('src')).toContain('empty-image.webp');
  });
});
