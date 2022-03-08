'use strict';
// central hub for all other routes
const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;