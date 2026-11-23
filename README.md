# GEARIFY – Car Repair Shop Management System

> **"Drive Better. We'll Take Care of the Rest."**

**GEARIFY** is a full-stack Car Repair Shop Management System developed as an academic group project (Submission Deadline: **December 6, 2026**). It features a decoupled **Vue 3 + Vuetify 3** single-page application (SPA) frontend and a **Laravel RESTful API** backend backed by **MySQL**.

---

## 1. Architecture & Repository Structure

The repository is organized into three separated top-level directories:

```text
Gearify/
├── frontend/                  # Vue 3 + Vuetify 3 + Vite SPA
│   ├── public/                # Static favicon & branding assets
│   ├── src/
│   │   ├── assets/            # Gearify branding & imagery
│   │   ├── components/
│   │   │   ├── common/        # Reusable module shells
│   │   │   ├── dashboard/     # KPI cards, Chart.js widgets, tables, activity & quick actions
│   │   │   └── navigation/    # AppSidebar & AppTopbar
│   │   ├── layouts/           # MainLayout application shell
│   │   ├── pages/             # Route views (Dashboard + 8 shop modules)
│   │   ├── plugins/           # Vuetify 3 Dark Automotive theme configuration
│   │   ├── router/            # Vue Router 4 history routing & page title guard
│   │   ├── services/          # Axios API client & clearly labeled Phase 1 mock data
│   │   └── styles/            # Global typography (Inter) & Dark Automotive surface styles
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/                   # Laravel RESTful API (No Blade views)
│   ├── app/Http/Controllers/Api/
│   │   └── HealthCheckController.php
│   ├── bootstrap/app.php      # API routing registration
│   ├── config/                # Database & application configuration
│   ├── routes/
│   │   ├── api.php            # /api/health endpoint
│   │   └── web.php            # Stateless JSON root notice
│   ├── .env.example           # MySQL environment template
│   └── composer.json
│
└── database/                  # MySQL schema documentation & SQL scripts
    ├── schema/
    │   └── 00_init_database.sql
    └── README.md
```

---

## 2. Visual Identity (Dark Automotive Theme)

| Element | Hex Color | Usage |
|---|---|---|
| **Main Background** | `#151821` | Primary application viewport background |
| **Sidebar Background** | `#202431` | Left navigation drawer and inner wells |
| **Card Background** | `#292F3D` | Elevated surfaces, KPI cards, charts, and tables |
| **Primary Accent** | `#E53945` | Active navigation indicator, primary buttons, chart highlights |
| **Secondary Accent** | `#FF626B` | Secondary badges, chart points, and interactive accents |
| **Primary Text** | `#F4F5F8` | Headings, metric values, and primary labels |
| **Secondary Text** | `#9299A8` | Subtitles, table headers, and muted metadata |
| **Success** | `#27C58B` | Positive growth trends, completed statuses, API online badge |
| **Warning** | `#F5B942` | Pending jobs, awaiting parts indicators |

**Typography:** `Inter` (`700 Bold` for headings, `600 SemiBold` for navigation and card titles, `400 Regular` for body text).

---

## 3. Prerequisites

Ensure the following tools are installed on your development machine:
- **Node.js** `>= 20.x` and **npm** `>= 10.x`
- **PHP** `>= 8.2` (with `pdo_mysql`, `mbstring`, `openssl`, `curl`, `xml`, `fileinfo` extensions)
- **Composer** `>= 2.x`
- **MySQL** `>= 8.0` (or MariaDB `>= 10.6`)

---

## 4. Setup & Execution Instructions

### A. Database Setup (`/database`)
1. Start your local MySQL server.
2. Execute the initialization script to create the `gearify_db` database:
   ```sql
   SOURCE database/schema/00_init_database.sql;
   ```
   *(Or run `CREATE DATABASE IF NOT EXISTS gearify_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;` in your MySQL client).*

### B. Backend Setup (`/backend`)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install PHP dependencies (if not already installed):
   ```bash
   composer install
   ```
3. Configure your environment file:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
4. Update `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, and `DB_PASSWORD` in `backend/.env` to match your local MySQL server.
5. Start the Laravel development server on port `8000`:
   ```bash
   php artisan serve --port=8000
   ```
6. Verify the API health-check endpoint in your browser or terminal:
   - `GET http://127.0.0.1:8000/api/health`

### C. Frontend Setup (`/frontend`)
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install Node.js dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server on port `5173`:
   ```bash
   npm run dev
   ```
4. Open **`http://localhost:5173`** in your browser.
   - Vite automatically proxies `/api/*` requests to `http://127.0.0.1:8000`.

---

## 5. Phase 1 Scope & Notice

- **Included in Phase 1:**
  - Separate `/frontend`, `/backend`, and `/database` project structure.
  - Vue 3 + Vuetify 3 Dark Automotive application shell (`AppSidebar`, `AppTopbar`, `MainLayout`).
  - Vue Router setup covering all 9 navigation sections (`Dashboard`, `Customers`, `Vehicles`, `Services`, `Repair Orders`, `Inventory`, `Payments`, `Reports`, `Settings`).
  - Dashboard UI featuring 4 KPI cards, Chart.js Monthly Revenue line chart, Repair Status doughnut chart, Recent Repair Orders table, Recent Activity timeline, and Quick Actions using clearly identified sample data (`src/services/mockDashboardData.js`).
  - Laravel API routing foundation and `/api/health` endpoint.
- **Planned for Subsequent Phases:**
  - Authentication & role-based access control.
  - Database migrations, Eloquent models, and CRUD endpoints for all 8 operational modules.
