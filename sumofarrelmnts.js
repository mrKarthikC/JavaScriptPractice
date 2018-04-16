function arraySum(array) 

{

    var sum = 0;
    length = array.length;

    for (var i = 0; i < length; i++)
{
       
 	sum += array[i];
    }

    return sum;

}

array = [1,-32,3,4,5,6];

console.log(Math.abs(arraySum(array)));
