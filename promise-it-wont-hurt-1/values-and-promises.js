/**
 * Created by mmaia on 6/2/16.
 */
'use strict';

function attachTitle (arg) {
    return "DR. " + arg;
};

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);