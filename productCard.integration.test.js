import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "../components/ProductCard";
import { CartProvider, useCart } from "../context/CartContext";
import React from "react";

const product = { id: 5, name: "Крісло", price: 200 };

const CartConsumer = () => {
  const { cart } = useCart();
  return <div data-testid="cart-count">{cart.length}</div>;
};

test("ProductCard додає товар у кошик через реальний CartProvider", () => {
  render(
    <CartProvider>
      <ProductCard product={product} />
      <CartConsumer />
    </CartProvider>
  );

  expect(screen.getByTestId("cart-count").textContent).toBe("0");

  fireEvent.click(screen.getByTestId("add-btn"));

  expect(screen.getByTestId("cart-count").textContent).toBe("1");
});
