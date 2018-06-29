var express = require('express');
var router = express.Router();
var ldap = require('./ldap.js');
/*
* Routes that can be accessed by any one
*/
router.post('/authenticate', ldap.authenticate);

module.exports = router;