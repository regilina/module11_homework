function printNumbers (start, end) {
  let current = start

  const intervalId = setInterval(() => {
    console.log(current)
    if (current === end) {
      clearInterval(intervalId)
    }
    current++
  }, 1000)
}

// Пример использования:
printNumbers(5, 15)
