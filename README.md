# Sanuji Weerasinghe — Portfolio

A modern, responsive, recruiter-focused portfolio website built with the MERN stack (MongoDB, Express, React, Node.js).

## Live sections

Hero · About · Skills · Projects (filterable) · Research · Experience · Achievements · GitHub stats · Contact (with MongoDB-backed form)

## Tech stack

**Client**
- React 19 + Vite
- Tailwind CSS v4 (dark mode, glassmorphism, custom design tokens)
- Framer Motion (scroll-reveal animations, typing effect)
- React Router
- React Icons, Axios, React Helmet Async (SEO)

**Server**
- Node.js + Express
- MongoDB + Mongoose
- Nodemailer (optional email notifications)
- express-validator, express-rate-limit, helmet, cors, morgan

## Folder structure

```
portfolio/
  client/
    public/                # static assets (favicon, resume.pdf)
    src/
      components/
        layout/            # Navbar, Footer, ScrollProgress, BackToTop, ThemeToggle, CustomCursor, LoadingScreen
        sections/           # Hero, About, Skills, Projects, Research, Experience, Achievements, GithubStats, Contact
        ui/                 # SectionHeading, ProjectCard, SkillCard, TimelineItem, Badge
      context/ThemeContext.jsx
      hooks/                # useScrollReveal, useTypingEffect
      data/profile.js       # all site content (single source of truth)
      pages/                # Home, NotFound
  server/
    src/
      config/db.js
      models/Message.js
      routes/contactRoutes.js
      controllers/contactController.js
      middleware/           # errorHandler, rateLimiter
      index.js
```

## Getting started

### Prerequisites
- Node.js 20.19+ or 22.12+ (Vite 8 requirement)
- npm
- A MongoDB connection string (local MongoDB or MongoDB Atlas)

### 1. Client setup

```bash
cd client
npm install
cp .env.example .env   # set VITE_API_URL if the API runs on a different host/port
npm run dev
```

The site runs at `http://localhost:5173`.

### 2. Server setup

```bash
cd server
npm install
cp .env.example .env   # fill in MONGO_URI and other variables
npm run dev
```

The API runs at `http://localhost:5000`.

## Environment variables

### `client/.env`
| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Base URL of the backend API (e.g. `http://localhost:5000`) |

### `server/.env`
| Variable | Description |
| --- | --- |
| `PORT` | Port the Express server listens on (default `5000`) |
| `MONGO_URI` | MongoDB connection string |
| `CLIENT_URL` | Allowed CORS origin (the deployed client URL) |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | Optional SMTP credentials for Nodemailer notifications |
| `NOTIFY_EMAIL` | Email address to receive contact-form notifications |

If `SMTP_*` variables are left blank, contact messages are still saved to MongoDB — email notifications are simply skipped.

## MongoDB Atlas setup

1. Create a free cluster at [mongodb.com/atlas](https://www.mongodb.com/atlas).
2. Under **Database Access**, create a database user with a strong password.
3. Under **Network Access**, allow access from your deployment platform (or `0.0.0.0/0` for simplicity during development).
4. Copy the connection string from **Connect → Drivers**, replace `<password>` with your user's password, and set it as `MONGO_URI` in `server/.env`.

## Deployment

### Client → Vercel

1. Push the repo to GitHub.
2. In Vercel, import the project and set the **Root Directory** to `client`.
3. Build command: `npm run build` · Output directory: `dist`.
4. Add environment variable `VITE_API_URL` pointing to your deployed server URL.

### Server → Render

1. In Render, create a new **Web Service** from the repo with **Root Directory** set to `server`.
2. Build command: `npm install` · Start command: `npm start`.
3. Add the environment variables from `server/.env.example` (`MONGO_URI`, `CLIENT_URL`, etc.).
4. Set `CLIENT_URL` to your deployed Vercel URL so CORS allows requests from the live site.

