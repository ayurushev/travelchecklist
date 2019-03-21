app.controller('TravelController', ['$scope', '$stateParams', '$state', 'travels', function($scope, $stateParams, $state, travels) {
  $scope.travel = travels.get($stateParams.id);

  if (!$scope.travel) {
    console.error('Travel ID not found!', $stateParams.id);
    $state.go('travels');
  }

  $scope.removeStep = function(index) {
    travels.removeStep(index);
  }

  $scope.addItem = function(stepIndex) {
    $scope.stepIndex = stepIndex;
    $scope.newItemIndex = travels.addItem(stepIndex) - 1;
  }

  $scope.removeItem = function(stepIndex, index) {
    travels.removeItem(stepIndex, index);
  }

  $scope.summarize = function(items) {
    let summary = 0;
    angular.forEach(items, function(item) {
      summary += item[1] || 0;
    });
    return summary.toFixed(2);
  }
}]);
