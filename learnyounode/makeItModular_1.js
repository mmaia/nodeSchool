/**
 * Created by mmaia on 21/09/15.
 */
var fs      = require('fs'),
    path    = require('path');

var directory = process.argv[2];

module.exports = function(dirName, filter, callback) {
    fs.readdir(dirName,
        function (err, list) {
            var data = []; //holds the filtered elements
            if (list) {
                var theFilter = '.' + filter;
                for (var i = 0; i < list.length; i++) {
                    var extension = path.extname(list[i]);
                    if (extension === theFilter) {
                        data.push(list[i]);
                    }
                }
                return(callback(null, data));
            }
            else if (err){
                return(callback(err));
            }
            else{
                return(callback('Panic! Unknown error!'));
            }
        }
    );
};