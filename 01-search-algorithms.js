/*
SEARCH ALGORITHMS
*/

const arr = [
  10, 20, 80, 30, 60, 50, 110, 100, 130, 170, 180, 181, 182, 183, 184, 185, 186,
  187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199,
];

// Linear search algorithm
function findX(arr, search_element) {
  let left = 0;
  let right = arr.length - 1;
  let position = -1;

  while (left < right) {
    if (arr[left] === search_element) {
      position = left;
      break;
    }

    if (arr[right] === search_element) {
      position = right;
      break;
    }

    left++;
    right--;
  }

  return position;
}

// console.log(findX(arr, 199));

/**
 *  BINARY SEARCH ALGORITHM
 */
let end = arr.length - 1;
let start = 0;
let x = 2;
const recursion = (arr, x, start, end) => {
  // Base case
  if (start > end) return -1;

  // divid element by half
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === x) return arr[mid];

  // If element mid is greater than x, search the left;
  if (arr[mid] > x) return recursion(arr, x, start, mid - 1);
  // if element mid is less than x search the right;
  else return recursion(arr, x, mid + 1, end);
};

const result = recursion(arr, x, start, end);

/*
 *DIVID AND CONQUER SEARCH PATTERN
 */

function search(arr, val) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}