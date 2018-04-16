
function mPowerN(m,n)
{
    var result = 1; // this is m^n for us.

    for(var i = 1; i <= n; i++ ){
        result = result * m;
    }

    return result;
}
