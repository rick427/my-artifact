/// <reference types="vitest/globals" />

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button';

describe('Button component', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('fires onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the default primary variant class', () => {
    render(<Button>Primary</Button>);
    const button = screen.getByRole('button', { name: 'Primary' });
    expect(button.className).toMatch(/button--primary/);
  });

  it('applies the outline variant class', () => {
    render(<Button variant="outline">Outline</Button>);
    const button = screen.getByRole('button', { name: 'Outline' });
    expect(button.className).toMatch(/button--outline/);
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole('button', { name: 'Custom' });
    expect(button.className).toMatch(/custom-class/);
  });

  it('passes HTML button attributes (e.g. disabled)', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeDisabled();
  });

  it('supports setting button type', () => {
    render(<Button type="submit">Submit</Button>);
    const button = screen.getByRole('button', { name: 'Submit' });
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('supports aria-label and other HTML props', () => {
    render(<Button aria-label="icon button" title="info">Icon</Button>);
    const button = screen.getByRole('button', { name: 'icon button' });
    expect(button).toHaveAttribute('aria-label', 'icon button');
    expect(button).toHaveAttribute('title', 'info');
  });

  it('matches snapshot', () => {
    const { container } = render(<Button variant="primary" className="test-class">Snapshot</Button>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
