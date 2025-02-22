function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throw an error
  }
  return a + b;
}

// Or handle nulls by using a default value
function foo2(a, b) {
  const numA = a === null ? 0 : a;
  const numB = b === null ? 0 : b; 
  return numA + numB;
}
console.log(foo2(1, 2)); // Output: 3
console.log(foo2(null, 2)); // Output: 2
console.log(foo2(1, null)); // Output: 1
console.log(foo2(null, null)); // Output: 0