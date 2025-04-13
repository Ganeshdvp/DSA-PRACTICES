let arr = [0,0,0,0,3,4,2,1,0];   //output:- [3,4,2,1,0,0,0,0,0]

//Approach 1

// let newArray =[];
// for(let i = 0; i<arr.length; i++){
//     if(arr[i] != 0){
//         newArray.push(arr[i])
//     }
// }
// while(newArray.length < arr.length){
//     newArray.push(0)
// }
// console.log(newArray);
//Time and Space complexity :- O(n) and O(n)

//Approach 2

let j = 0;
for(let i = 0; i<arr.length; i++){
    if(arr[i] !=0){
        arr[j] = arr[i];
        j++;
    }
}
while(j<arr.length){
    arr[j] = 0;
    j++
}
console.log(arr);
//Time and Space complexity :- O(n) and O(1)
