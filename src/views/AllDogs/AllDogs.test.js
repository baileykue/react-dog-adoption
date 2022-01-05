import AllDogs from './AllDogs';
import { render, screen } from '@testing-library/react';

test.skip('', () => {
  const { conatiner } = render(<AllDogs />);
  const nameElement = screen.getByText('Barton');
  expect(nameElement).toBeInTheDocument();
});
