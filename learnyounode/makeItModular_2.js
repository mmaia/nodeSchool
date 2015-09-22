/**
 * Created by mmaia on 21/09/15.
 */
var makeitmodular = require('./makeItModular_1.js');


makeitmodular(process.argv[2], process.argv[3], function(err, data){
    if(err){
        console.log(err);
    }else{
        data.forEach(function(file){
           console.log(file);
        });
    }
});

