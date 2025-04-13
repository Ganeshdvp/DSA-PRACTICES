let arr = [0,7,8,3,10,10,2,9,3,3]; // output:- 9

//Approach 1

let min = 0;
let max = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        min = max;
        max = arr[i];
    }
    else if(arr[i]>min && max>arr[i]){
        min = arr[i]
    }
}
console.log(min);
//Time and Space complexity :- O(n) and O(1)