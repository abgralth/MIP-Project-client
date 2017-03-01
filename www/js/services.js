angular.module('starter.services', ['config'])

.factory('User', function($q, $http, API_ENDPOINT) {

  var user = null;

  return {
    /*login: function(username, password) {
      return $q(function(resolve, reject){
        $http.post(API_ENDPOINT.url + "login", { username: username, password: password}).then(function(result){
          if(result.status == 200)
          {
            user = { id: result.data.id, username: result.data.username };
            resolve();
          }
          else
          {
            reject();
          }
        }).catch(function(){
          reject();
        });
      });
    },
    isLogged: function()
    {
      return $q(function(resolve, reject){
        if(user != null)
        {
          resolve();
        }
        else
        {
          reject();
        }
      });
    },
    register: function(username, password) {
      return $q(function(resolve, reject){
        $http.post(API_ENDPOINT.url + "register", { username: username, password: password}).then(function(result){
          if(result.status == 200)
          {
            user = { id: result.data.id, username: result.data.username };
            resolve();
          }
          else
          {
            reject();
          }
        }).catch(function(){
          reject();
        });
      });
    }*/

  };
});;
