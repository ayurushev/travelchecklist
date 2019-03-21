app.factory('travels', ['$window', '$stateParams', function($window, $stateParams) {
  let init = function() {
    if ('travels' in $window.localStorage) {
      try {
        return angular.fromJson($window.localStorage.getItem('travels'));
      } catch(e) {}
    } else {
      return [];
    }
  };
  let data = init();
  let currentIndex;
  return {
    reload: function() {
      // reload from localStorage to revert any changes made
      data = init();
    },
    add: function() {
      let id = (data.length + 1).toString();
      return data.push({
        id: id,
        title: 'Новое путешествие',
        currency: 'EUR',
        steps: []
      });
    },
    remove: function(id) {
      return data.splice(data.findIndex(x => x.id === id), 1);
    },
    addStep: function() {
      return data[currentIndex].steps.push({ items: [] });
    },
    removeStep: function(index) {
      return data[currentIndex].steps.splice(index, 1);
    },
    addItem: function(stepIndex) {
      return data[currentIndex].steps[stepIndex].items.push([]);
    },
    removeItem: function(stepIndex, index) {
      return data[currentIndex].steps[stepIndex].items.splice(index, 1);
    },
    get: function(id) {
      if (id) {
        // set current travel index
        currentIndex = data.findIndex(x => x.id === id);
        // return object
        return data.find(x => x.id === id);
      } else {
        return data;
      }
    },
    save: function() {
      try {
        $window.localStorage.setItem('travels', angular.toJson(data));
        return true;
      } catch(e) {
        return false;
      }
    }
  };
}]);
