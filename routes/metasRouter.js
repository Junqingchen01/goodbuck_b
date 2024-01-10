const express = require('express');
const router = express.Router();
const metasController = require('../controllers/metasController');
const authenticateToken = require('../utilities/utilities');


router.get('/',authenticateToken.validateToken, metasController.getAllMetas);
router.get('/:Metaid',authenticateToken.validateToken, metasController.getMetaByID);

router.post('/',authenticateToken.validateToken, metasController.createMeta);

router.put('/:Metaid',authenticateToken.validateToken, metasController.updateMeta);

router.delete('/:Metaid',authenticateToken.validateToken, metasController.deleteMeta);



module.exports = router;