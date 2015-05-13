'use strict';
// alert('EmailController loading');

app.controller('InboxController', function($scope, InboxFactory){
  $scope.someInbox = 'Hi Inbox';
  
  InboxFactory.getMessages().success(function(data){
    debugger;   
  });
  
  this.title = "My Inbox Title";
  
});
