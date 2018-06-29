myApp.controller("HeaderCtrl", ['$scope', '$location','UserAuthFactory',
  function($scope, $location,UserAuthFactory) {
    $scope.isActive = function(route) {
      return route === $location.path();
      };
      
      $scope.logout = function () {
      UserAuthFactory.logout();
      };

      $scope.page1 = function () {
        $location.path('/page1');
        };

      $scope.page2 = function () {
        $location.path('/page2');
        };

      $scope.page3 = function () {
        $location.path('/page3');
        };

      $scope.page4 = function () {
        $location.path('/page4');
        };
  }
]);

myApp.controller("HomeCtrl", ['$scope',
  function($scope) {
    $scope.name = "Home Controller";
  }
  

]);

myApp.controller("Page1Ctrl", ['$scope',
  function($scope) {
    $scope.name = "Page1 Controller";
  }
]);

myApp.controller("Page2Ctrl", ['$scope',
  function($scope) {
    $scope.name = "Page2 Controller";
    // below data will be used by checkmark filter to show a ✓ or ✘ next to it
    $scope.list = ['yes', 'no', true, false, 1, 0];
  }
]);

myApp.controller("Page3Ctrl", ['$scope', 'dataFactory',
  function($scope, dataFactory) {
    $scope.name = "Page3 Controller";
    $scope.todos = [];

    // Access the factory and get the latest Todos list
    dataFactory.getTodos().then(function(data) {
      $scope.todos = data.data;
    });

  }
]);

myApp.controller("Page4Ctrl", ['$scope','socket',
function($scope,socket) {

  $scope.future='';
  $scope.chat_input;
  $scope.keydown=function(){

  };

  socket.on('connect', function(data) {
    socket.emit('join', 'Hello World from client');
  });

  socket.on('broad', function(data) {
    $scope.future+=data+'<br/>';  
  });

  $scope.submit=function(e){
    var message = $scope.chat_input;
    socket.emit('messages', message);
};

}
]);
