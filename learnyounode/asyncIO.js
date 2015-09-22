/**
 * Created by mmaia on 18/09/15.
 */
var fs = require('fs')

fs.readFile(process.argv[2],
    function(err, data){
        if(data){
            console.log(data.toString().split('\n').length - 1)
        }
        else if(err){
            console.log('err')
        }
    }
);