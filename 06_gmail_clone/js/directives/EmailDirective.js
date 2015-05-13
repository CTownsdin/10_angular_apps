'use strict';
/*
* Directive: <email></email>
* or attribute
*/
app.directive('email', function( $timeout ) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: true,
    templateUrl: 'js/directives/email.template.html',
    controllerAs: 'email',
    controller: function($routeParams, $scope, EmailFactory){  
      this.message = {};
      this.reply = function(message) {
        EmailFactory.reply(message);
      };
      
      var getmessage = EmailFactory.getMessage($routeParams);
        if (getmessage) {
          getmessage.then( angular.bind(this, function ( reponse ){
            EmailFactory.message = response;
            this.message = EmailFactory.message;
            $scope.$parent.email.title = this.message.subject;
          }) );
        }
    },
    link: function (scope, element, attrs, ctrl) {
      var textarea = element.find('.email__response-text')[0];
      scope.$watch('reply', function(newVal, oldVal) {
        if (newVal === oldVal) return;
        if (newVale) {
          $timeout(function() {
            textarea.focus();
          }, 0);
        }
      })
    }
    
    
  };
  
});
