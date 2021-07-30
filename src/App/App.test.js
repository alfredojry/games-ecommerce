import { render, screen } from '@testing-library/react';
import App from './App';
import Cart from '../Cart/Cart';

test('rendereriza sua loja online', () => {
  render(<App />);
  const texto = screen.getByText(/sua loja online/i);
  expect(texto).toBeInTheDocument();
});

test('conferir calculos sem frete', () => {
  const cartItems = [
    {
      "id": 312,
      "name": "Super Mario Odyssey",
      "price": 197.88,
      "score": 100,
      "image": "super-mario-odyssey.png",
      "amount": 1
    },
    {
      "id": 201,
      "name": "Call Of Duty Infinite Warfare",
      "price": 49.99,
      "score": 80,
      "image": "call-of-duty-infinite-warfare.png",
      "amount": 2
    }
  ];
  render(<Cart cartItems={cartItems} />);
  const total = 1 * 197.88 + 2 * 49.99; // 297.86
  const texto = screen.getByText(/subtotal: r\$ 297,86/i);
  expect(texto).toBeInTheDocument();
});

test('conferir calculos com frete', () => {
  const cartItems = [
    {
      "id": 312,
      "name": "Super Mario Odyssey",
      "price": 197.88,
      "score": 100,
      "image": "super-mario-odyssey.png",
      "amount": 1
    },
    {
      "id": 201,
      "name": "Call Of Duty Infinite Warfare",
      "price": 49.99,
      "score": 80,
      "image": "call-of-duty-infinite-warfare.png",
      "amount": 1
    }
  ];
  render(<Cart cartItems={cartItems} />);
  const total = 1 * 197.88 + 1 * 49.99 + 2 * 10; // 267.87
  const texto = screen.getByText(/total: r\$ 267,87/i);
  expect(texto).toBeInTheDocument();
});