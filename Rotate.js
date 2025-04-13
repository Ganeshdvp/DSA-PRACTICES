let arr = [0, 4, 5, 6, 2, 1, 3]; // [5,6,2,1,3,0,4]
let n = 3;

//Approach 1

// let newArray = [];
// for(let i =n; i<arr.length; i++){
//     newArray.push(arr[i]);
// }
// for(let j=0; j<n; j++){
//     newArray.push(arr[j])
// }
// console.log(newArray);
//Time and Space complexity :- O(n) and O(n)

//Approach 2

// let rotated  = arr.slice(n).concat(arr.slice(0,n));
// console.log(rotated);
//Time and Space complexity :- O(n) and O(n)

//Approach 3

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
if (arr.length-1 > n) {
  reverse(arr, 0, n - 1); // Reverse first n elements
  reverse(arr, n, arr.length - 1); //Reverse the rest
  reverse(arr, 0, arr.length - 1); //Reverse the whole array
} else {
    return -1;
}
console.log(arr);
//Time and space complexity :- O(n) and O(1)
