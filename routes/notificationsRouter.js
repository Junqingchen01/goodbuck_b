const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notificationsController');



router.get('/', notificationsController.getAllNotification);
router.get('/:id', notificationsController.getNotificationById);
router.post('/', notificationsController.createNotification);
router.delete('/', notificationsController.deleteAllNotification);


module.exports = router;