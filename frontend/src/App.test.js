import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  console.log(`========= Frontend: I am running a test! =========`);
  render(<App />);
  const linkElement = screen.getByText(/I am running!/i);
  expect(linkElement).toBeInTheDocument();
});
