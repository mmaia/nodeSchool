/**
 * Created by mmaia on 18/09/15.
 */
var fs      = require('fs'),
    path    = require('path')

var directory = process.argv[2];

fs.readdir(directory,
    function(err, list){
        if(list){
            for (var i = 0; i < list.length; i++){
                var fileName = list[i]
                var extension = path.extname(fileName)
                var filter = '.' + process.argv[3]
                if(extension === filter){
                    console.log(fileName)
                }
            }
        }
        if(err){
            console.error('error ocurred: ' + err)
        }
    }
)