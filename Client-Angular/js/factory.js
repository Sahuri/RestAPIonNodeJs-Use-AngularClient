myApp.factory('todosFactory', function($http) {
  /** https://docs.angularjs.org/guide/providers **/
  var urlBase = 'http://localhost:3000';
  var _todosFactory = {};

  _todosFactory.getTodos = function() {
      return $http.get(urlBase +'/api/v1/products');
  };

  _todosFactory.saveTodo = function(todo) {
    return $http.post(urlBase, todo);
  };

  _todosFactory.updateTodo = function(todo) {
    return $http.put(urlBase, todo);
  };

  _todosFactory.deleteTodo = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

  return _todosFactory;
});
