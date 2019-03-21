app.factory('tree', ['$stateParams', 'travels', function($stateParams, travels) {
  return {
    create: function() {
      let travel = travels.get($stateParams.id);
      let output = '|' + '-'.repeat(100) + '\r\n';
      output += '| ' + travel.title + ' (' + travel.subtitle + ')\r\n';
      output += '|' + '-'.repeat(100) + '\r\n';
      angular.forEach(travel.steps, function(step, stepIndex) {
        output += '|->\t' + (stepIndex + 1) + '. ' + step.title + '\r\n';
        angular.forEach(step.items, function(item, index) {
          output += '|\t\t' + (stepIndex + 1) + '.' + (index + 1) + '. ' + item[0] + (item[1] ? ' = ' + item[1] : '') + '\r\n';
        });
        output += '|\r\n';
      });
      return output;
    }
  };
}]);
