const getSecondLargest=(arr)=> {
    let myarr = [...new Set(arr.sort())];
    myarr.sort((a,b)=>a-b); // tim sort is the hybrid sort algorithm of merge sort and insertion sort in js
    let n = myarr.length;
    if(n>=2){
        return myarr[n-2];
    }
    return -1;
}
console.log(getSecondLargest([12, 35, 1, 10, 34, 1]));