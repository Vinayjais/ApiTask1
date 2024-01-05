const express = require('express');
const syncContacts = require('../controllers/syncContacts');
const common = require('../controllers/common')
const byUserId = require('../controllers/byUserId');
const router = express.Router();

router.post('/sync/contacts', syncContacts.postSyncContacts);
router.post('/common', common.postCommon)
router.post('/byuserid/:userId/:page/:size', byUserId.postContactsByUserId);


module.exports = router;