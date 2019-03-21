app.controller('TravelsController', ['$scope', 'travels', function($scope, travels) {
  $scope.travels = travels.get();

  $scope.allDone = function(travel) {
    let result = travel.steps.length > 0 ? true : false;
    angular.forEach(travel.steps, function(step) {
      if (!step.done) {
        result = false;
      }
    });
    return result;
  }

  $scope.remove = function(travelId) {
    travels.remove(travelId);
  }

  $scope.summarize = function(steps) {
    let summary = 0;
    angular.forEach(steps, function(step) {
      if (step.done === true) {
        angular.forEach(step.items, function(item) {
          summary += item[1] || 0;
        });
      }
    });
    return summary.toFixed(2);
  }
}]);
