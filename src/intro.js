// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n.toString();
}
export function Factorial(n) {
  if (n >= 1) {
    let sum = 1;
    for (let i = n; i >= 1; i--) {
      sum = sum * i;
    }
    return sum;
  }
  if (n == 0) return 1;
  if (n < 0) return undefined;
}
