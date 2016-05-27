/**
 * Created by mmaia on 5/21/16.
 */

const promise = new Promise((fulfill, reject) => fulfill('PROMISE VALUE'));

promise.then(console.log);

console.log('MAIN PROGRAM');