Buzzer Webapp 🛎️
A real-time buzzer application where multiple users can compete to buzz first. The app displays the name of the first user who clicks the buzzer and locks the button for others. It includes a reset functionality to restart the competition.

Features 🚀
Real-time communication between clients and the server.
Displays the name of the first user to click the buzzer.
Locks the buzzer for all users after the first buzz.
Reset functionality to clear the buzzer state and allow a new game.
User-friendly interface with responsive design.
Technologies Used 🛠️
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Real-time Communication: Socket.IO
Getting Started 🏁
Prerequisites
Ensure you have the following installed:

Node.js (v16+ recommended)
Installation
Clone the repository:
git clone https://github.com/your-username/buzzer-webapp.git
Navigate to the project directory:
cd buzzer-webapp
Install dependencies:
npm install
Usage
Start the server:
node server.js
Open your browser and go to:
http://localhost:3000
Folder Structure 📂
buzzer-webapp/
├── public/
│   ├── index.html        # Frontend HTML
│   ├── styles.css        # CSS for styling
│   └── script.js         # Client-side JavaScript
├── server.js             # Backend server code
├── package.json          # Node.js configuration
└── README.md             # Project documentation
How It Works 🤔
Each user enters their name upon opening the web app.
Users compete to press the "Buzz" button first.
The name of the first user to buzz is displayed, and the buzzer is locked for everyone else.
The reset functionality clears the state, allowing for a new round.
Screenshots 📸
Coming soon!

Contributing 🤝
Contributions are welcome! Feel free to:

Submit bug reports and feature requests.
Fork the repository and create a pull request.
License 📜
This project is licensed under the MIT License. See the LICENSE file for details.

