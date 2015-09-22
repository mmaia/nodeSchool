/**
 * Created by mmaia on 18/09/15.
 */
var arguments = process.argv;
var result = 0;
for (var i = 2; i < arguments.length; i++){
    result += Number(arguments[i]);
}
console.log(result);