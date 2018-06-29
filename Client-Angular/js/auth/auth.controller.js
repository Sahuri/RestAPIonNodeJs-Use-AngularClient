myApp.controller('LoginCtrl', ['$scope', '$window', '$location', 'UserAuthFactory', 'AuthenticationFactory',
function($scope, $window, $location, UserAuthFactory, AuthenticationFactory) {

$scope.user = {
    username: '',
    password: ''
};

$scope.respond_status={"status":0,"message": ""};

$scope.login = function() {
    
    var username = $scope.user.username,
    password = $scope.user.password;
    if (username !== undefined && password !== undefined) {
        UserAuthFactory.login(username, password).then(function successCallback(response){
            var data=response.data;
            AuthenticationFactory.isLogged = true;
            AuthenticationFactory.user = data.user.username;
            AuthenticationFactory.userRole = data.user.role;
            $window.sessionStorage.token = data.token;
            $window.sessionStorage.user = data.user.username; // to fetch the user details on refresh
            $window.sessionStorage.userRole = data.user.role; // to fetch the user details on refresh
            $location.path("/");
        }, function errorCallback(status){
            $scope.respond_status=status;
        });
    } else {
            $scope.respond_status={"status":401,"message": "Oops something went wrong!"};;
        }
    };
}]);