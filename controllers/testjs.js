s="abbcdeab"
const s1 = s;
    const arr = s.split("")
    console.log(arr)
    let arr1=[];
    let max =0;
    for(let i=0;i<arr.length;i++){
        
        
        console.log(arr1)
        console.log(arr1.includes(arr[i]))
        if(!arr1.includes(arr[i])){
            arr1.push(arr[i])
        }else{
            max = arr1.length
           
            arr1=[]
            
            arr1.push(arr[i])
        }
           
    }

    console.log(max)