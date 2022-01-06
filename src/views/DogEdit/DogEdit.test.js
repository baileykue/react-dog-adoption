import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import DogEdit from './DogEdit';

test('<DogEdit/> should render the specific dog form information', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/5/edit']}>
      <Route path="/dogs/:id/edit">
        <DogEdit />
      </Route>
    </MemoryRouter>
  );

  await screen.findByText('Dalmatian');
  expect(container).toMatchSnapshot();
});
