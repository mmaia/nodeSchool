/**
 * Created by mmaia on 4/7/16.
 */
'use strict';

function parsePromised(json){
    var myPromise = new Promise(function(fulfill, reject){
        try{
            fulfill(JSON.parse(json));
        } catch(e){
            reject(e);
        }

    });
    return myPromise;
}

parsePromised(process.argv[2]).then(null, console.log);


