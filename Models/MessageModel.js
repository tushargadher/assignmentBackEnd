const mongoose = require("mongoose");
const MessageModel = mongoose.Schema(
  {
    user: {
      type: String,
      trim: true,
      require: true,
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
