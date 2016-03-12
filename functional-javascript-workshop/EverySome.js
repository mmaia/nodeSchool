/**
 * Created by mmaia on 3/10/16.
 */
'use strict';


function checkUserValid(goodUsers){

  //this is the real test "if this submittedUsers are all on the goodUsersList" so test for each element of submittedUsers list
  return function allUsersValid(submittedUsers) {
      //loops submittedUsers and only return true if all elements on submittedUsers matches.
      return submittedUsers.every(function(submittedUser){
        //some loops on goodUsers and only return true if one of the elements on goodUsers matches current submitted User.
        return goodUsers.some(function(goodUser){
          return goodUser.id === submittedUser.id;
        });
      });
    };
}

module.exports = checkUserValid;