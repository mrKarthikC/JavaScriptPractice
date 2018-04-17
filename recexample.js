function rec(x , y)

{
	if(x == 0)
	
	return y;

	else
	
	return rec(x - 1 , x + y);
}

console.log(rec(4 , 10));
