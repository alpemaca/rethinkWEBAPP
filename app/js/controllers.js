'use strict';

var serverURL = 'http://alpemaca-books.herokuapp.com/';

function BooksListCtrl($scope, $http) {
  
  $http.get(serverURL + 'books').success(function(data) {
    $scope.books = data;
    for(var i = 0; i < $scope.books.length; i++) {
      if($scope.books[i].readed)
        $scope.books[i].readed_string = "Leído";
      else
        $scope.books[i].readed_string = "Por leer";
    }
  });

  $scope.deleteBook = function(book, index) {
    $http.delete(serverURL + 'books/' + book.id).success(function() {
      $scope.books.splice(index, 1);
    });
  }
}

BooksListCtrl.$inject = ['$scope', '$http'];

function BookDetailCtrl($scope, $http, $routeParams) {
  $http.get(serverURL + 'books/' + $routeParams.id).success(function(data) {
    $scope.book = data;
  });

  $scope.editBook = function() {
    $http.put(serverURL + 'books/' + $scope.book.id + '.json', angular.toJson($scope.book)).success(function(data, status, xhr) {
      window.location.hash = "books";
    });
  }
}

BookDetailCtrl.$inject = ['$scope', '$http', '$routeParams'];

function BookNewCtrl($scope, $http) {
  $scope.saveBook = function() {
    $http.post(serverURL + 'books', angular.toJson($scope.book)).success(function(data, status, xhr) {
      window.location.hash = "books";
    });
  }

}

BookNewCtrl.$inject = ['$scope', '$http'];
