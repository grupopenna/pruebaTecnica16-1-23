const express = require('express');
const router = express.Router();

const getUsers = require('../../handlers/users/getUsers')

router.get('/', getUsers);


module.exports = router;