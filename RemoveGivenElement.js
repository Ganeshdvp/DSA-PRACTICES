let arr = [3,2,2,3];    //2
let val = 3;

let k=0;      //pointer 

for(let i=0; i<arr.length; i++){
    if(arr[i] !== val){
        arr[k] = arr[i];
        k++;
    }
}
console.log(k);  //2
//Time and Space Complexity :- O(n) and O(1)
