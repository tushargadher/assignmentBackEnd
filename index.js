const express = require("express");
const connectToMongo = require("./dbConnect");
const cors = require("cors");
const app = express();
const port = 5000;
const MessageRoutes = require("./Routes/MessageRoutes");
const UserRoutes = require("./Routes/UserRoutes");
const FrontEnd = "http://localhost:5173/";

connectToMongo();
app.use(cors());
app.use(express.json());
app.use("/test", (req, res) => {
  res.send("API Working");
});

app.use("/api/message", MessageRoutes);
app.use("/api/user", UserRoutes);

const server = app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});

const io = require("socket.io")(server, {
  pingTimeout: 60000,
  cors: {
    origin: { FrontEnd },
  },
});

const users = {}; //list of user in chat
io.on("connection", (socket) => {
  console.log("connection to socket.io");

  socket.on("new-user-joined", (name) => {
    console.log(`New User ${name} joined`);
    users[socket.id] = name;
    //above line store user in users array like { CJJjgbx8EY5GcyccAAAG: 'name of user' }

    //notify all other user that new user is joined chat
    socket.broadcast.emit("user-joined", name);
  });

  //when user send chat
  socket.on("send", (message) => {
    //sending message to all connnected user
    socket.broadcast.emit("receive", {
      message: message,
      name: users[socket.id],
    });
  });
});

// emit -> is used to trigger an event ·
// on ->is used to add a callback function that's going to be executed when the event is triggered.
