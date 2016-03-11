/**
 * Created by mmaia on 3/10/16.
 */
'use strict';

function doubleAll(numbers){
    return numbers.map(function(val){
         return val * 2;
    });
}

module.exports = doubleAll;