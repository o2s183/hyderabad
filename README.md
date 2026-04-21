# NutriMind AI 🥗🧠

NutriMind AI is a full-stack, AI-powered Smart Health & Nutrition Web Application. It helps users track food, health habits, cravings, and provides AI-based personalized recommendations.

## Tech Stack
- **Frontend:** Next.js (App Router), Tailwind CSS, ShadCN UI, Framer Motion, Recharts
- **Backend:** Next.js API Routes, NextAuth.js
- **Database:** MongoDB (Mongoose ORM)
- **AI Integration:** OpenAI API SDK (Mocked initially for UI testing)

## Folder Structure
- `src/app`: Next.js App Router pages (Dashboard, Logger, Scanner, APIs).
- `src/components/ui`: ShadCN UI reusable components.
- `src/components/layout`: Global layout components (Sidebar, Topbar).
- `src/lib`: Database models (`models.ts`), connection utility (`mongodb.ts`), and helper functions.

## Setup Instructions

### 1. Install Dependencies
Make sure you have Node.js installed.
```bash
npm install
```

### 2. Environment Variables
Rename the provided `.env.example` file to `.env.local`:
```bash
cp .env.example .env.local
```
Fill in your actual `MONGODB_URI` and API keys inside `.env.local`.

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features Included
- **Dashboard:** Modern, glassmorphism UI with Recharts for health tracking.
- **Meal Logger:** Daily check-in form to track meals, sleep, mood, and exercise.
- **AI Food Scanner:** UI to simulate uploading a photo and receiving AI nutritional breakdown.
- **Authentication Setup:** Pre-configured with NextAuth.js for Email/Password and Google OAuth.
- **Database Schemas:** Mongoose schemas ready for Users, Profiles, DailyLogs, and AIReports.
