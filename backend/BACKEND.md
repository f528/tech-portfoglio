# 🧠 Portfolio Backend Documentation

Welcome to the backend documentation for your portfolio. This system is designed as a robust headless CMS providing data to your Next.js frontend via a secure REST API and a powerful administration dashboard.

## 🛠 Technology Stack

- **Framework**: [Laravel 11](https://laravel.com/)
- **Admin Panel**: [FilamentPHP v3](https://filamentphp.com/) - A TALL stack-based panel for rapid content management.
- **Database**: SQLite (default for development) / PostgreSQL (production ready).
- **PDF Generation**: [Laravel DomPDF](https://github.com/barryvdh/laravel-dompdf) for dynamic CV generation.
- **API**: Laravel Sanctum (configured for stateless portfolio data).

## 📁 Key Directories

```text
/backend
├── app/
│   ├── Filament/Resources/ # Administration panel configurations
│   ├── Http/Controllers/Api/ # Portfolio JSON API logic
│   ├── Http/Controllers/   # CV and other web controllers
│   └── Models/             # Database models (Profile, Project, Skill, etc.)
├── database/
│   ├── migrations/         # Database schema definitions
│   └── seeders/            # Initial data population
├── public/                 # Static assets and storage symlink
├── resources/views/        # Blade templates (including CV PDF template)
└── routes/
    ├── api.php             # Frontend data endpoints
    └── web.php             # Admin and CV download routes
```

## 🚀 Admin Panel Features

Access the dashboard at `http://localhost:8000/admin`.

- **Profile Management**: Manage your bio, avatar, and social links.
- **Skill Matrix**: Add/Edit skills with levels, categories, and icons.
- **Certification Registry**: Track certifications with badge uploads and credential verification.
- **Project Portfolio**: Categorize and showcase your best work.
- **Interactive Timeline**: Manage your education and career milestones.
- **Stats Counter**: Live counters for your "Mission Control" section.

## 📡 API Endpoints

The frontend consumes data from:
- `GET /api/portfolio`: Returns a consolidated JSON object containing all visible portfolio data.
- `GET /cv/download`: Dynamically generates and downloads your professional CV.

## 🛡 Security Implementation

- **Strict CORS**: Only the authorized frontend domain is allowed to fetch data.
- **Security Headers**: HSTS, CSP, X-Frame-Options, and X-Content-Type-Options are enforced.
- **Rate Limiting**: Protects API endpoints from abuse.
- **Fillable Protection**: Models use `$guarded = []` with careful form validation in Filament to prevent mass-assignment vulnerabilities.

## ⚡ Setup & Development

1. **Install Dependencies**: `composer install`
2. **Environment**: `cp .env.example .env` and `php artisan key:generate`
3. **Database**: `php artisan migrate`
4. **Storage Link**: `php artisan storage:link` (Critical for images to appear)
5. **Run Server**: `php artisan serve`

---
*Built for security and performance by Antigravity*
