myApp.factory('AuthenticationFactory', function($window) {
    var auth = {
        isLogged: false,
        check: function() {
            if ($window.sessionStorage.token && $window.sessionStorage.role) {
                this.isLogged = true;
            } else {
                this.isLogged = false;
            }
        }
    }
    return auth;
    }
);
    
myApp.factory('UserAuthFactory', function($window, $location, $http, AuthenticationFactory) {
    return {
        login: function(userid, password) {
            var data={
                userid: userid,
                password: password
                };
            
            var config= {  
                method: 'POST',  
                url: 'http://localhost:3000/login',   /*You URL to post*/
                data: data   /*You data object/class to post*/
            };
            return $http(config);
        }
        ,logout: function() {
            if (AuthenticationFactory.isLogged) {
                AuthenticationFactory.isLogged = false;
                //delete AuthenticationFactory.user;
                delete AuthenticationFactory.userRole;
                delete $window.sessionStorage.token;
                //delete $window.sessionStorage.user;
                delete $window.sessionStorage.userRole;
                $location.path("/login");
            }
        }
    }
});

myApp.factory('TokenInterceptor', function($q, $window) {
return {
        request: function(config) {
            config.headers = config.headers || {};
            if ($window.sessionStorage.token) {
                config.headers['X-Access-Token'] = $window.sessionStorage.token;
                //config.headers['X-Key'] = $window.sessionStorage.user;
                config.headers['Content-Type'] = "application/json";
            }
            return config || $q.when(config);
        }
        ,response: function(response) {
            return response || $q.when(response);
        }
    };
});