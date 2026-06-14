# Premium Data Science Portfolio (MERN Stack)

<!-- Primary Tech Stack -->
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)

<!-- Repository Stats -->
[![GitHub Stars](https://img.shields.io/github/stars/sanujiweerasinghe/portfolio?style=flat-cache&color=gold)](https://github.com/sanujiweerasinghe/portfolio/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/sanujiweerasinghe/portfolio?style=flat-cache&color=blue)](https://github.com/sanujiweerasinghe/portfolio/network/members)
[![Repo Size](https://img.shields.io/github/repo-size/sanujiweerasinghe/portfolio?color=blueviolet)](https://github.com/sanujiweerasinghe/portfolio)
[![License](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

<!-- Social Badges -->
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://linkedin.com/in/sanuji-weerasinghe/)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:sanujiweerasinghe@gmail.com)

A professional, responsive, and recruiter-focused portfolio website for Sanuji Weerasinghe, a Data Science undergraduate. Built with the MERN stack and an Apple-inspired minimalist design.

## 🚀 Features
- **Dual Theme Support:** Meticulously designed Light and Dark modes.
- **Data Science Focus:** Dedicated Research and ML project sections.
- **Modern Animations:** Smooth transitions and scroll reveal effects using Framer Motion.
- **Glassmorphism UI:** Elegant, clean aesthetics with soft shadows.
- **Functional Contact Form:** Stores messages in MongoDB and sends email notifications.
- **Fully Responsive:** Optimized for all devices from mobile to desktop.

## 🛠️ Tech Stack
- **Frontend:** React, Vite, Tailwind CSS, Framer Motion, Lucide Icons.
- **Backend:** Node.js, Express.
- **Database:** MongoDB (Mongoose).
- **Communication:** Axios, Nodemailer.

## 📂 Project Structure
```text
client/         # React frontend
server/         # Express backend
```

## ⚙️ Setup Instructions

### 1. Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)
- Gmail account (for Nodemailer)

### 2. Backend Setup
1. Navigate to the `server` directory: `cd server`
2. Install dependencies: `npm install`
3. Create a `.env` file (refer to `.env.example`) and add your credentials:
   - `MONGODB_URI`: Your MongoDB connection string.
   - `EMAIL_USER`: Your Gmail address.
   - `EMAIL_PASS`: Your Gmail App Password.
   - `RECEIVER_EMAIL`: Where you want to receive notifications.
4. Start the server: `npm start`

### 3. Frontend Setup
1. Navigate to the `client` directory: `cd client`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## 🌍 Deployment

### Backend (Render/Railway)
1. Push your code to GitHub.
2. Connect your repository to Render/Railway.
3. Set the environment variables in the platform's dashboard.

### Frontend (Vercel/Netlify)
1. Connect the `client` directory to Vercel/Netlify.
2. Ensure the base directory is set to `client`.
3. Set the build command to `npm run build` and output directory to `dist`.
