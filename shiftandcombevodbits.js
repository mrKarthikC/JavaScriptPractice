function swapshiftbits(x) 

{

    var xeven = (x & 0xAAAAAAAA) >> 1;

    var xodd = (x & 0x55555555) << 1;

    return xeven + xodd
}

console.log(swapshiftbits(230));
