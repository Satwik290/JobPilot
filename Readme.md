# JobPilot — AI-Powered Job Tracking Platform

JobPilot is a full-stack web application that helps users:

✅ Track their job applications



✅ Manage application status (Applied, Interview, Offer, Rejected)



✅ Upload and analyze resumes using AI



✅ Get ATS scores and improvement suggestions



✅ View job-hunting analytics in a dashboard

It is built as a production-style SaaS product, not just a college project.

🔹 Key Features

🔐 Authentication

Secure Login & Register

JWT-based authentication using HTTP-only cookies

Protected routes

📋 Job Management

Add, edit, delete job applications

Track status with Kanban/Table view

Search, filter, and sort jobs

📄 Resume System

Upload PDF resumes

Cloud storage (Cloudinary/S3)

Preview and replace resumes


🤖 AI Resume Analyzer

Extracts text from resumes

Uses AI API for ATS analysis

Provides:

ATS score

Skill gaps

Missing keywords

Improvement tips

📊 Analytics Dashboard

Monthly job applications

Interview success rate

Rejection rate

Performance trends

🚀 Deployment

Frontend on Vercel

Backend on Render

Database on MongoDB Atlas

CI/CD with GitHub Actions

🔹 Tech Stack

Frontend

Next.js (React)

Tailwind CSS

Recharts

Axios

Backend

Node.js

Express

TypeScript

JWT Authentication

Database & Storage

MongoDB + Mongoose

Cloudinary / AWS S3

AI & Tools

OpenAI / Gemini API

pdf-parse

Docker

Swagger

🔹 System Workflow

User logs in

JWT cookie authenticates requests

User manages job data

Resume is uploaded to cloud

AI analyzes resume

Results stored in DB

Dashboard shows insights

🔹 Why This Project is Valuable

✔ Demonstrates full-stack skills



✔ Shows real-world architecture



✔ Includes AI integration



✔ Covers authentication & security



✔ Shows deployment experience



✔ Interview-friendly discussion topics

This project reflects industry-level MERN development practices.

complete system flow: User → React UI

     → Auth Cookie

     → API Gateway

     → Middleware

     → Controller

     → Service

     → MongoDB

     → AI API

     → Response

🗺️ PROJECT ROADMAP (8 Weeks – 2026 Level)

🧩 Tech Stack (Final)



Frontend → React / Next.js + TailwindBackend → Node + Express + TypeScriptDB → MongoDB + MongooseAuth → JWT + HTTP-only CookiesAI → OpenAI / Gemini APIUpload → Cloudinary / S3Charts → RechartsDeploy → Vercel + Render

✅ PHASE 1: Planning + Design (Week 1)

🎯 Goal: Know exactly what you’re building

1️⃣ Features List



✔ User Auth (Login/Register)

✔ Job CRUD (Add/Edit/Delete)

✔ Status Tracking (Kanban)

✔ Resume Upload

✔ AI Resume Analysis

✔ Dashboard Analytics

✔ Email Reminders (Later)

2️⃣ Pages



/login

/register

/dashboard

/jobs

/resume

/analytics

/profile

3️⃣ DB Schema (Draft)



User

- name

- email

- password

- roleJob

- company

- position

- status

- appliedDate

- userIdResume

- fileUrl

- atsScore

- feedback

- userId

👉 Do this first → saves 50% confusion later.

✅ PHASE 2: Backend Foundation (Week 2)

🎯 Goal: Solid API + Auth

Setup



✔ Express + TS

✔ MongoDB

✔ Env config

✔ Folder structure

✔ ESLint + Prettier

Implement



POST /auth/register

POST /auth/login

POST /auth/logout

GET /auth/me

Add



✔ JWT Cookies

✔ Rate Limiter

✔ Helmet

✔ Morgan

✔ Error Handler

👉 After this phase → backend is “real-world ready”.

✅ PHASE 3: Job Management System (Week 3)

🎯 Goal: Core Product Working

APIs



POST /jobs

GET /jobs

PUT /jobs/:id

DELETE /jobs/:id

Features



✔ Status: Applied / Interview / Offer / Reject

✔ Search

✔ Filter

✔ Pagination

✔ Sort by date

Bonus



✔ Soft Delete

✔ Archive Jobs

👉 This is your main CRUD showcase 💪

✅ PHASE 4: Frontend Dashboard (Week 4)

🎯 Goal: Professional UI

Build Pages



✔ Auth UI

✔ Job Board (Table + Kanban)

✔ Add Job Modal

✔ Profile Page

Add



✔ Axios Interceptor

✔ Protected Routes

✔ Toast Notifications

✔ Loading Skeletons

UI Stack



TailwindShadCN (optional)

Framer Motion (optional)

👉 Recruiters judge you here first 👀

✅ PHASE 5: Resume Upload System (Week 5)

🎯 Goal: File Handling + Storage

Backend



✔ Multer

✔ Cloudinary/S3

✔ PDF Validation

✔ Size Limit

API



POST /resume/uploadGET /resume

Frontend



✔ Drag & Drop

✔ Preview

✔ Replace Resume

👉 Shows backend + infra skill 🔥

✅ PHASE 6: AI Resume Analyzer (Week 6) ⭐

🎯 Goal: Your “WOW” Feature

Flow



Upload Resume

↓

Extract Text (pdf-parse)

↓

Send to AI API

↓Get Feedback

↓

Store Result

AI Prompt (Example)



Analyze this resume for ATS.

Give score out of 100.

Suggest improvements.

Output



✔ ATS Score

✔ Skill Gaps

✔ Keyword Missing

✔ Suggestions

👉 This makes your project 2026-ready 🤖

✅ PHASE 7: Analytics + Performance (Week 7)

🎯 Goal: Data + Scaling

Dashboard



✔ Jobs per month

✔ Success ratio

✔ Interview rate

✔ Rejection rate

Add



✔ Redis Cache (optional)

✔ DB Indexing

✔ API Caching

Charts



Recharts

Chart.js

👉 Shows system design thinking 📊

✅ PHASE 8: Deployment + Polish (Week 8)

🎯 Goal: Production Ready

Deploy



Frontend → Vercel

Backend → Render/Fly

DB → MongoDB Atlas

Add



✔ Docker

✔ CI/CD (GitHub Actions)

✔ Swagger Docs

✔ README

✔ Screenshots

Domain (Optional)



jobpilot.dev 😎

👉 This is where it becomes “portfolio grade”.

🔁 COMPLETE SYSTEM FLOW



User → React UI → Auth Cookie

→ API Gateway

→ Middleware

→ Controller

→ Service

→ MongoDB

→ AI API

→ Response

