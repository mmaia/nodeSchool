/**
 * Created by mmaia on 5/19/16.
 */
'use strict';

const promise = new Promise((fulfill, reject) => setTimeout(() => fulfill('FULFILLED!'), 300));

promise.then(console.log);