//Given array is sorted or not, if sorted return true else false.

function isStrictlyIncreasing(arr) {
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(isStrictlyIncreasing([0,0,5,2,3,6,1]));    //false
//Time and Space complexity :- O(n) and O(1)