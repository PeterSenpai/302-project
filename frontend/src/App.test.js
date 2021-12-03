import { render, screen } from '@testing-library/react';
import App from './App';

test('has question 1', () => {
  console.log(`========= Frontend: I am running a test! =========`);
  render(<App />);
  const Element = screen.getByText(/Name of child/i);
  expect(Element).toBeInTheDocument();
});

test('has question 2', () => {
  render(<App />);
  const Element = screen.getByText(/Sex/i);
  expect(Element).toBeInTheDocument();
});

test('has question 3', () => {
  render(<App />);
  const Element = screen.getByText(/Birth weight \(kg\)/i);
  expect(Element).toBeInTheDocument();
});

test('has question 4', () => {
  render(<App />);
  const Element = screen.getByText(/Birth length \(cm\)/i);
  expect(Element).toBeInTheDocument();
});

test('has question 5', () => {
  render(<App />);
  const Element = screen.getByText(/Vitamin K given/i);
  expect(Element).toBeInTheDocument();
});

test('has question 6', () => {
  render(<App />);
  const Element = screen.getByText(/Hep B given y \/ n/i);
  expect(Element).toBeInTheDocument();
});

test('has question 7', () => {
  render(<App />);
  const Element = screen.getByText(/Date given/i);
  expect(Element).toBeInTheDocument();
});

test('has question 8', () => {
  render(<App />);
  const Element = screen.getByText(/Abnormalities noted at birth/i);
  expect(Element).toBeInTheDocument();
});
