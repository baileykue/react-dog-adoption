import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Dog from './Dog';

test('<Dog/> should render the specific dog information', async () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/dogs/4']}>
      <Route path="/dogs/:id">
        <Dog />
      </Route>
    </MemoryRouter>
  );

  await screen.findByText('Franny');
  expect(container).toMatchSnapshot();
});
