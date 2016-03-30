/**
 * Created by mmaia on 3/29/16.
 */
'use strict';

var promise = new Promise(function(fulfill, reject){
    setTimeout(function(){fulfill('FULFILLED!');}, 300);
});

promise.then(console.log);