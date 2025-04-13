//arr1 length is (m+n)
let arr1 = [0,0,1,0,0];   //[0,0,0,1,4]  //sorted output
let arr2 =[0,4,5,6];
let m = 3;
let n = 2;

//Approach 1

// let newArray = [];
// for(let i =0; i<m; i++){
//     newArray.push(arr1[i])
// }
// for(let j =0; j<n; j++){
//     newArray.push(arr2[j])
// }
// console.log(newArray);
//Time and Space complexity :- O(m+n) and O(m+n)

//Approach 2

let p = (m+n) - 1;
let p1 = m-1;
let p2 = n-1;

while(p1>=0, p2>=0, p>=0){
    
    if(arr1[p1] >= arr2[p2]){
        arr1[p] = arr1[p1];
        p--;
        p1--;
    }
    else {
        arr1[p] = arr2[p2];
        p--;
        p2--
    }
}
while (p2 >= 0) {         // in case arr2 have remaining elements?
    arr1[p] = arr2[p2];
    p2--;
    p--;
}
console.log(arr1);
//Time and Space complexity :- O(m+n) and O(1)