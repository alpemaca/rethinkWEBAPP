'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
    $routeProvider.when('/books', {templateUrl: 'partials/booksList.html', controller: 'BooksListCtrl'});
    $routeProvider.when('/books/new', {templateUrl: 'partials/new.html', controller: 'BookNewCtrl'});
    $routeProvider.when('/books/:id', {templateUrl: 'partials/bookDetail.html', controller: 'BookDetailCtrl'});
    $routeProvider.otherwise({redirectTo: '/books'});

    delete $httpProvider.defaults.headers.common['X-Requested-With'];

  }]);
