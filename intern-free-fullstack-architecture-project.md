# Intern Project: Free Full-Stack Architecture Learning Project

## 1. Objective

The goal of this project is to help interns understand the complete software delivery lifecycle using a small but real application.

They should learn:

- How to design a simple product idea.
- How frontend, backend, database, authentication, storage, and deployment connect together.
- How to use GitHub for collaboration.
- How CI/CD works using GitHub Actions.
- How to deploy an application using free-tier services.
- How to manage environment variables safely.
- How to think about production-like architecture without using paid cloud infrastructure.

This project should be intentionally small. The purpose is not to copy the full Dgtula/Dhanman architecture. The purpose is to understand the concepts behind it using a smaller, manageable application.

---

## 2. Recommended Project Idea

## Knowledge Dictionary for Interns

Each intern builds a personal and team-level knowledge dictionary where they can store what they are learning during onboarding.

Example entries:

- What is CQRS?
- What is MediatR?
- What is PostgreSQL?
- What is Redis caching?
- What is GitHub Actions?
- What is deployment?
- What is a migration?
- What is an API?
- What is authentication?
- What is environment configuration?

The idea is simple, useful, and directly connected to their learning.

---

## 3. Why This Is a Good Intern Project

This project is better than a generic todo app because it connects directly to their onboarding.

It teaches them:

- CRUD operations.
- Search functionality.
- Category-based filtering.
- Database design.
- API design.
- Authentication basics.
- File/audio upload basics.
- Deployment.
- GitHub Actions.
- Environment variables.
- Basic architecture documentation.

It also gives the company a useful outcome: a growing knowledge base written in the interns' own words.

---

## 4. Application Name Suggestions

Choose one:

- Intern Knowledge Dictionary
- Dev Learning Vault
- Architecture Learning Hub
- Tech Notes Dictionary
- Build-to-Adapt Learning Journal
- Dgtula Intern Knowledge Base

Recommended name:

**Dev Learning Vault**

---

## 5. Core Features

## Phase 1: Minimum Viable Product

The first version should be simple.

Features:

- User can create a knowledge note.
- User can edit a note.
- User can delete a note.
- User can view all notes.
- User can search notes by title or content.
- User can filter notes by category.
- User can add tags.
- User can mark a note as public or private.

Example note fields:

```text
Title: What is CQRS?
Category: Backend Architecture
Tags: cqrs, mediatr, clean-architecture
Content: CQRS means Command Query Responsibility Segregation...
Created By: intern email/user id
Created At: timestamp
Updated At: timestamp
```

---

## 6. Advanced Features

After the MVP works, add these features gradually:

- Voice note upload.
- File attachment upload.
- Markdown editor.
- Full-text search using PostgreSQL.
- Favorite/bookmark notes.
- Team notes and private notes.
- AI summary later, only if allowed and budget is available.
- Version history of edited notes.
- Comments on notes.
- Simple analytics dashboard.

---

## 7. Recommended Architecture

Use a simple 3-tier architecture.

```text
React Frontend
    ↓
Node.js / Express Backend API
    ↓
Supabase PostgreSQL Database
```

Optional services:

```text
Supabase Auth       → User login
Supabase Storage    → Voice notes / file uploads
GitHub Actions      → CI/CD automation
Vercel / Netlify    → Frontend hosting
Render / Railway    → Backend hosting
Supabase            → PostgreSQL database
```

---

## 8. Recommended Tech Stack

## Frontend

Recommended:

- React
- Vite
- TypeScript
- Tailwind CSS
- React Router
- TanStack Query or Axios

Why:

- Easy to learn.
- Fast development.
- Good industry relevance.
- Easy to deploy on Vercel or Netlify.

---

## Backend

Recommended:

- Node.js
- Express.js
- TypeScript
- Zod for request validation
- Prisma or Drizzle ORM

Why:

- Easy for interns to understand.
- Common backend stack.
- Works well with PostgreSQL.
- Deploys easily on free-tier platforms.

Alternative backend options:

- NestJS if you want a more structured enterprise-style backend.
- Fastify if you want performance and cleaner plugin-based structure.
- Supabase direct API if you want to skip custom backend initially.

Recommended for learning architecture:

**Node.js + Express + TypeScript + Prisma**

---

## Database

Recommended:

- Supabase PostgreSQL

Why:

- Real PostgreSQL.
- Free tier is enough for intern projects.
- Provides database dashboard.
- Supports authentication.
- Supports storage.
- Provides APIs if needed.

---

## CI/CD

Recommended:

- GitHub Actions

Use it for:

- Installing dependencies.
- Running lint checks.
- Running tests.
- Building frontend.
- Building backend.
- Deploying frontend.
- Deploying backend.

---

## Hosting

Recommended deployment split:

```text
Frontend  → Vercel or Netlify
Backend   → Render
Database  → Supabase
CI/CD     → GitHub Actions
Code      → GitHub
```

This gives interns exposure to real distributed deployment.

---

## 9. Free Resource Options

## Code Repository

| Purpose | Recommended Free Tool | Notes |
|---|---|---|
| Git repository | GitHub Free | Use public repo for easiest free GitHub Actions usage. Private repos also work but have quota limits. |
| Project board | GitHub Projects | Track tasks, bugs, and features. |
| Documentation | GitHub Wiki or `/docs` folder | Keep architecture notes in Markdown. |

---

## Frontend Hosting

| Provider | Best For | Notes |
|---|---|---|
| Vercel | React/Vite/Next.js frontend | Very easy GitHub integration. Good for frontend hosting. |
| Netlify | React/Vite static frontend | Simple deployment, preview links, environment variables. |
| Cloudflare Pages | Static frontend | Strong free tier and fast CDN. Good for static apps. |
| GitHub Pages | Static frontend only | Good for basic React static deployment, but less flexible for environment handling. |

Recommended:

**Vercel** for frontend.

Reason:

- Easiest GitHub integration.
- Automatic deployments on push.
- Free generated domain.
- Good developer experience.

Example domain:

```text
dev-learning-vault.vercel.app
```

---

## Backend Hosting

| Provider | Best For | Notes |
|---|---|---|
| Render | Node.js backend | Good free option for web services. Free instances may sleep and are not for production. |
| Railway | Simple backend deployment | Free/trial model changes over time; verify before using. |
| Fly.io | More advanced deployment | Good learning, but may require card and more setup. |
| Koyeb | Small apps and APIs | Free-tier availability should be checked before assigning. |

Recommended:

**Render** for backend.

Reason:

- Can deploy Node.js web services.
- GitHub integration.
- Provides free URL.
- Easy environment variable setup.

Example backend URL:

```text
https://dev-learning-vault-api.onrender.com
```

Important note:

Free backend services may sleep after inactivity. This is acceptable for intern learning but not acceptable for production systems.

---

## Database Hosting

| Provider | Best For | Notes |
|---|---|---|
| Supabase | PostgreSQL database | Best recommended option for this project. |
| Neon | Serverless PostgreSQL | Also good for free PostgreSQL projects. |
| Render PostgreSQL | Simple Render-hosted database | Can be used if backend is also on Render. |
| Aiven free trials | Learning managed databases | Check current free status before use. |

Recommended:

**Supabase PostgreSQL**

Reason:

- Real PostgreSQL.
- Dashboard is easy to use.
- Free tier is good enough.
- Can later use Supabase Auth and Storage.

---

## Authentication

Options:

| Option | Difficulty | Notes |
|---|---|---|
| Supabase Auth | Easy | Recommended for interns. |
| Auth0 Free | Medium | Good industry tool, but more setup. |
| Custom JWT Auth | Medium/Hard | Good for learning, but more security responsibility. |
| Clerk | Easy | Good developer experience, check free limits. |

Recommended:

**Supabase Auth**

Start with email/password login.

Later add:

- Google login.
- Role-based access.
- Admin/intern role.

---

## File and Voice Storage

Options:

| Option | Best For | Notes |
|---|---|---|
| Supabase Storage | Voice notes and attachments | Recommended because database and storage stay together. |
| Cloudinary Free | Images/media | Good for image-heavy apps. |
| Firebase Storage | Files | Free tier exists, but setup is separate. |

Recommended:

**Supabase Storage**

Use it for:

- Voice notes.
- PDF notes.
- Screenshots.
- Architecture diagrams.

---

## CI/CD and Automation

| Purpose | Tool | Notes |
|---|---|---|
| CI/CD | GitHub Actions | Recommended. |
| Code scanning | GitHub CodeQL | Optional. |
| Dependency updates | Dependabot | Optional. |
| Preview deployment | Vercel/Netlify previews | Very useful for frontend PR review. |

Recommended GitHub Actions workflows:

```text
.github/workflows/frontend-ci.yml
.github/workflows/backend-ci.yml
.github/workflows/deploy.yml
```

---

## Monitoring and Logs

Free/simple options:

| Purpose | Tool | Notes |
|---|---|---|
| Frontend logs | Browser console + Vercel logs | Enough for interns. |
| Backend logs | Render logs | Simple and free. |
| API testing | Postman or Hoppscotch | Hoppscotch is browser-based and easy. |
| Error tracking | Sentry free tier | Optional. |

Recommended:

Start with Render logs and browser console.

Add Sentry only after MVP.

---

## API Testing

Recommended tools:

- Postman
- Hoppscotch
- Thunder Client VS Code extension
- Bruno

Recommended for interns:

**Bruno or Hoppscotch**

Reason:

- Simple.
- Easy to share API collections.
- Good for learning request/response flow.

---

## Design and Diagrams

Recommended free tools:

| Purpose | Tool |
|---|---|
| UI design | Figma Free |
| Architecture diagram | Excalidraw |
| Database diagram | dbdiagram.io |
| Flowcharts | Mermaid diagrams in Markdown |
| Documentation | Markdown in GitHub repo |

Recommended:

Use Mermaid diagrams inside the repo.

Example:

```mermaid
graph TD
  A[React Frontend] --> B[Node.js API]
  B --> C[Supabase PostgreSQL]
  B --> D[Supabase Storage]
  A --> E[Supabase Auth]
```

---

## 10. Database Design

## Tables

### users

If using Supabase Auth, Supabase manages auth users. Create an additional profile table.

```sql
create table profiles (
  id uuid primary key references auth.users(id),
  full_name text not null,
  role text not null default 'intern',
  created_at timestamptz not null default now()
);
```

---

### categories

```sql
create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  created_at timestamptz not null default now()
);
```

Example categories:

- Frontend
- Backend
- Database
- DevOps
- GitHub Actions
- Deployment
- Architecture
- Testing
- Security
- Dgtula Domain Knowledge

---

### knowledge_notes

```sql
create table knowledge_notes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  category_id uuid references categories(id),
  created_by uuid references auth.users(id),
  visibility text not null default 'private',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
```

---

### tags

```sql
create table tags (
  id uuid primary key default gen_random_uuid(),
  name text not null unique
);
```

---

### knowledge_note_tags

```sql
create table knowledge_note_tags (
  note_id uuid references knowledge_notes(id) on delete cascade,
  tag_id uuid references tags(id) on delete cascade,
  primary key (note_id, tag_id)
);
```

---

### attachments

```sql
create table attachments (
  id uuid primary key default gen_random_uuid(),
  note_id uuid references knowledge_notes(id) on delete cascade,
  file_url text not null,
  file_type text not null,
  file_name text not null,
  created_at timestamptz not null default now()
);
```

---

## 11. API Design

Base URL:

```text
/api/v1
```

Recommended endpoints:

```text
GET    /health
GET    /categories
POST   /categories
GET    /notes
GET    /notes/:id
POST   /notes
PUT    /notes/:id
DELETE /notes/:id
GET    /notes/search?q=cqrs
POST   /notes/:id/attachments
GET    /tags
POST   /tags
```

---

## 12. Folder Structure

## Frontend

```text
frontend/
  src/
    components/
    pages/
    routes/
    services/
    hooks/
    types/
    utils/
  .env.example
  package.json
  vite.config.ts
```

## Backend

```text
backend/
  src/
    config/
    controllers/
    middleware/
    routes/
    services/
    repositories/
    validators/
    types/
    app.ts
    server.ts
  prisma/
    schema.prisma
    migrations/
  .env.example
  package.json
  tsconfig.json
```

## Root

```text
project-root/
  frontend/
  backend/
  docs/
    architecture.md
    deployment.md
    database.md
    api-contract.md
  .github/
    workflows/
      frontend-ci.yml
      backend-ci.yml
      deploy.yml
  README.md
```

---

## 13. Deployment Architecture

```text
Developer pushes code to GitHub
        ↓
GitHub Actions runs checks
        ↓
Frontend deployed to Vercel
        ↓
Backend deployed to Render
        ↓
Backend connects to Supabase PostgreSQL
        ↓
User opens the app using Vercel URL
```

---

## 14. Environment Variables

## Frontend `.env.example`

```env
VITE_API_BASE_URL=https://your-backend-url.onrender.com/api/v1
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Backend `.env.example`

```env
PORT=4000
DATABASE_URL=postgresql://user:password@host:5432/database
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
JWT_SECRET=replace-this-for-local-only
NODE_ENV=development
```

Important:

Never commit real `.env` files.

Commit only `.env.example`.

---

## 15. GitHub Actions Example

## Backend CI

Create:

```text
.github/workflows/backend-ci.yml
```

```yaml
name: Backend CI

on:
  pull_request:
    paths:
      - 'backend/**'
  push:
    branches:
      - main
    paths:
      - 'backend/**'

jobs:
  backend-ci:
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: backend

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: backend/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Run lint
        run: npm run lint

      - name: Run tests
        run: npm test

      - name: Build backend
        run: npm run build
```

---

## Frontend CI

Create:

```text
.github/workflows/frontend-ci.yml
```

```yaml
name: Frontend CI

on:
  pull_request:
    paths:
      - 'frontend/**'
  push:
    branches:
      - main
    paths:
      - 'frontend/**'

jobs:
  frontend-ci:
    runs-on: ubuntu-latest

    defaults:
      run:
        working-directory: frontend

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
          cache-dependency-path: frontend/package-lock.json

      - name: Install dependencies
        run: npm ci

      - name: Run lint
        run: npm run lint

      - name: Build frontend
        run: npm run build
```

---

## 16. How to Host the Website for Free

## Option A: Vercel

Recommended for React frontend.

Steps:

1. Push frontend code to GitHub.
2. Go to Vercel.
3. Sign in using GitHub.
4. Import the repository.
5. Select the frontend folder as root directory.
6. Build command:

```text
npm run build
```

7. Output directory:

```text
dist
```

8. Add environment variables:

```text
VITE_API_BASE_URL
VITE_SUPABASE_URL
VITE_SUPABASE_ANON_KEY
```

9. Deploy.

Vercel gives a free domain like:

```text
https://dev-learning-vault.vercel.app
```

---

## Option B: Netlify

Good alternative for React frontend.

Steps:

1. Push code to GitHub.
2. Go to Netlify.
3. Import repository.
4. Select frontend folder.
5. Build command:

```text
npm run build
```

6. Publish directory:

```text
dist
```

7. Add environment variables.
8. Deploy.

Netlify gives a free domain like:

```text
https://dev-learning-vault.netlify.app
```

---

## Option C: Cloudflare Pages

Good for static frontend hosting.

Steps:

1. Push code to GitHub.
2. Go to Cloudflare Pages.
3. Connect GitHub repository.
4. Select framework as Vite.
5. Build command:

```text
npm run build
```

6. Output directory:

```text
dist
```

7. Add environment variables.
8. Deploy.

---

## 17. How to Host Backend for Free on Render

Steps:

1. Push backend code to GitHub.
2. Go to Render.
3. Create a new Web Service.
4. Connect GitHub repository.
5. Select backend folder as root.
6. Runtime: Node.
7. Build command:

```text
npm install && npm run build
```

8. Start command:

```text
npm start
```

9. Add environment variables:

```text
DATABASE_URL
SUPABASE_URL
SUPABASE_SERVICE_ROLE_KEY
NODE_ENV
```

10. Deploy.

Render gives a free URL like:

```text
https://dev-learning-vault-api.onrender.com
```

Important:

Render free web services may sleep after inactivity. First request after sleep can be slow.

---

## 18. How to Create PostgreSQL Database on Supabase

Steps:

1. Create a Supabase account.
2. Create a new project.
3. Choose a project name.
4. Set a database password.
5. Select the nearest region.
6. Wait for project creation.
7. Go to Project Settings → Database.
8. Copy the connection string.
9. Add the connection string to backend environment variables as `DATABASE_URL`.
10. Run migrations from local machine or GitHub Actions.

Example migration command:

```bash
npx prisma migrate deploy
```

For local development:

```bash
npx prisma migrate dev
```

---

## 19. Suggested Learning Milestones

## Week 1: Basics

Interns should learn:

- Git and GitHub basics.
- React basics.
- Node.js basics.
- REST API basics.
- PostgreSQL basics.

Deliverable:

- Static React UI.
- Basic Express API with `/health` endpoint.

---

## Week 2: Database and CRUD

Interns should learn:

- Database schema design.
- Prisma migrations.
- CRUD APIs.
- API testing using Postman/Hoppscotch/Bruno.

Deliverable:

- Create, read, update, delete knowledge notes.
- Store data in Supabase PostgreSQL.

---

## Week 3: Search, Categories, Tags

Interns should learn:

- Query parameters.
- Filtering.
- Search.
- Joins or relations.

Deliverable:

- Search notes.
- Filter notes by category.
- Add tags to notes.

---

## Week 4: Authentication and User Ownership

Interns should learn:

- Login.
- User-specific data.
- Public vs private notes.
- Basic authorization.

Deliverable:

- Users can see their own notes.
- Users can publish notes as public.

---

## Week 5: CI/CD and Deployment

Interns should learn:

- GitHub Actions.
- Environment variables.
- Frontend deployment.
- Backend deployment.
- Database migration deployment.

Deliverable:

- Frontend hosted on Vercel/Netlify.
- Backend hosted on Render.
- Database hosted on Supabase.
- GitHub Actions running on pull requests.

---

## Week 6: Documentation and Demo

Interns should learn:

- Architecture diagrams.
- API contract documentation.
- Deployment documentation.
- Demo preparation.

Deliverable:

- Final hosted app.
- README.
- Architecture diagram.
- API documentation.
- Deployment guide.
- 10-minute demo.

---

## 20. Suggested Team Split

For a group of interns:

| Role | Responsibility |
|---|---|
| Frontend Intern | React UI, forms, routes, API integration |
| Backend Intern | Express APIs, validation, business logic |
| Database Intern | Supabase schema, migrations, seed data |
| DevOps Intern | GitHub Actions, deployment, environment variables |
| QA Intern | Test cases, API testing, UI testing |
| Documentation Intern | README, architecture diagrams, setup guide |

Rotate roles every 1 or 2 weeks so everyone learns all parts.

---

## 21. Definition of Done

The project is complete when:

- Code is pushed to GitHub.
- Frontend is deployed on a free hosting provider.
- Backend is deployed on a free hosting provider.
- Database is running on Supabase.
- GitHub Actions run successfully.
- Interns can create and search knowledge notes.
- Environment variables are not committed.
- README explains local setup.
- Architecture diagram is present.
- API documentation is present.
- Each intern has written at least 10 knowledge notes.

---

## 22. Recommended Final Architecture

```text
                        GitHub Repository
                               |
                               | push / pull request
                               v
                        GitHub Actions
                       /              \
                      /                \
                     v                  v
          Vercel / Netlify          Render Backend
          React Frontend            Node.js API
                     \                  /
                      \                /
                       v              v
                      Supabase PostgreSQL
                      Supabase Auth
                      Supabase Storage
```

---

## 23. Recommended Free Stack Summary

| Layer | Recommended Tool |
|---|---|
| Frontend | React + Vite + TypeScript |
| Frontend Hosting | Vercel |
| Backend | Node.js + Express + TypeScript |
| Backend Hosting | Render |
| Database | Supabase PostgreSQL |
| Authentication | Supabase Auth |
| File Storage | Supabase Storage |
| CI/CD | GitHub Actions |
| Source Control | GitHub |
| API Testing | Bruno / Hoppscotch / Postman |
| Diagrams | Mermaid / Excalidraw / dbdiagram.io |
| Documentation | Markdown in GitHub |

---

## 24. Best Alternative Idea

If you want a slightly more business-like project, use this idea instead:

## Mini Society Helpdesk

Features:

- Resident creates a ticket.
- Ticket has category, priority, status.
- Admin assigns ticket.
- User can comment.
- User can search tickets.
- Dashboard shows open, in-progress, and closed tickets.

This is closer to Dgtula.

However, for interns, the **Knowledge Dictionary** idea is better because they can use it while learning.

Recommended approach:

Start with **Dev Learning Vault**.

After that, give them **Mini Society Helpdesk** as Project 2.

---

## 25. Final Recommendation

Use this project:

```text
Dev Learning Vault
```

Use this stack:

```text
React + Vite + TypeScript
Node.js + Express + TypeScript
Supabase PostgreSQL
Supabase Auth
Supabase Storage
GitHub Actions
Vercel for frontend
Render for backend
```

This gives interns a complete, free, production-like learning path without overwhelming them with the full company project.
