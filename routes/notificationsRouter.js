const express = require('express');
const router = express.Router();
const notificationsController = require('../controllers/notificationsController');

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: API endpoints for managing notifications
 */

/**
 * @swagger
 * /notifications:
 *   get:
 *     summary: Retrieve all notifications
 *     tags: [Notifications]
 *     responses:
 *       '200':
 *         description: A list of notifications
 *         content:
 *           application/json:
 *             example:
 *               message: Notifications retrieved successfully
 *               notifications: [{ id: 1, title: 'Notification 1', content: 'Content 1', date: '2024-01-10' }]
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /notifications/{id}:
 *   get:
 *     summary: Retrieve a notification by ID
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the notification
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: The requested notification
 *         content:
 *           application/json:
 *             example:
 *               message: Notification retrieved successfully
 *               notification: { id: 1, title: 'Notification 1', content: 'Content 1', date: '2024-01-10' }
 *       '404':
 *         description: Notification not found
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /notifications:
 *   post:
 *     summary: Create a new notification
 *     tags: [Notifications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             title: 'New Notification'
 *             content: 'New Content'
 *     responses:
 *       '201':
 *         description: Notification created successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Notification created successfully
 *               notification: { id: 2, title: 'New Notification', content: 'New Content', date: '2024-01-11' }
 *       '500':
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /notifications:
 *   delete:
 *     summary: Delete all notifications
 *     tags: [Notifications]
 *     responses:
 *       '200':
 *         description: Utilizador ler e limpar todos notificações
 *         content:
 *           application/json:
 *             example:
 *               message: All notifications deleted successfully
 *       '500':
 *         description: Internal Server Error
 */


router.get('/:id', notificationsController.getAllNotification);
router.get('/:id/:idnotification', notificationsController.getNotificationById);
router.post('/:id', notificationsController.createNotification);

router.delete('/:id/', notificationsController.deleteAllNotification);
router.delete('/:id/:idnotification', notificationsController.deleteNotificationById);


module.exports = router;