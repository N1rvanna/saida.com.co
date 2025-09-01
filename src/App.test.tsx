import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

it('renders company name in navigation', () => {
  render(<App />);
  expect(screen.getByText(/SAIDA S.A. E.S.P./i)).toBeInTheDocument();
});

it('allows clicking the Learn More button', async () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /learn more/i });
  await userEvent.click(button);
  expect(button).toBeInTheDocument();
});
