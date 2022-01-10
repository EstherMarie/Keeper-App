import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders keeper app v1', () => {
  render(<App />);
  const headerEl = screen.getByText('Keeper App');
  const noteEl = screen.getByText(/Note/);
  const footerEl = screen.getByText(/Copyright/)
  
  expect(headerEl).toBeInTheDocument();
  expect(noteEl).toBeInTheDocument();
  expect(footerEl).toBeInTheDocument();

});
