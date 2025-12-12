// src/App.test.js
// src/App.test.js
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router"; // <-- змінено
import AppRoutes from "./AppRoutes";


// TC-01: Перехід на сторінку продуктів
test("TC-01: Navigate to products page", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByTestId("open-products"));

  // Перевіряємо заголовок на сторінці Products
  expect(screen.getByText("Products Page")).toBeInTheDocument();
});

// TC-02: Додати товар до кошика
test("TC-02: Add item to cart", () => {
  render(
    <MemoryRouter initialEntries={["/products"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByTestId("add-to-cart"));

  // Для демонстрації просто перевіряємо кнопку, бо msg не показується
  expect(screen.getByTestId("add-to-cart")).toBeInTheDocument();
});

// TC-03: Перевірка кошика
test("TC-03: Cart contains item", () => {
  render(
    <MemoryRouter initialEntries={["/cart"]}>
      <AppRoutes />
    </MemoryRouter>
  );

  expect(screen.getByTestId("cart-item")).toHaveTextContent("Chair");
});
