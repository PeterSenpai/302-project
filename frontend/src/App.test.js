import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  console.log(`========= Frontend: I am running a test! =========`);
  render(<App />);
  const linkElement = screen.getByText(
    /Are you a resident of, or do you travel frequently to, an area with active Zika transmission?/i
  );
  expect(linkElement).toBeInTheDocument();
  expect(true).toBe(true);
});
