import { render, fireEvent } from '@testing-library/react';

// Components
import { Input } from '..';

describe('Input component', () => {
  it('Should render Input component with default props', () => {
    const { container } = render(<Input />);

    expect(container).toMatchSnapshot();
  });

  it('Simulate onChange event when fill value', () => {
    const handleChange = jest.fn();

    const { getByTestId } = render(
      <Input data-testid='test-input' onChange={handleChange} />
    );
    const inputElement = getByTestId('test-input');
    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(handleChange).toHaveBeenCalled();
    expect(inputElement).toHaveValue('test');
  });

  test('Should display error message when value is invalid', () => {
    const { getByText } = render(
      <Input placeholder='Password' isInvalid errorMessage='Invalid password' />
    );
    const errorMessage = getByText('Invalid password');

    expect(errorMessage).toBeInTheDocument();
  });
});
