/**
 * Created by mmaia on 3/10/16.
 */
'use strict';

var repeat = function(operation, numberOfTimes){
    if(numberOfTimes <= 0){
        return;
    }
    operation();
    repeat(operation, --numberOfTimes);
};

var operation = function(){
    console.log('Executed');
};

module.exports = repeat;