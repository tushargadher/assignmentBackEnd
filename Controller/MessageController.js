const Message = require("../Models/MessageModel");

//send message
const sendMessage = async (req, res) => {
  const { senderId, senderName, content } = req.body;
  if (!value) {
    return res.status(400).send("Please Enter Message");
  }
  var newMessage = {
    senderId,
    senderName,
    content,
  };
  try {
    var message = await Message.create(newMessage);
    if (message) {
      res.json(message);
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//get all message
const getAllMessage = async (req, res) => {
  try {
    var messages = await Message.find({});
    res.json(messages);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
module.exports = { sendMessage, getAllMessage };
