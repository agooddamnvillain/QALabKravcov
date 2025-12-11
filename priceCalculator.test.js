import { 
    applyDiscount, 
    calculateTotal, 
    filterProductsByPrice, 
    sortProductsByPrice, 
    findMostExpensiveProduct 
  } from './priceCalculator';
  
  const products = [
    { id: 1, name: "Стіл", price: 100 },
    { id: 2, name: "Стілець", price: 50 },
    { id: 3, name: "Диван", price: 300 },
  ];
  
  test('applyDiscount правильно зменшує ціну', () => {
    expect(applyDiscount(100, 10)).toBe(90);
    expect(applyDiscount(200, 50)).toBe(100);
  });
  
  test('applyDiscount кидає помилку при некоректній знижці', () => {
    expect(() => applyDiscount(100, -5)).toThrow("Невірна знижка");
    expect(() => applyDiscount(100, 120)).toThrow("Невірна знижка");
  });
  
  test('calculateTotal правильно сумує товари зі знижкою', () => {
    expect(calculateTotal(products, 10)).toBe(405);
  });
  
  test('filterProductsByPrice повертає товари в межах діапазону', () => {
    expect(filterProductsByPrice(products, 50, 150).map(p => p.name)).toEqual(["Стіл", "Стілець"]);
    expect(filterProductsByPrice(products, 0, 40).map(p => p.name)).toEqual([]);
  });
  
  test('filterProductsByPrice кидає помилку при невірному діапазоні', () => {
    expect(() => filterProductsByPrice(products, 100, 50)).toThrow("Мінімальна ціна більше максимальної");
  });
  
  test('sortProductsByPrice сортує за зростанням і спаданням', () => {
    expect(sortProductsByPrice(products).map(p => p.price)).toEqual([50, 100, 300]);
    expect(sortProductsByPrice(products, false).map(p => p.price)).toEqual([300, 100, 50]);
  });
  
  test('findMostExpensiveProduct повертає найдорожчий товар', () => {
    expect(findMostExpensiveProduct(products).name).toBe("Диван");
    expect(findMostExpensiveProduct([])).toBeNull();
  });
  