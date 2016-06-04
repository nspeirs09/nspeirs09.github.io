angular.module('quotesApp')
  .controller('quotesCtrl', function($scope, quotesService) {

    $scope.quotes = quotesService.readQuotes();

    $scope.createQuote = function() {
      console.log($scope.newQuote);
        quotesService.createQuote($scope.newQuote.text, $scope.newQuote.author);

        $scope.text = '';
        $scope.author = '';
    };
    $scope.deleteQuote = function(index) {
      quotesService.deleteQuote(index)
    }
  });
