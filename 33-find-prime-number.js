/*

Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements
You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

EXAMPLES
is_prime(1)  
is_prime(2) 
is_prime(-1)
 */

// method 1;
function isPrime(num) {
  //TODO

  // check if num less or equl 1
  if (num <= 1) return false;

  // check if 3 less than or equal 3
  if (num <= 3) return true;

  // check num modules equl 0 return false
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

// method 2;
function isPrime2(num) {
  if (num < 2) return false;

  const limit = Math.sqrt(num);

  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
