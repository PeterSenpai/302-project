import { render, screen } from '@testing-library/react';
import App from './App';

test('has zika question 1', () => {
  console.log(`========= Frontend: I am running a test! =========`);
  render(<App />);
  const linkElement = screen.getByText(
    /Are you a resident of, or do you travel frequently to, an area with active Zika transmission?/i
  );
  expect(linkElement).toBeInTheDocument();
});

test('has zika question 2', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Have you recently traveled to an area with active Zika transmission?/i
  );
  expect(linkElement).toBeInTheDocument();
});

test('has zika question 3', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /How long has it been since you returned?/i
  );
  expect(linkElement).toBeInTheDocument();
});

test('has zika question 4', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Have you recently had condomless sex with a partner that has travelled in an area with active Zika transmission?/i
  );
  expect(linkElement).toBeInTheDocument();
});

test('has zika question 5', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /How long has it been since your last condomless sexual encounter?/i
  );
  expect(linkElement).toBeInTheDocument();
});

test('has zika question 6', () => {
  render(<App />);
  const linkElement = screen.getByText(
    /Do you plan to travel to an area with active Zika transmission?/i
  );
  expect(linkElement).toBeInTheDocument();
});
