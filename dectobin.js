function binary(num)

{
	var binarynum = ""
	
	for (i = 0; i < 32;  i++)
{
	var bit = ((num & Math.pow(2,i)) == 0)? 0:1;
	
	binarynum = bit + binarynum;

}
	return binarynum;

}

console.log(binary(240));




	


