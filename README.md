
# 🚀 Full Stack Chat App

![GitHub Repo stars](https://img.shields.io/github/stars/SumanBasnet07/Full-Stack-Chat-App?style=social)  
![GitHub issues](https://img.shields.io/github/issues/SumanBasnet07/Full-Stack-Chat-App)  
![GitHub license](https://img.shields.io/github/license/SumanBasnet07/Full-Stack-Chat-App)  

💬 **Real-time messaging magic in your browser!** A modern chat application built with MERN stack and Socket.io that brings conversations to life ✨

## 🌐 Live Demo
**[Experience the chat magic!](https://chat-app-x0zi.onrender.com/)** 

## ✨ Features
- 🔐 **User Authentication:** Secure signup/login with JWT tokens
- ⚡ **Real-time Messaging:** Instant message delivery with Socket.io
- 💚 **Online Status:** See who's active in real-time
- 📱 **Responsive Design:** Beautiful on any device
- 🔄 **Message History:** Never lose your conversations
- ☁️ **Cloud Ready:** Deployed on Render + MongoDB Atlas

## ⚙️ Tech Stack
| Frontend        | Backend         | Realtime        | Database       | Styling      |
|-----------------|-----------------|-----------------|----------------|--------------|
| React (Vite)    | Node.js (Express) | Socket.io       | MongoDB (Atlas) | Tailwind CSS |

## 🚀 Getting Started
### 📋 Prerequisites
- Node.js v16+
- npm or yarn
- MongoDB Atlas account

### 🛠️ Installation
1. **Clone the repository:**
```bash
git clone https://github.com/SumanBasnet07/Full-Stack-Chat-App.git
cd Full-Stack-Chat-App
```

2. **Set up Backend:**
```bash
cd backend
npm install
```

3. **Set up Frontend:**
```bash
cd ../frontend
npm install
```

4. **Environment Setup:**
Create `.env` file in `/backend` with:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

## 🖥️ Running the App
1. **Start Backend:**
```bash
cd backend
npm run dev
```

2. **Start Frontend (in new terminal):**
```bash
cd frontend
npm run dev
```

3. **Access the app:**
Visit `http://localhost:3000` in your browser

## 🚢 Deployment
1. **Build frontend:**
```bash
cd frontend
npm run build
```

2. **Serve static files:**
The backend is already configured to serve the frontend build

3. **Push to cloud provider:**
Deploy to Render/Heroku/Vercel

4. **Set environment variables:**
Configure in your cloud provider's dashboard:
- `PORT=3000`
- `MONGO_URI=Your MongoDB URI`
- `JWT_SECRET=JWT Secret Key`

## 🤝 Contributing
1. **Fork** the repository  
2. Create your branch: `git checkout -b feature/amazing-feature`  
3. **Commit** your changes: `git commit -m 'Add amazing feature'`  
4. **Push** to the branch: `git push origin feature/amazing-feature`  
5. Open a **Pull Request**

## 📄 License
Distributed under the MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements
- React for component-based architecture
- Express.js for backend framework
- MongoDB Atlas for cloud database
- Socket.io for real-time communication
- Tailwind CSS for modern styling

Made with ❤️ by Suman Basnet  
🔗 [GitHub Profile](https://github.com/SumanBasnet07)

