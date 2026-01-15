🧠 AI Insights Flow

User selects an industry during onboarding

Gemini AI generates structured career insights

Insights are saved in the database

Future users reuse cached insights (API-efficient)

🔐 Authentication Flow

Clerk handles sign-in & sign-up

On first login → user is redirected to Onboarding

After onboarding → user accesses the Dashboard

🛡️ Cost & Billing (Gemini AI)

Gemini API requires billing enabled

Free tier / credits are usually sufficient for development

AI calls are cached to minimize usage

Billing can be disabled anytime from Google Cloud Console

📌 Future Enhancements

📄 Resume analysis & scoring

🎯 Skill gap recommendations

📈 Career progression roadmap

🧪 Mock AI mode for local development

🌍 Multi-industry comparison

<img width="1875" height="1030" alt="Screenshot 2026-01-15 125703" src="https://github.com/user-attachments/assets/cb978cdb-12e3-4139-8726-7888b6d70a25" />
<img width="1899" height="911" alt="Screenshot 2026-01-15 125728" src="https://github.com/user-attachments/assets/451ab16d-16af-4d8b-8ff5-380e1a8a9a77" />


# 🚀 Talentra – AI-Powered Career Coach

Talentra is an AI-driven career guidance platform that helps users explore industries, understand job market trends, and receive personalized career insights.  
It combines **Next.js**, **Prisma**, **Clerk Authentication**, and **Google Gemini AI** to deliver intelligent, data-driven recommendations.

---

## ✨ Features

- 🔐 **Authentication with Clerk**
- 🧠 **AI-Generated Industry Insights (Gemini AI)**
- 📊 **Salary ranges, growth rate & market outlook**
- 🧩 **Personalized onboarding experience**
- 💾 **PostgreSQL database with Prisma ORM**
- ⚡ **Server Actions (Next.js App Router)**
- 🔁 **Cached AI insights to reduce API calls**
- 🎨 **Modern UI with reusable components**

---

## 🛠️ Tech Stack

| Category | Technology |
|--------|-----------|
| Frontend | Next.js 15 (App Router) |
| Backend | Next.js Server Actions |
| Authentication | Clerk |
| Database | PostgreSQL |
| ORM | Prisma |
| AI | Google Gemini 1.5 Flash |
| Styling | CSS / Component-based UI |
| Tooling | Turbopack |

---

## 📁 Project Structure
Talentra/
├── actions/ # Server actions (user, dashboard, AI logic)
├── app/
│ ├── (auth)/ # Authentication routes
│ ├── (main)/ # Main application routes
│ ├── api/ # API routes (if any)
│ ├── lib/ # App-level utilities
│ ├── layout.js # Root layout
│ ├── page.js # Home page
│ └── globals.css # Global styles
├── components/
│ ├── ui/ # Reusable UI components
│ ├── header.jsx
│ ├── hero.jsx
│ └── theme-provider.jsx
├── data/ # Static data (industries, etc.)
├── hooks/ # Custom React hooks
├── prisma/
│ └── schema.prisma # Prisma schema
├── public/ # Static assets (images, logo)
├── .env # Environment variables
├── package.json
└── README.md



---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://..."

# Clerk Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Google Gemini AI
GOOGLE_API_KEY=AIzaSy...

# Clerk Redirect URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

