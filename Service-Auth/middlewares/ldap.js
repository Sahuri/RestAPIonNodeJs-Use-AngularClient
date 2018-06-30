var ActiveDirectory = require('activedirectory');
var config=require('../config/app-properties');

var ldap = {
    authenticate: function(userid,password) {
        var infoLdap=null;
        
        if(config.ldapProperty.onStatus){
            var ad = new ActiveDirectory(config.ldapProperty.config);
            var userid=userid+'@'+config.ldapProperty.server;
            ad.authenticate(userid,password, function(err, auth) {
                if (auth) {
                    infoLdap= {"status":1,"message":"succes"};
                }
                else {
                    infoLdap= {"status":-1,message:err};;
                }
              });
        }else{
            infoLdap= {"status":2,message:"LDAP status off in app-propeties"};
        }

        return infoLdap;
    }
}

module.exports = ldap;