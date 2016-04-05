/**
 * Created by mmaia on 3/30/16.
 */
'use strict';

//next 2 ways of implementing a promise are correct, second one is a "shortcut"
var promise = new Promise(function(fulfill, reject){
    fulfill('gotchya');
});
var promise1 = Promise.resolve('gotchya');

//next 2 ways of implementing error (reject) in promises are correct, second one is a "shortcut"
var promise2 = new Promise(function(fulfill, reject){
    reject(new Error('wtf happened... just errors'));
});

var promise3 = Promise.reject(new Error('wtf happened.. just errors'));

function handleError(error){
    console.log(error.message);
}

//these 2 are the same even the implementation is different...
promise.then(console.log);
promise1.then(console.log);

//these 2 are valid ways of handling errors, second one is the shortcut version.
promise2.then(null, handleError);
promise3.catch(handleError);