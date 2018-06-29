var jwt = require('jwt-simple');
var auth = {
    login: function(req, res) {
        var username = req.body.username || '';
        var password = req.body.password || '';
        if (username == '' || password == '') {
            res.status(401);
            res.json({
            "status": 401,"message": "Invalid credentials"
            });
        return;
        }
        // Fire a query to your DB and check if the credentials are valid
        var dbUserObj = auth.validate(username, password);
        if (!dbUserObj) { // If authentication fails, we send a 401 back
            res.status(401);
            res.json({
            "status": 401,"message": "Invalid credentials"
            });
            return;
        }
        if (dbUserObj) {
            // If authentication is success, we will generate a token
            // and dispatch it to the client
            res.json(genToken(dbUserObj));
        }
    }
    ,validate: function(username, password) {
        var dbUserObj =null;
        if (username=='sahuri.dev' && password=='12345')
        {
            dbUserObj={ // spoofing a userobject from the DB. 
                name: 'sahuri',
                role: 'admin',
                username: username
            };    
        }
        return dbUserObj;
    }
    ,validateUser: function(username) {
        var dbUserObj =null;
        if (username=='sahuri.dev')
        {
            dbUserObj={ // spoofing a userobject from the DB. 
                name: 'sahuri',
                role: 'admin',
                username: username
            };    
        }
            return dbUserObj;
        }
}

// private method
function genToken(user) {
    var expires = expiresIn(1); // 7 days
    var token = jwt.encode({exp: expires}
        , require('../config/secret')());
    return {
        token: token,
        expires: expires,
        user: user
    };
}

function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;