# BlinkChat

Lightweight real-time chat application (fullstack) — built with Node/Express, MongoDB, Socket.io and a Vite + React frontend.

## Features

- Real-time messaging using Socket.io
- User auth (JWT)
- MongoDB persistence for users & messages
- Cloudinary image uploads (optional)
- Responsive React + Tailwind frontend

## Repo layout

- backend/ — Express server, controllers, models, routes
- frontend/ — Vite + React app, components, pages, Tailwind
- README.md — this file

## Prerequisites

- Node.js 18+ and npm
- MongoDB (Atlas connection string or local instance)
- Cloudinary account (optional, for uploads)
- (Windows) PowerShell / CMD or WSL

## Quickstart (development)

1. Clone the repo

   - Open PowerShell:

   ```powershell
   cd D:\DEV\PROJECT
   git clone <REPO_URL> BlinkChat
   cd BlinkChat
   ```
2. Backend

   - Install dependencies and create `.env`:

   ```powershell
   cd backend
   npm install
   ```

   - Create `backend/.env` (example):

   ```properties
   PORT=5001
   MONGODB_URI=mongodb+srv://<user>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_here
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

   - Start backend:

   ```powershell
   npm run dev
   ```

   - Server entry: `backend/src/index.js`
3. Frontend

   - In a new terminal:

   ```powershell
   cd D:\DEV\PROJECT\BlinkChat\frontend
   npm install
   ```

   - Create frontend environment (if used) — example placed in `frontend/src/.env` or `frontend/.env` depending on your app:

   ```properties
   VITE_API_BASE_URL=http://localhost:5001/api
   ```

   - Start frontend:

   ```powershell
   npm run dev
   ```

   - App served at: `http://localhost:5173`

## Build / Production

- Build frontend:

```powershell
cd frontend
npm run build
```

- Serve the `dist/` from any static host or configure your backend to serve the production files.
- Ensure `FRONTEND_URL` (backend .env) points to the production frontend.

## Common issues & troubleshooting

- "Cannot find package 'express'": run `npm install` inside `backend`.
- Mongoose `uri` undefined: make sure `backend/.env` contains `MONGODB_URI` and `dotenv` is loaded (backend loads `.env` from its folder). Add debug:
  ```js
  console.log('MONGODB_URI set?', !!process.env.MONGODB_URI);
  ```
- Mongoose deprecation warnings about `useNewUrlParser` / `useUnifiedTopology`: safe to remove those options; use `mongoose.connect(uri)` with current mongoose.
- Vite: if `vite` not recognized, ensure `frontend/node_modules/.bin/vite` exists or run `npm install` in `frontend`.
- Missing frontend dependencies (packages imported but not installed): run `npm install <package>` in `frontend`.
- Socket issues: ensure backend is running and CORS/socket URL matches frontend.

## Environment security

- Never commit `.env` with secrets to git. Add `.env` to `.gitignore`.
- Rotate any credentials you accidentally pushed.

## Development tips

- Start backend first, then frontend.
- Use browser devtools network tab to inspect socket requests and API calls.
- For production, enable HTTPS and secure JWT handling.

## Contributing

- Fork, create feature branch, open PR.
- Keep changes small and test locally.
