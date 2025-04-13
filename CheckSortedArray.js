
function isStrictlyIncreasing(arr) {
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isStrictlyIncreasing([0,0,5,2,3,6,1]));     //[0,0,1,2,3,5,6]
//Time and Space complexity :- O(n) and O(1)