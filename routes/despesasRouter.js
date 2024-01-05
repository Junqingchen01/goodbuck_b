const express = require('express');
const router = express.Router();
const despesasController = require('../controllers/despesasController');

router.get('/:id', despesasController.GetUserDespesas);
router.post('/:id', despesasController.createDespesa);

router.get('/:id/:idDespesa', despesasController.getDespesaById );
router.delete('/:id/:idDespesa', despesasController.deleteDespesaById);


module.exports = router;