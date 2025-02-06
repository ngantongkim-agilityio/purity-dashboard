// Libs

import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Components
import { Button } from '..';

describe('Button component', () => {
  it('Should render Button component with default props', () => {
    const { container } = render(<Button>Click</Button>);

    expect(container).toMatchSnapshot();
  });

  it('Simulate press event and expect mock function to be called', () => {
    const handlePress = jest.fn();
    const { getByTestId } = render(
      <Button data-testid='test-button' onPress={handlePress} isLoading>
        Click
      </Button>
    );
    const button = getByTestId('test-button');

    userEvent.click(button);

    waitFor(() => {
      expect(handlePress).toHaveBeenCalled();
    });
  });

  it('Should be disabled when the disabled prop is true', () => {
    render(<Button disabled>Press One</Button>);

    expect(screen.getByText('Press One')).toBeDisabled();
  });

  test('Should not call click function when isLoading prop is true', () => {
    const handleClick = jest.fn();

    const { getByTestId } = render(
      <Button data-testid='test-button' onClick={handleClick} isLoading>
        Click
      </Button>
    );
    const button = getByTestId('test-button');
    fireEvent.click(button);

    waitFor(() => {
      expect(handleClick).not.toHaveBeenCalled();
    });
  });
});
