let arr = [0,7,9,3,10,10,2,3,3];  //large element :- 10

//Approach 1

// let large = Math.max(...arr);
// console.log(large);
//Time and Space complexity :- O(n) and O(n)

//Approach 2        // 

let large = arr[0];
for(let i= 0; i<arr.length; i++){
    if(arr[i]> large){
        large = arr[i]
    }
}
console.log(large);
//Time and Space complexity :- O(n) and O(1)