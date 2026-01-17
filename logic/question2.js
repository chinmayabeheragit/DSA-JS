function doubleEvenNumbers(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      result.push(arr[i] * 2);
    }
  }

  return result;
}

console.log(doubleEvenNumbers([1, 2, 3, 4]));
