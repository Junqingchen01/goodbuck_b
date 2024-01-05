const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

router.get('/:id/allamount', dashboardController.AllAmount);
router.get('/:id/amount', dashboardController.AllAmountByCategory);
router.get('/:id/amountbymouth', dashboardController.AllAmountByMonth);

module.exports = router;