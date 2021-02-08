import React from 'react';
import { render } from '@testing-library/react';
import App from '../../App';

// test.only('home work as expected', async () => {
//   const { container } = render(<App />)
//   const gifLink = waitFor(() => container.querySelector('.gif-link'))
//   expect(gifLink).toBeInTheDocument();
// });


test('renders without crashing', async () => {
    const { findByText } = render(<App />);
    const title = await findByText(/Última búsqueda/i);
    expect(title).toBeInTheDocument();
  });
