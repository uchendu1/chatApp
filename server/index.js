const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use(cors());

io.on("connection", (socket) => {
  console.log("connection made successfully");
  socket.on("message", (payload) => {
    console.log("message received on server: ", payload);
    io.emit("message", payload);
  });
});

server.listen(7000, () => {
  console.log(`server is running on port 7000......`);
});
