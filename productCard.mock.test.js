import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "../components/ProductCard";

// Мок для useCart
const mockAddToCart = jest.fn();

jest.mock("../context/CartContext", () => ({
  useCart: () => ({
    addToCart: mockAddToCart,
  }),
}));

test("Mock addToCart у ProductCard", () => {
  const product = { id: 6, name: "Лампа", price: 80 };

  render(<ProductCard product={product} />);

  fireEvent.click(screen.getByTestId("add-btn"));

  expect(mockAddToCart).toHaveBeenCalledTimes(1);
  expect(mockAddToCart).toHaveBeenCalledWith(product);
});
