/**
 * Created by mmaia on 4/18/16.
 */
'use strict';

var alwaysThrows = function(){
    throw new Error('OH NOES');
};

var iterate = function(value){
    console.log(value);
    return value + 1;
};

