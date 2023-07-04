const power = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  };
  
  // Пример использования:
  console.log(power(2, 3)); // Выведет 8 (2 в степени 3)
  console.log(power(5, 2)); // Выведет 25 (5 в степени 2)
  console.log(power(10, 0)); // Выведет 1 (любое число в степени 0 равно 1)