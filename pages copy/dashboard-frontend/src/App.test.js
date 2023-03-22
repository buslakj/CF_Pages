import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Kassidy\'s Cloudflare General Assessment', () => {
  render(<App />);
  const linkElement = screen.getByText("Kassidy\'s Cloudflare General Assessment");
  expect(linkElement).toBeInTheDocument();
  expect(screen.getByRole('heading')).toHaveTextContent('Kassidy\'s Cloudflare General Assessment')
});

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<App />)
  const linkElement = screen.getByText("Traffic Data over 30 days");
  expect(linkElement).toBeInTheDocument();

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Traffic Data over 30 days')

})

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<App />)
  const linkElement = screen.getByText("Most Popular Domains");
  expect(linkElement).toBeInTheDocument();

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Most Popular Domains')

})

test('loads and displays greeting', async () => {
  // ARRANGE
  render(<App />)
  const linkElement = screen.getByText("Layer 3 DDoS Attack over 30 days");
  expect(linkElement).toBeInTheDocument();

  // ASSERT
  expect(screen.getByRole('heading')).toHaveTextContent('Layer 3 DDoS Attack over 30 days')

})