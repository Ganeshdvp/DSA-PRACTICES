let arr = [0, 0, 1, 2, 2, 2, 3, 4, 0]; //[0,1,2,3,4]

//Approach 1

// const unique = [...new Set(arr)]
// console.log(unique);
//Time and Space complexity :- O(n) and O(n)

//Approach 2

// let newArray = [];

// for (let i = 0; i < arr.length; i++) {
//   let count = 0;
//   for (let j = 0; j < newArray.length; j++) {
//     if (arr[i] == newArray[j]) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     newArray.push(arr[i]);
//   }
// }
// console.log(newArray);
//Time and Space complexity :- O(n*2) and O(n)

//Approach 3

let k = 1;
for (let i = 1; i < arr.length; i++) {
  if (arr[i] != arr[k - 1]) {
    arr[k] = arr[i];
    k++;
  }
}
console.log(arr.slice(0, k-1)); // [0,1,2,3,4]