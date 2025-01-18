const reverseArray=(arr)=>{
    // your code here
    let left=0,right=arr.length-1;
    while(left<right){
        let i = arr[left];
        arr[left] = arr[right];
        arr[right]=i;
        left++;
        right--;
    }
    return arr;
}
console.log(reverseArray([1, 2, 0, 4, 3, 0, 5, 0]));