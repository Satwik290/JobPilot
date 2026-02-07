server/
├── src/
│   ├── config/
│   │   ├── db.ts             # MongoDB Connection logic
│   │   └── env.ts            # Environment variables (Validated with Zod)
│   ├── modules/              # FEATURE-BASED MODULES
│   │   ├── auth/
│   │   │   ├── auth.controller.ts
│   │   │   ├── auth.service.ts
│   │   │   ├── auth.routes.ts
│   │   │   └── auth.schema.ts # Zod schemas for login/register
│   │   ├── jobs/
│   │   │   ├── job.model.ts   # Mongoose Schema
│   │   │   ├── job.controller.ts
│   │   │   ├── job.service.ts
│   │   │   └── job.routes.ts
│   │   ├── resume/
│   │   │   ├── resume.model.ts
│   │   │   ├── resume.controller.ts
│   │   │   ├── ai.service.ts  # Logic for OpenAI/Gemini integration
│   │   │   └── resume.routes.ts
│   │   └── users/
│   │       ├── user.model.ts
│   │       └── user.service.ts
│   ├── middlewares/
│   │   ├── auth.middleware.ts # Protects routes (checks JWT)
│   │   ├── error.middleware.ts # Global catch-all for errors
│   │   ├── validate.middleware.ts # Zod middleware to validate body/params
│   │   └── rateLimiter.ts
│   ├── utils/
│   │   ├── jwt.ts            # Token signing/verification
│   │   ├── logger.ts         # Winston/Pino for clean logs
│   │   └── cloudinary.ts     # Upload logic for resumes
│   ├── types/                # Global Express/User type overrides
│   ├── app.ts                # App initialization & global middleware
│   └── server.ts             # Entry point (App.listen)
└── package.json


client/
├── src/
│   ├── api/                  # Axios instances & API service calls
│   │   ├── axios.ts          # Base config + Interceptors
│   │   └── auth.service.ts   # Auth-specific endpoints
│   ├── components/
│   │   ├── ui/               # Shadcn / Base components (Button, Input)
│   │   ├── charts/           # Recharts components
│   │   ├── layout/           # Sidebar, Navbar, Footer
│   │   ├── forms/            # Reusable form logic
│   │   └── shared/           # Loading indicators, Modals
│   ├── hooks/                # useAuth, useJobs (TanStack Query hooks)
│   ├── pages/                # VIEW COMPONENTS
│   │   ├── auth/             # Login.tsx, Register.tsx
│   │   ├── dashboard/        # Main overview page
│   │   ├── jobs/             # Kanban board / Job listing
│   │   ├── resume/           # Upload & AI Analysis page
│   │   └── analytics/        # Performance charts
│   ├── routes/
│   │   ├── AppRoutes.tsx     # Main Route definitions
│   │   └── PrivateRoute.tsx  # Auth guard component
│   ├── store/                # Zustand (Global state: user, theme)
│   ├── types/                # Shared TS Interfaces
│   ├── utils/                # Helper functions (date formatting, etc.)
│   ├── App.tsx               # Providers (QueryClient, Auth, Router)
│   └── main.tsx              # React Entry point
├── .env
├── tailwind.config.ts
└── package.json