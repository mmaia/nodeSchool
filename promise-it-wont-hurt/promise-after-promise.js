/**
 * Created by mmaia on 4/7/16.
 */
'use strict';

var firstPromise = first();

var secondPromise = firstPromise.then(function(val){
    return second(val);
});

secondPromise.then(console.log);