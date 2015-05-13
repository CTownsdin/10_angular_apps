'use strict';

app.factory('EmailFactory', function($q, $http, $location){
  var exports = {};
  
  exports.messages = ['hi from email factory'];
  
  // exports.reply = function (message) {
  //   if (message) {
  //     // we would hit the backend here, but instead
  //     alert('Reply content: ' + message);
  //   }
  // };
  
  exports.getMessages = function(params) {
    if ( params.id ) {
      var deferred = $q.defer();
      $http.get('json/message/' + params.id + '.json')
        .success(function (data) {
          deferred.resolve(data);
        })
        .error(function (data) {
          deferred.reject(data);
        });
      return deferred.promise;
    }
  };
  
  return exports;
});




