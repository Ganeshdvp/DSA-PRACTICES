//same as previous MergeArray1 problem;

let arr1 = [0,4,8,9,0,0,0,0];    //output:- [0,2,3,4,5,6,8,9]
let arr2 = [5,6];
let arr3 = [2,3];
let m = 4;
let n = 2;
let o = 2;

let p1 = m-1;
let p2 = n-1;
let p3 = o-1;
let p = (m+n+o)-1;

while (p >= 0) {
    let v1 = p1 >= 0 ? arr1[p1] : -Infinity;
    let v2 = p2 >= 0 ? arr2[p2] : -Infinity;
    let v3 = p3 >= 0 ? arr3[p3] : -Infinity;
    
    if (v1 >= v2 && v1 >= v3) {
        arr1[p] = v1;
        p1--;
    } else if (v2 >= v1 && v2 >= v3) {
        arr1[p] = v2;
        p2--;
    } else {
        arr1[p] = v3;
        p3--;
    }
    p--;
}
console.log(arr1); 
//Time and Space complexity :- O(m+n+o) and O(1)