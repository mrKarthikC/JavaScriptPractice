function removeDuplicate(arr) 
{
    let newarr = [];
    
	for (let i = 0; i < arr.length; i++)
{
        if(!(newarr.includes(arr[i])))
{
            newarr.push(arr[i]);
        }
    }

    return newarr;
}

arr = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5];

console.log(removeDuplicate(arr));
