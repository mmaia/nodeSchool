/**
 * Created by mmaia on 3/10/16.
 */
'use strict';

function getShortMessages (obj){
    return obj.filter(function(val){
        return val.message.length < 50;
    }).map(function(item){
        return item.message;
    });
};

module.exports = getShortMessages;