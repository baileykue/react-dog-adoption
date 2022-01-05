import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import AllDogs from './AllDogs';

test('<AllDogs/> should render the entire list of dogs', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <Route path="/">
        <AllDogs />
      </Route>
    </MemoryRouter>
  );

  await screen.findByText('Dogs Available For Adoption');
  expect(container).toMatchSnapshot();
});
