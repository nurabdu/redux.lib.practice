import { render, screen } from '@testing-library/react';


test('renders learn react link', () => {
  render(<App2 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
