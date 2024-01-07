const express = require('express');
const router = express.Router();
const metasController = require('../controllers/metasController');


router.get('/:id', metasController.getAllMetas);
router.get('/:id/:Metaid', metasController.getMetaByID);

router.post('/:id', metasController.createMeta);

router.put('/:id/:Metaid', metasController.updateMeta);

router.delete('/:id/:Metaid', metasController.deleteMeta);



module.exports = router;