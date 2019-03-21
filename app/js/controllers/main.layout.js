app.controller('MainLayoutController', ['$scope', '$state', '$timeout', 'travels', function($scope, $state, $timeout, travels) {
  $scope.$state = $state;

  $scope.add = function() {
    if ($state.current.name === 'travels') {
      let newId = travels.add();
      /*if (newId) {
        $timeout(function() {
          $state.go('travel', { id: newId });
        }, 50);
      }*/
    } else if ($state.current.name === 'travel') {
      $scope.newStepIndex = travels.addStep() - 1
    }
  }

  $scope.save = function() {
    if (travels.save()) {
      console.log('travels: saved.');
      //alert('Travels saved to localStorage.')
    }
  }

  $scope.reload = function() {
    travels.reload();
    $state.reload();
  }
}]);
