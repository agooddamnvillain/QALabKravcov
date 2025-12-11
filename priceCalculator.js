export function applyDiscount(price, discount) {
    if (discount < 0 || discount > 100) throw new Error("Невірна знижка");
    return price - (price * discount) / 100;
  }
  
  export function calculateTotal(products, discount) {
    return products.reduce((total, item) => total + applyDiscount(item.price, discount), 0);
  }
  
  export function filterProductsByPrice(products, minPrice, maxPrice) {
    if (minPrice > maxPrice) throw new Error("Мінімальна ціна більше максимальної");
    return products.filter(item => item.price >= minPrice && item.price <= maxPrice);
  }
  
  export function sortProductsByPrice(products, ascending = true) {
    return [...products].sort((a, b) => ascending ? a.price - b.price : b.price - a.price);
  }
  
  export function findMostExpensiveProduct(products) {
    if (products.length === 0) return null;
    return products.reduce((prev, curr) => (curr.price > prev.price ? curr : prev), products[0]);
  }
  