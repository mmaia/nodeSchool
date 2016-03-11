/**
 * Created by mmaia on 3/10/16.
 */
'use strict';

function checkUserValid(goodUsers){
    return function allUsersValid(submittedUsers) {
        return goodUsers.every(
            function(submittedUsers){
        });
    }
}

module.exports = checkUserValid;