import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello label', () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello/i);
  expect(helloElement).toBeInTheDocument();
});
