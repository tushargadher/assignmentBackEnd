const mongoose = require("mongoose");
const MessageModel = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    senderName: {
      type: String,
      trim: true,
    },
    content: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Message", MessageModel);
