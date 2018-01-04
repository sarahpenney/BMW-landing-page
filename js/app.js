// TODO: controllers / routes / in seperate files

var bmwApp = angular.module('bmwApp', ['ngRoute']);

bmwApp.controller('mainController', function($scope, $http) {
  $scope.message = 'testing';

  //GETTING FORM INFORMATION FOR USER TO ADD TO A CUSTOMER CMS
  $scope.master = {};

  // DUMMY CONTENT DATA
  $scope.locations = [
    {name: "Greater London"},
    {name: "Scotland"},
    {name: "Ireland"},
    {name: "Wales"},
    {name: "South East"},
    {name: "South West"},
    {name: "West Midlands"},
    {name: "North West"},
    {name: "North East"},
    {name: "Yorkshire and the Humber"},
    {name: "East Midlands"},
    {name: "East of England"}
  ];

  $scope.update = function(user) {
    $scope.master = angular.copy(user);
    $scope.submitmessage = true;
    $scope.submitform = true;
  };

  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };

  $scope.reset();

});


// routes
bmwApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'pages/home.html',
      controller: 'mainController'
    })
});
