import React from 'react';
import { fireEvent, render, wait, screen, FindByRole } from '@testing-library/react';
import App from './App';

test('renders without crashing', async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});

// test('home work as expected', async () => {
//   const { container } = render(<App />)
//   const gifLink = await wait(() => {
//     container.querySelector('.Gif-link');
//   })
//   expect(gifLink).toBeVisible();
// })

test('search form could be used', async () => {
  render(<App />)

  const input = await screen.findByRole('textbox')
  fireEvent.change(input, { target: { value: 'Matrix'}})

  const title = await screen.findByText('Matrix')
  expect(title).toBeVisible()
})

 