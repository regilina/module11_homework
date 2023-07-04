function createAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  // Пример использования:
  const addFive = createAdder(5);
  console.log(addFive(3)); // Выведет 8
  console.log(addFive(10)); // Выведет 15