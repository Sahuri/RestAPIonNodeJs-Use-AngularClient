myApp.controller('LoginCtrl', ['$scope', '$window', '$location', 'UserAuthFactory', 'AuthenticationFactory',
function($scope, $window, $location, UserAuthFactory, AuthenticationFactory) {

$scope.user = {
    userid: '',
    password: ''
};

$scope.respond_status={"status":0,"message": ""};

$scope.login = function() {
    
    var userid = $scope.user.userid,
    password = $scope.user.password;
    if (userid !== undefined && password !== undefined) {
        UserAuthFactory.login(userid, password).then(function successCallback(response){
            var data=response.data;
            AuthenticationFactory.isLogged = true;
            AuthenticationFactory.role = data.role;
            $window.sessionStorage.token = data.token;
            $window.sessionStorage.role = data.role; 
            $location.path("/");
        }, function errorCallback(status){
            $scope.respond_status=status;
        });
    } else {
            $scope.respond_status={"status":401,"message": "Oops something went wrong!"};;
        }
    };
}]);