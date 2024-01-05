const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');

router.post('/', perfilController.login);
router.get('/', perfilController.getAllUsers);
router.get('/:id', perfilController.getUserById);
router.post('/register', perfilController.register);

router.put('/:id', perfilController.updateUser);
router.delete('/:id', perfilController.deleteUser);

router.post('/:id/Premiun', perfilController.BuyPremiun);
router.get('/:id/Premiun', perfilController.getInfoPremiun);
module.exports = router;
