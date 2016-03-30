/**
 * Created by mmaia on 3/29/16.
 */
'use strict';


function myFunc(user, callback){
    if(user){
        callback(null, user);
    }
    return callback('No user was found', null);
}