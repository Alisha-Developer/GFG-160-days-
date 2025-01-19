const rotateArr=(arr, d)=> {
    // code here
    let t=0;
    // while(d>0){
    //     let t = arr[0];
    //     for(let i=1;i<arr.length;i++){
    //         arr[i-1] = arr[i];
    //     }
    //     arr[arr.length-1]=t;
    //     d--;
    // }
    let n=arr.length;
    d=d%n;
    const arrrev = (start,end)=>{
        while(start<end){
            [arr[start],arr[end]]=[arr[end],arr[start]];
            start++;
            end--;
        }
    }
        arrrev(0,d-1);
        arrrev(d,n-1);
        arrrev(0,n-1);
    
    
    return arr;
}
console.log(rotateArr([1,2,3,4,5],2));