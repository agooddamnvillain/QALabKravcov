import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "../context/CartContext";

describe("CartContext Integration", () => {
  const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

  test("додає товар у кошик", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ id: 1, name: "Стіл", price: 100 });
    });

    expect(result.current.cart.length).toBe(1);
    expect(result.current.cart[0].name).toBe("Стіл");
  });

  test("видаляє товар", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ id: 2, name: "Диван", price: 300 });
      result.current.removeFromCart(2);
    });

    expect(result.current.cart.length).toBe(0);
  });

  test("очищає кошик", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart({ id: 3, name: "Стілець", price: 50 });
      result.current.clearCart();
    });

    expect(result.current.cart).toEqual([]);
  });
});
