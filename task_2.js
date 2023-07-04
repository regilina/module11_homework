function checkPrimeNumber(number) {
    if (number <= 1 || number > 1000) {
      console.log("Данные неверны");
      return;
    }
  
    let isPrime = true;
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  
    if (isPrime) {
      console.log("Простое число");
    } else {
      console.log("Составное число");
    }
  }
  
  // Пример использования
  checkPrimeNumber(17); // Простое число
  checkPrimeNumber(21); // Составное число
  checkPrimeNumber(1001); // Данные неверны