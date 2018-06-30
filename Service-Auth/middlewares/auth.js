var jwt = require('jwt-simple');
var config=require('../config/app-properties');
var ActiveDirectory = require('activedirectory');
var auth = {
    login: function(req, res) {
        var userid = req.body.userid || '';
        var password = req.body.password || '';
        if (userid == '' || password == '') {
            res.status(401);
            res.json({
            "status": 401,"message": "Invalid credentials"
            });
        return;
        }
        // Fire a query to your DB and check if the credentials are valid
        auth.validate(userid, password,function(userLogin){
            if (!userLogin) { // If authentication fails, we send a 401 back
                res.status(401);
                res.json({
                "status": 401,"message": "Invalid credentials"
                });
                return;
            }
            if (userLogin) {
                // If authentication is success, we will generate a token
                // and dispatch it to the client
                res.json(genToken(userLogin));
            }
        });
        
    }
    ,validate: function(userid, password,fn) {
        var userLogin =null;
        if(!config.ldapProperty.onStatus){
            if (userid=='sahuri.dev' && password=='12345')
            {
                userLogin={ // spoofing a userobject from the DB. 
                    userid:userid,
                    role: 'admin'
                };
                fn(userLogin);    
            }
        }else{
        
            var checkAd=false;
            authenticateAd(userid,password,function(res){
                if(res){
                    userLogin={ // spoofing a userobject from the DB. 
                        userid:userid,
                        role: 'admin'
                    };
                }
                fn(userLogin);    
            });
        }        
    }
    ,validateUser: function(userId) {
        var userLogin =null;
        if (userId=='sahuri.dev')
        {
            userLogin={ // spoofing a userobject from the DB. 
                userid: 'sahuri.dev',
                role: 'admin',
            };    
        }
            return userLogin;
        }
}
// private method
function authenticateAd(userid,password,fn) {
    var ad = new ActiveDirectory(config.ldapProperty.config);
    try{
        ad.authenticate(userid+'@'+config.ldapProperty.server,password,function(err, auth){
            fn(auth);
        }); 
    }
    catch(err){
        console.log(err);
    }
    
} 
function genToken(userLogin) {
    var expires = expiresIn(config.jwtProperty.expireday); 
    var token = jwt.encode({exp: expires,userid: userLogin.userid},config.jwtProperty.key);
    return {
        token: token,
        role: userLogin.role
    };
}

function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}

module.exports = auth;