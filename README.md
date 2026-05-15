# 🚀 Career Navigator

> Your AI-powered career development companion. Get personalized career roadmaps, discover job opportunities, ace interviews, and unlock your professional potential.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub last commit](https://img.shields.io/github/last-commit/nikii2000/CAREER-NAVIGATOR01?style=flat-square)](https://github.com/nikii2000/CAREER-NAVIGATOR01/commits/master)
![JavaScript](https://img.shields.io/badge/JavaScript-95.9%25-F7DF1E?style=flat-square&logo=javascript)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-Modern-61DAFB?style=flat-square&logo=react)](https://react.dev/)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **🤖 AI-Powered Career Roadmaps** - Get personalized career development plans powered by OpenAI
- **💼 Job Search & Discovery** - Find relevant job opportunities tailored to your skills and interests
- **🎯 Interview Preparation** - Access interview questions, tips, and preparation guides
- **📊 Career Analytics** - Track your progress and skills development
- **🔐 Secure Authentication** - JWT-based authentication with MongoDB integration
- **📱 Responsive Design** - Beautiful, mobile-friendly UI with Tailwind CSS
- **⚡ Real-time Updates** - Fast, seamless user experience with Vite optimization

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| **React** | Modern UI library for interactive components |
| **Tailwind CSS** | Utility-first CSS framework for styling |
| **Vite** | Next-generation build tool for fast development |
| **React Router** | Client-side routing and navigation |
| **Axios** | HTTP client for API requests |

### Backend
| Technology | Purpose |
|-----------|---------|
| **Node.js** | JavaScript runtime |
| **Express.js** | Lightweight web framework |
| **MongoDB** | NoSQL database for data persistence |
| **Mongoose** | MongoDB object modeling |
| **JWT** | Secure authentication tokens |
| **OpenAI API** | AI-powered features and recommendations |

### Language Composition
- JavaScript: 95.9%
- Shell: 3.0%
- Other: 1.1%

---

## 📁 Project Structure

```
CAREER-NAVIGATOR01/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── styles/        # Tailwind CSS styles
│   │   ├── App.jsx        # Main App component
│   │   └── main.jsx       # Entry point
│   ├── public/            # Static assets
│   ├── index.html         # HTML template
│   └── package.json       # Frontend dependencies
│
├── server/                 # Backend Node.js application
│   ├── routes/            # API routes
│   ├── controllers/        # Request handlers
│   ├── models/            # MongoDB schemas
│   ├── middleware/        # Custom middleware
│   ├── .env               # Environment variables
│   ├── server.js          # Main server file
│   └── package.json       # Backend dependencies
│
└── README.md              # This file
```

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **npm** (v8 or higher) - Comes with Node.js
- **MongoDB** - [Community Edition](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - [Download](https://git-scm.com/)
- **OpenAI API Key** - [Get yours here](https://platform.openai.com/api-keys)

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/nikii2000/CAREER-NAVIGATOR01.git
cd CAREER-NAVIGATOR01
```

### 2. Backend Setup

```bash
cd server
npm install
```

### 3. Frontend Setup

```bash
cd ../client
npm install
```

---

## 🔑 Environment Variables

### Backend (.env in `server/` directory)

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/career-navigator
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/career-navigator

# Authentication
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# OpenAI API
OPENAI_API_KEY=your_openai_api_key_here
OPENAI_MODEL=gpt-3.5-turbo

# CORS
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env in `client/` directory)

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Career Navigator
```

---

## 🚀 Running the Application

### Development Mode

#### Terminal 1 - Start Backend Server

```bash
cd server
npm start
```

Expected output:
```
Server running on http://localhost:5000
Connected to MongoDB
```

#### Terminal 2 - Start Frontend Dev Server

```bash
cd client
npm run dev
```

Expected output:
```
Local: http://localhost:5173
```

### Access the Application

- **Frontend**: Open [http://localhost:5173](http://localhost:5173) in your browser
- **Backend API**: [http://localhost:5000](http://localhost:5000)

### Production Build

```bash
# Build frontend
cd client
npm run build

# Start backend in production
cd ../server
NODE_ENV=production npm start
```

---

## 🌐 Deployment

### Frontend Deployment (Vercel)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd client
vercel
```

👉 **Live Demo**: https://career-navigator-01.vercel.app

### Backend Deployment (Render)

1. Push your code to GitHub
2. Connect your GitHub account to [Render.com](https://render.com/)
3. Create a new Web Service
4. Set environment variables in Render dashboard
5. Deploy

---

## 📚 API Documentation

### Authentication Endpoints

```
POST   /api/auth/register     - Register a new user
POST   /api/auth/login        - Login user
POST   /api/auth/logout       - Logout user
GET    /api/auth/verify       - Verify JWT token
```

### Career Roadmap Endpoints

```
GET    /api/roadmap/:id       - Get career roadmap
POST   /api/roadmap           - Generate new roadmap
PUT    /api/roadmap/:id       - Update roadmap
DELETE /api/roadmap/:id       - Delete roadmap
```

### Job Search Endpoints

```
GET    /api/jobs              - Search jobs
GET    /api/jobs/:id          - Get job details
POST   /api/jobs/save         - Save favorite job
```

### Interview Prep Endpoints

```
GET    /api/interview/questions   - Get interview questions
POST   /api/interview/feedback    - Submit interview answers
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Code Standards

- Use consistent indentation (2 spaces)
- Follow ES6+ syntax standards
- Add comments for complex logic
- Test your changes locally before submitting

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 💬 Support & Feedback

Have questions or feedback? Feel free to:
- Open an [Issue](https://github.com/nikii2000/CAREER-NAVIGATOR01/issues)
- Start a [Discussion](https://github.com/nikii2000/CAREER-NAVIGATOR01/discussions)
- Check existing documentation

---

## 🙏 Acknowledgments

- Built with ❤️ using React, Node.js, and Express
- Powered by OpenAI API for intelligent career guidance
- Styled with Tailwind CSS for beautiful UIs

---

**Happy Career Building! 🎉**
