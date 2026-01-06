# 🚀 Deployment Guide: Full-Stack Portfolio

This guide outlines the steps required to deploy your portfolio to a production environment. The project consists of two main parts: a **Laravel Backend** and a **Next.js Frontend**.

---

## 🏗 Part 1: Backend Deployment (Laravel)

### 1. Choose a Hosting Environment
- **Recommended**: DigitalOcean, AWS, or Vultr (VPS).
- **Alternative**: Laravel Forge (for automated deployment).

### 2. server Requirements
- PHP 8.2 or higher
- Composer
- SQLite (or MySQL/PostgreSQL)
- Nginx or Apache
- SSL Certificate (Let's Encrypt recommended)

### 3. Preparation Steps
1.  **Clone the Repository**: Clone your code onto the server.
2.  **Environment Setup**:
    ```bash
    cp .env.example .env
    php artisan key:generate
    ```
    Update your `.env` with:
    - `APP_URL=https://api.yourdomain.com`
    - `FRONTEND_URL=https://yourdomain.com` (for CORS)
    - `DB_CONNECTION=sqlite` (or your preferred DB)
3.  **Install Dependencies**:
    ```bash
    composer install --optimize-autoloader --no-dev
    ```
4.  **Database & Storage**:
    ```bash
    php artisan migrate --force
    php artisan storage:link
    ```
5.  **Optimization**:
    ```bash
    php artisan config:cache
    php artisan route:cache
    php artisan view:cache
    ```

---

## 💻 Part 2: Frontend Deployment (Next.js)

### 1. Recommended: Vercel
Vercel is the creator of Next.js and offers the best deployment experience.
1.  Connect your GitHub repository to Vercel.
2.  Set the **Root Directory** to `/` (if the project is in the root).
3.  Add **Environment Variables**:
    - `NEXT_PUBLIC_API_URL=https://api.yourdomain.com/api`
    - `NEXT_PUBLIC_STORAGE_URL=https://api.yourdomain.com/storage`
4.  Click **Deploy**.

### 2. Alternative: Self-Hosted (PM2)
If using a VPS:
1.  **Environment Variables**: Create a `.env.production` file.
2.  **Build**:
    ```bash
    npm install
    npm run build
    ```
3.  **Start with PM2**:
    ```bash
    pm2 start npm --name "portfolio-frontend" -- start
    ```

---

## 🔒 Part 3: Critical Security Check

### 1. CORS Policy
Ensure your Laravel `cors.php` or `.env` specifically allows your frontend domain. In `backend/.env`:
```env
# Change this to your final front-end URL
FRONTEND_URL=https://your-portfolio.vercel.app
```

### 2. Storage Permissions
On Linux servers, ensure the storage and bootstrap/cache directories are writable:
```bash
sudo chown -R www-data:www-data storage bootstrap/cache
```

### 3. SSL (HTTPS)
Never deploy a cybersecurity portfolio without HTTPS. Use **Certbot** (Let's Encrypt) to secure your API and frontend if self-hosting.

---
*Good luck with your launch!*
