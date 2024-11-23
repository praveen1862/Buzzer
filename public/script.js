const socket = io(); // Connect to the server

const buzzer = document.getElementById('buzzer');
const message = document.getElementById('message');

// Prompt the user for their name
let userName = prompt("Enter your name:");
if (!userName) userName = "Anonymous"; // Default name

// Handle the buzzer click event
buzzer.addEventListener('click', () => {
    socket.emit('buzz', { name: userName });
});

// Handle the 'lock' event from the server
socket.on('lock', (data) => {
    buzzer.disabled = true; // Disable the button
    message.textContent = `${data.name} buzzed first!`;
});

// Handle the 'reset' event from the server
socket.on('reset', () => {
    buzzer.disabled = false; // Enable the button
    message.textContent = ""; // Clear the message
});
