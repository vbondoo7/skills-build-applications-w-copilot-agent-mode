
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders Navbar with logo and brand', () => {
    render(<App />);
    expect(screen.getByAltText(/octofit logo/i)).toBeInTheDocument();
    expect(screen.getByText(/octofit/i)).toBeInTheDocument();
  });

  test('renders dashboard heading', () => {
    render(<App />);
    expect(screen.getByText(/dashboard/i)).toBeInTheDocument();
  });

  test('renders activity table with sample data', () => {
    render(<App />);
    expect(screen.getByText(/recent activities/i)).toBeInTheDocument();
    expect(screen.getByText(/running/i)).toBeInTheDocument();
    expect(screen.getByText(/cycling/i)).toBeInTheDocument();
    expect(screen.getByText(/yoga/i)).toBeInTheDocument();
  });

  test('renders summary card', () => {
    render(<App />);
    expect(screen.getByText(/summary/i)).toBeInTheDocument();
    expect(screen.getByText(/this week/i)).toBeInTheDocument();
    expect(screen.getByText(/total workouts/i)).toBeInTheDocument();
  });

  test('shows and hides activity modal', () => {
    render(<App />);
    const addButton = screen.getByText(/add activity/i);
    fireEvent.click(addButton);
    expect(screen.getByText(/add activity/i)).toBeInTheDocument();
    // Close modal
    const closeButton = screen.getAllByRole('button', { name: /close/i })[0];
    fireEvent.click(closeButton);
    expect(screen.queryByText(/add activity/i)).not.toBeInTheDocument();
  });
});
