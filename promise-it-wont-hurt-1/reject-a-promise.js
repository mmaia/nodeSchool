/**
 * Created by mmaia on 5/19/16.
 */
'use strict';

const promise = new Promise ((fulfill, reject) => setTimeout(() => reject(new Error('REJECTED!')), 1));

const onReject = (error) => console.log(error.message);

promise.then(null, onReject);