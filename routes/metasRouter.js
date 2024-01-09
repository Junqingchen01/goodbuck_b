const express = require('express');
const router = express.Router();
const metasController = require('../controllers/metasController');
const authenticateToken = require('../utilities/utilities');


router.get('/:id',authenticateToken.validateToken, metasController.getAllMetas);
router.get('/:id/:Metaid',authenticateToken.validateToken, metasController.getMetaByID);

router.post('/:id',authenticateToken.validateToken, metasController.createMeta);

router.put('/:id/:Metaid',authenticateToken.validateToken, metasController.updateMeta);

router.delete('/:id/:Metaid',authenticateToken.validateToken, metasController.deleteMeta);



module.exports = router;