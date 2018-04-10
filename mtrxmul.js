
var arr1 = [[1, 2], [3, 4]];
var arr2 = [[5, 6], [7, 8]];
var res = [];


for (var i = 0; i < arr1.length; i++) {
    res[i] = [];
    for (var j = 0; j < arr2[0].length; j++) {
        var sum = 0;
        for (var k = 0; k < arr1[0].length; k++) {
            sum += arr1[i][k] * arr2[k][j];
        }
        res[i][j] = sum;
    }
}
console.log(result);
