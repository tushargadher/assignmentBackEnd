const moongose = require("mongoose");
// QzmAWJZvLeFJAyVD
const mongoURL = "mongodb+srv://tushargadher123:QzmAWJZvLeFJAyVD@cluster0.nah4s7h.mongodb.net/?retryWrites=true&w=majority";
const connectToMongo = () => {
  moongose.connect(mongoURL).then(() => {
    console.log("Connected to MongoDB Successfully..");
  });
};
module.exports = connectToMongo;
