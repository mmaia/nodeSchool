/**
 * Created by mmaia on 3/29/16.
 */
'use strict';


var promise = new Promise(function(fulfill, reject){
    fulfill('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onRejected(error){
    console.log(error.message);
}

promise.then(console.log, onRejected);