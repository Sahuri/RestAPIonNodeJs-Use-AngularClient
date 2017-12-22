var ActiveDirectory = require('activedirectory');

var ldap = {
    authenticate: function(req, res) {
        var ad = new ActiveDirectory(config);
        var user=req.body;
        var username=user.username+'@'+server;
        console.log(username);
        ad.authenticate(username,user.password, function(err, auth) {
            if (auth) {
                res.json({message:'Authenticated!',status:1});
            }
            else {
                res.json({message:'Authentication failed!, '+JSON.stringify(err),status:0});
            }
          });  
    }
    , 
}

var server='development'
var config = { url: 'ldap://dev.corp.btpn.co.id',
baseDN: 'dc=dev,dc=corp,dc=btpn,dc=co,dc=id',
username: 'ldap.svc'+'@'+server,
password: 'l3tm3n1n' };

module.exports = ldap;