# Deployment Guide

This guide explains how to deploy the **DomainDetector** application.

## Prerequisites
- A [GitHub](https://github.com/) account.
- A [Render](https://render.com/) account (for Backend).
- A [Vercel](https://vercel.com/) account (for Frontend).

---

## 1. Push Code to GitHub
Ensure all your latest changes are committed and pushed to a GitHub repository.

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

---

## 2. Deploy Backend (Render)
The backend runs the Node.js server with the RAG model.

1.  Log in to **Render**.
2.  Click **New +** -> **Web Service**.
3.  Connect your GitHub repository.
4.  **Settings**:
    - **Name**: `domain-detector-api` (or similar)
    - **Runtime**: `Node`
    - **Build Command**: `npm install`
    - **Start Command**: `node server/index.js`
5.  **Environment Variables** (Scroll down to "Advanced"):
    - Key: `GROQ_API_KEY`
    - Value: `(Your actual Groq API Key from .env)`
    - Key: `NODE_VERSION`
    - Value: `20` (or `22`)
6.  Click **Create Web Service**.
7.  Wait for the deployment to finish. **Copy the URL** (e.g., `https://domain-detector-api.onrender.com`).

---

## 3. Deploy Frontend (Vercel)
The frontend is the React application.

1.  Log in to **Vercel**.
2.  Click **Add New...** -> **Project**.
3.  Import your GitHub repository.
4.  **Settings**:
    - **Framework Preset**: `Vite` (Should detect automatically).
    - **Build Command**: `vite build`
    - **Output Directory**: `dist`
5.  **Environment Variables**:
    - Key: `VITE_API_URL`
    - Value: `(The Render URL you copied above)/chat` (e.g., `https://domain-detector-api.onrender.com/chat`)
6.  Click **Deploy**.

## Verification
1.  Open your Vercel URL.
2.  Click the chat bubble.
3.  Send a message. If the bot replies, everything is working!
