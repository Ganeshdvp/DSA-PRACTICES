let arr = [0,0,0,1,2,2,2,2,2,3,3,4];  // o/p: [0,0,1,2,2,3,3,4]

let newArray = [];
for(let i=0; i<arr.length; i++){
    let count =0 ;
    for(let j=0; j<newArray.length; j++){
        if(arr[i] == newArray[j]){
            count++;
        }
    }
    if(count<2){
        newArray.push(arr[i]);
    }
}
console.log(newArray);
//time and space complexity:- O(n*2) and (n);