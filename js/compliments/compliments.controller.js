`use strict`;

(function(){
    var app = angular.module("angularComp");
    app.controller("angularCompController", ComplimentsController);

    function angularCompController(){
          var vm = this;
          var randomIndex = Math.floor(Math.random() * data.length)
          vm.data = data[randomIndex];
        }
}());
