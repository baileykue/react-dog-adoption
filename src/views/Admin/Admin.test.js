import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Admin from './Admin';

test('<Admin/> should render the empty dog form', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/admin']}>
      <Route path="/dogs/admin">
        <Admin />
      </Route>
    </MemoryRouter>
  );

  await screen.findByText('Breed:');
  expect(container).toMatchSnapshot();
});
