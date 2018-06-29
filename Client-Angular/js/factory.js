myApp.factory('dataFactory', function($http) {
  /** https://docs.angularjs.org/guide/providers **/
  var urlBase = 'http://localhost:3000';
  var _prodFactory  = {};

  _prodFactory.getTodos = function() {
      return $http.get(urlBase +'/api/v1/products');
  };

  _prodFactory.saveTodo = function(todo) {
    return $http.post(urlBase, todo);
  };

  _prodFactory.updateTodo = function(todo) {
    return $http.put(urlBase, todo);
  };

  _prodFactory .deleteTodo = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

  return _prodFactory;
});


myApp.factory('socket', ['$rootScope', function($rootScope) {
  var socket = io.connect('http://localhost:3003');
  return {
    on: function (eventName, callback) {
      socket.on(eventName, function () {  
        var args = arguments;
        $rootScope.$apply(function () {
          callback.apply(socket, args);
        });
      });
    },
    emit: function (eventName, data, callback) {
      socket.emit(eventName, data, function () {
        var args = arguments;
        $rootScope.$apply(function () {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      })
    }
  };
}]);