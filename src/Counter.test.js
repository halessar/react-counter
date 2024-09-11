import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('exibe o valor inicial do contador', () => {
    render(<Counter />);
    const counterText = screen.getByText(/Contador: 0/i);
    expect(counterText).toBeInTheDocument();
  });

  test('incrementa o valor do contador ao clicar no botão de incrementar', () => {
    render(<Counter />);
    const incrementButton = screen.getByText(/Incrementar/i);
    fireEvent.click(incrementButton);
    const counterText = screen.getByText(/Contador: 1/i);
    expect(counterText).toBeInTheDocument();
  });

  test('decrementa o valor do contador ao clicar no botão de decrementar', () => {
    render(<Counter />);
    const decrementButton = screen.getByText(/Decrementar/i);
    fireEvent.click(decrementButton);
    const counterText = screen.getByText(/Contador: -1/i);
    expect(counterText).toBeInTheDocument();
  });
});
