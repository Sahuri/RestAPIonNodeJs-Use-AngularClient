
var appProperties=
  {
    "jwtProperty":{
    "key":"super.super.secret.shhh",
    "expireday":1
  },
  "ldapProperty":{
    "server":"development",
    "onStatus":true,
    "config":{
        "url": "ldap://dev.corp.btpn.co.id",
        "baseDN": "dc=dev,dc=corp,dc=btpn,dc=co,dc=id",
        "username": "ldap.svc@development",
        "password": "l3tm3n1n"
      }
  }

};
module.exports = appProperties;