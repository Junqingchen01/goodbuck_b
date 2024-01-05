const { Notification } = require('../models/notification');

// create notifications
exports.createNotification = async (req, res) => {
    try {
      const { UserID, Title, Content } = req.body;
    
      const newDate = new Date();
      const newNotification = await Notification.create({
        UserID,
        Title,
        Content,
        Date: newDate,
      });
  
      res.status(201).json({ message: 'Notification created successfully', notification: newNotification });
    } catch (error) {
      console.error('Error creating notification:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

// get all notifications
exports.getAllNotification = async (req, res) => {
    try {
      const notifications = await Notification.findAll();
      res.status(200).json({ message: 'All notifications retrieved successfully', notifications });
    } catch (error) {
      console.error('Error getting all notifications:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


// get notification by id
exports.getNotificationById = async (req, res) => {
    try {
      const notificationID = req.params.id;
      const notification = await Notification.findByPk(notificationID);
  
      if (!notification) {
        return res.status(404).json({ message: 'Notification not found' });
      }
  
      res.status(200).json({ message: 'Notification retrieved successfully', notification });
    } catch (error) {
      console.error('Error getting notification by ID:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


  // delete notifications
exports.deleteAllNotification = async (req, res) => {
    try {
      await Notification.destroy({
        where: {},
        truncate: true,
      });
  
      res.status(200).json({ message: 'All notifications deleted successfully' });
    } catch (error) {
      console.error('Error deleting all notifications:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };