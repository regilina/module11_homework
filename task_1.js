function countEvenOddZeroElements (arr) {
  let evenCount = 0
  let oddCount = 0
  let zeroCount = 0

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]

    if (typeof element === 'number' && !isNaN(element)) {
      if (element === 0) {
        zeroCount++
      } else if (element % 2 === 0) {
        evenCount++
      } else {
        oddCount++
      }
    }
  }

  console.log('Количество чётных элементов: ' + evenCount)
  console.log('Количество нечётных элементов: ' + oddCount)
  console.log('Количество нулевых элементов: ' + zeroCount)
}

const array = [1, 2, 3, 0, 4, 5, 'a', null, undefined]
countEvenOddZeroElements(array)
