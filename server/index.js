const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', socket => { 
    console.log()
})

server.listen(6000, () => {

    console.log(`server is running on port 6000......`)
});

