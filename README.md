💬 Full Stack Chat App

A real-time full stack chat application built with the MERN stack and Socket.IO.

🌐 Live Demo

🔗 chat-app-x0zi.onrender.com

✨ Features

🔐 User Authentication (Signup, Login, Logout)

🢑 View All Users & Real-time Online Status

📩 Send & Receive Messages Instantly (Socket.IO)

🕒 Message timestamps (e.g., "5 mins ago")

🌙 Responsive UI with Tailwind CSS

💻 Deployed on Render (single service)

🛠️ Tech Stack

Frontend:

React + Vite

Zustand (state management)

Axios

Tailwind CSS

Socket.IO Client

Backend:

Node.js + Express

MongoDB + Mongoose

JWT Auth via Cookies

Socket.IO Server

📁 Project Structure

Full-Stack-Chat-App/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── sockets/
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.js
├── .env
├── package.json
└── README.md

📦 Installation (Local)

Clone the Repo

git clone https://github.com/SumanBasnet07/Full-Stack-Chat-App.git
cd Full-Stack-Chat-App

Install root/backend dependencies

npm install

Set up environment variables

Create a .env file in root:

PORT=3000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret

Run the server

npm run dev

Run the frontend

cd frontend
npm install
npm run dev

⚙️ Deployment (Render - Single Service)

Push your code to GitHub.

Create a new Web Service on Render.

Set:

Build Command: npm install && npm run build

Start Command: npm start

Add these environment variables:

PORT

MONGO_URI

JWT_SECRET

VITE_BACKEND_URL=https://your-service-name.onrender.com

📷 Screenshots

You can add screenshots or gifs here of the chat interface, login page, etc.

🙌 Author

👨‍💻 Suman BasnetGitHub ・ LinkedIn

📄 License

MIT

