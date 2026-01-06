# 🛠 Maintenance & Operations Guide

Once your portfolio is live, follow these best practices to ensure it remains secure, fast, and up-to-date.

---

## 💾 1. Backups (Critical)

### Database Backups
If using **SQLite** (default):
- Simply back up the `backend/database/database.sqlite` file.
- Recommended frequency: Weekly or after major content updates.

If using **PostgreSQL/MySQL**:
- Use `mysqldump` or `pg_dump`.
- Example command for Cron jobs:
  ```bash
  php artisan db:backup # (If using a backup package)
  ```

### Media Backups
Don't forget the `backend/storage/app/public` folder, which contains your profile pictures, project images, and certificate badges.

---

## 🔒 2. Security Maintenance

### Laravel Security Updates
Regularly check for security patches:
```bash
composer audit
composer update laravel/framework
```

### Frontend Dependencies
Keep your Next.js project secure:
```bash
npm audit
npm update next
```

### SSL Certificates
If using **Let's Encrypt**:
- It usually auto-renews, but verify with:
  ```bash
  sudo certbot renew --dry-run
  ```

---

## 📈 3. Monitoring & Logs

### Checking Backend Logs
If something goes wrong (e.g., CV download fails), check:
`backend/storage/logs/laravel.log`

### Performance Monitoring
- Use **Vercel Analytics** (if on Vercel) for frontend performance.
- Use **Google Search Console** to monitor how your portfolio appears in search results.

---

## 🔄 4. Updating Content & Code

### Content Updates
- Use the **Dashboard** (`/admin`) for all biography, skill, project, and certification updates. You don't need to redeploy the code for these changes!

### Code Updates (Redeployment)
If you make changes to the design or logic:
1. **Push** changes to your GitHub branch.
2. **Vercel** will auto-redeploy the frontend.
3. **Backend VPS**:
   ```bash
   git pull
   composer install --no-dev
   php artisan migrate --force
   php artisan optimize
   ```

---

## 🛠 5. Common Troubleshooting

| Issue | Potential Cause | Solution |
| :--- | :--- | :--- |
| **Images not appearing** | Missing storage link | Run `php artisan storage:link` |
| **500 Internal Error** | Cache issues or Permissions | Run `php artisan optimize:clear` and check file permissions |
| **CORS Errors** | Incorrect `FRONTEND_URL` | Check `backend/.env` matches your live frontend domain |
| **PDF Generation Fails** | Missing `php-gd` or fonts | Install missing PHP extensions on the server |

---
*Stay secure. Stay futuristic. Developed by Antigravity*
