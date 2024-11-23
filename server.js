const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Create the Express app and server
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let isLocked = false; // To track if the buzzer is locked
let firstBuzzer = null;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Socket.IO connection handler
io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Handle "buzz" event
    socket.on('buzz', (data) => {
        if (!isLocked) {
            isLocked = true;
            firstBuzzer = data.name;
            io.emit('lock', { name: firstBuzzer });
        }
    });

    // Handle "reset" event
    socket.on('reset', () => {
        isLocked = false;
        firstBuzzer = null;
        io.emit('reset');
    });

    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
