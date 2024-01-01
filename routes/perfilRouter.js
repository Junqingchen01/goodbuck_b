const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');

router.post('/', perfilController.login);
router.get('/', perfilController.getAllUsers);
router.post('/register', perfilController.register);


module.exports = router;
