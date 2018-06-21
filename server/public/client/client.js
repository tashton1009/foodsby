var app = angular.module('Foodsby', ['ngRoute']);

console.log('we got this far maybe');


app.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('in the config');
    $routeProvider
        .when('/monday', {
            templateUrl: 'views/monday.html',
            controller: 'MenuController as mc',
        })
        .when('/tuesday', {
            templateUrl: 'views/tuesday.html',
            controller: 'MenuController as mc',
        })
        .when('/wednesday', {
            templateUrl: 'views/wednesday.html',
            controller: 'MenuController as mc',
        })
        .when('/thursday', {
            templateUrl: 'views/thursday.html',
            controller: 'MenuController as mc',
        })
        .when('/friday', {
            templateUrl: 'views/friday.html',
            controller: 'MenuController as mc',
        });

});


app.controller('MenuController', function ($http, $location, MenuService) {
    console.log('menu controller created');
    var vm = this;
    vm.mondayItems = MenuService.monday
    vm.tuesdayItems = MenuService.tuesday
    vm.wednesdayItems = MenuService.wednesday
    vm.thursdayItems = MenuService.thursday
    vm.fridayItems = MenuService.friday


    vm.mondayMenu = function () {
        MenuService.mondayMenu()
        console.log('getting monday menu');

    }
    vm.tuesdayMenu = function () {
        MenuService.tuesdayMenu()
        console.log('getting tuesday menu');

    }
    vm.wednesdayMenu = function () {
        MenuService.wednesdayMenu()
        console.log('getting wednesday menu');

    }
    vm.thursdayMenu = function () {
        MenuService.thursdayMenu()
        console.log('getting thursday menu');

    }
    vm.fridayMenu = function () {
        MenuService.fridayMenu()
        console.log('getting friday menu');

    }
});




// app.controller('mondayController', ['$scope', '$http', '$location', function($scope, $http, $location) {
//     console.log('mondayController is working');
//     $scope.monday = {};
//     $scope.addInfo = function(){
//      console.log('click');
//         $http.get('/items/monday').then(function (response) {
//                 $scope.monday = response
//                 console.log($scope.monday);
//             })
//         }
// }]);
//
// app.controller('tuesdayController', ['$scope', '$http', '$location', function($scope, $http, $location) {
//
//     $scope.tuesday = {};
//     $scope.addInfo = function(){
//      console.log('click');
//         $http.get('/info/tuesday').then(function (response) {
//                 $scope.tuesday = response
//                 console.log($scope.tuesday);
//             })
//         }
//         console.log('tuesdayController is working');
//
// }]);
//
//
// app.controller('wednesdayController', ['$scope', '$http', '$location', function($scope, $http, $location) {
//
//     $scope.wednesday = {};
//     $scope.addInfo = function(){
//      console.log('click');
//         $http.get('/items/wednesday').then(function (response) {
//                 self.wednesday = response
//                 console.log(self.wednesday);
//             })
//         }
//         console.log('wednesdayController is working');
//
// }]);
//
//
//
// app.controller('thursdayController', ['$scope', '$http', '$location', function($scope, $http, $location) {
//
//     $scope.thursday = {};
//     $scope.addInfo = function(){
//      console.log('click');
//         $http.get('/items/thursday').then(function (response) {
//                 self.thursday = response
//                 console.log(self.thursday);
//             })
//         }
//         console.log('thursdayController is working');
//
// }]);
//
// app.controller('fridayController', ['$scope', '$http', '$location', function($scope, $http, $location) {
//
//     $scope.friday = {};
//     $scope.addInfo = function(){
//      console.log('click');
//         $http.get('/items/friday').then(function (response) {
//                 self.friday = response
//                 console.log(self.friday);
//             })
//         }
//         console.log('fridayController is working');
//
// }]);
//
//
// app.controller('MainController', ['$scope', '$http', function($scope, $http) {
//
// }]);
//
 console.log('did we also get this far');
// //////////////////////////////////////////////////////////////////////////////////////////////
