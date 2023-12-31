/**
 * 
 * Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]
 * 
 */

function tribonacci(signature, n) {
  //your code here

  for (let i = 0; i < n - 3; i++) {
    signature.push(signature[i] + signature[i + 1] + signature[i + 2]);
  }

  return signature.slice(0, n);
}

// program to generate fibonacci series up to n terms

// take input from the user

function printFibonacci(number) {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");

  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}

// printFibonacci(20);

/* XBONACCI*/
// Build a Xbonacci function that takes a signature of X elements - and
// remember each next element is the sum of the last X elements - and
// returns the first n elements of the so seeded sequence.
//
// xbonacci([1,1,1,1],10) -> [1,1,1,1,4,7,13,25,49,94]
// xbonacci([0,0,0,0,1],10) -> [0,0,0,0,1,1,2,4,8,16]
// xbonacci([1,0,0,0,0,0,1],10) -> [1,0,0,0,0,0,1,1,2,4]
//

const xbonacci = (signature, n) => {
  let width = signature.length;

  let result = signature.slice(0);

  for (let i = width; i < n; i++) {
    let prevSum = arraySum(result.slice(i - width, i));
    result.push(prevSum);
  }
  return result.slice(0, n);
};

const arraySum = (arr) => {
  if (!arr || arr.length === 0) {
    return 0;
  }
  return arr.reduce((acc, curr) => acc + curr);
};

// console.log(xbonacci([1, 1, 1, 1], 20));

// program to generate fibonacci series up to a certain number

// take input from the user
function generateFibonacci(input) {
  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");

  nextTerm = n1 + n2;

  while (nextTerm <= input) {
    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
}

/*
Problem Context
The Fibonacci sequence is traditionally used to explain tree recursion.

function fibonacci(n) {
    if(n==0 || n == 1)
        return n;
    return fibonacci(n-1) + fibonacci(n-2);
}
This algorithm serves welll its educative purpose but it's tremendously inefficient, not only because of recursion, but because we invoke the fibonacci function twice, and the right branch of recursion (i.e. fibonacci(n-2)) recalculates all the Fibonacci numbers already calculated by the left branch (i.e. fibonacci(n-1)).

This algorithm is so inefficient that the time to calculate any Fibonacci number over 50 is simply too much. You may go for a cup of coffee or go take a nap while you wait for the answer. But if you try it here in Code Wars you will most likely get a code timeout before any answers.

For this particular Kata we want to implement the memoization solution. This will be cool because it will let us keep using the tree recursion algorithm while still keeping it sufficiently optimized to get an answer very rapidly.

The trick of the memoized version is that we will keep a cache data structure (most likely an associative array) where we will store the Fibonacci numbers as we calculate them. When a Fibonacci number is calculated, we first look it up in the cache, if it's not there, we calculate it and put it in the cache, otherwise we returned the cached number.

Refactor the function into a recursive Fibonacci function that using a memoized data structure avoids the deficiencies of tree recursion. Can you make it so the memoization cache is private to this function?
*/

function fibonacci(n) {
  if (n < 2) return n;
  let n1 = 0,
    n2 = 1,
    term;

  for (let i = 2; i <= n; ++i) {
    term = n1 + n2;
    n1 = n2;
    n2 = term;
  }

  return term;
}

/* 
The Millionth Fibonacci Kata

The year is 1214. One night, Pope Innocent III awakens to find the the archangel Gabriel floating before him. Gabriel thunders to the pope:

Gather all of the learned men in Pisa, especially Leonardo Fibonacci. In order for the crusades in the holy lands to be successful, these men must calculate the millionth number in Fibonacci's recurrence. Fail to do this, and your armies will never reclaim the holy land. It is His will.

The angel then vanishes in an explosion of white light.

Pope Innocent III sits in his bed in awe. How much is a million? he thinks to himself. He never was very good at math.

He tries writing the number down, but because everyone in Europe is still using Roman numerals at this moment in history, he cannot represent this number. If he only knew about the invention of zero, it might make this sort of thing easier.

He decides to go back to bed. He consoles himself, The Lord would never challenge me thus; this must have been some deceit by the devil. A pretty horrendous nightmare, to be sure.

Pope Innocent III's armies would go on to conquer Constantinople (now Istanbul), but they would never reclaim the holy land as he desired.

In this kata you will have to calculate fib(n) where:

fib(0) := 0
fib(1) := 1
fib(n + 2) := fib(n + 1) + fib(n)
Write an algorithm that can handle n up to 2,000,000.

Your algorithm must output the exact integer answer, to full precision. Also, it must correctly handle negative numbers as input.

HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n) if you already know fib(n + 1) and fib(n + 2)? Use this to reason what value fib has to have for negative values.

HINT II: See https://web.archive.org/web/20220614001843/https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4


*/

function multiplyMatrix(matrixA, matrixB) {
  const result = [
    [0n, 0n],
    [0n, 0n],
  ];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }
  return result;
}

function powerMatrix(matrix, n) {
  if (n % 2 === 0) {
    const half = powerMatrix(matrix, n / 2);
    return multiplyMatrix(half, half);
  } else {
    const half = powerMatrix(matrix, (n - 1) / 2);
    const squared = multiplyMatrix(half, half);
    return multiplyMatrix(matrix, squared);
  }
}

function fib(n) {
  if (n === 0) return 0n;
  if (n === 1) return 1n;

  if (n < 0) {
    return n % 2 === 0 ? -fib(-n) : fib(-n);
  }

  const baseMatrix = [
    [1n, 1n],
    [1n, 0n],
  ];
  const resultMatrix = powerMatrix(baseMatrix, n - 1);
  return resultMatrix[0][0];
}

console.log(fib(1016186).toString());
