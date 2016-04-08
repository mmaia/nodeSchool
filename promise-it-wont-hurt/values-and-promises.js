/**
 * Created by mmaia on 4/7/16.
 */
'use strict';

function attachTitle(value) {
    return 'DR. ' + value;
}

var fullfiledPromise = new Promise(function(fullfil){
    fullfil('MANHATTAN');
});

fullfiledPromise.then(attachTitle).then(console.log);

//better solution from exercise solution, mine it's also correct
// function attachTitle(name) {
//     return 'DR. ' + name;
// }
//
// Promise.resolve('MANHATTAN')
//     .then(attachTitle)
//     .then(console.log);
