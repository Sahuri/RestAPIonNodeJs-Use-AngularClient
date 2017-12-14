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
