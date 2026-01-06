# 💾 Database Architecture & Management

This project uses a file-based database system optimized for portability, security, and ease of development.

## 🛠 Engine: SQLite

Instead of a complex database server (like MySQL), we use **SQLite**. This means the entire database is stored in a single file on your disk.

### 📍 Location
The database file is located at:
`backend/database/database.sqlite`

---

## ⚙️ Configuration

The database is configured in the `backend/.env` file:
```env
DB_CONNECTION=sqlite
# DB_DATABASE is automatically resolved to database.sqlite if left empty or set accordingly
```

### Advantages of this approach:
1.  **Portability**: The entire project (Code + Data) can be moved by simply copying the folder.
2.  **No Setup**: You don't need to install or maintain a database server software on your local machine.
3.  **Speed**: Highly efficient for single-user management (like your personal dashboard).
4.  **Security**: Access is restricted at the file-system level.

---

## 🔄 Operations

### 1. Migrations (The Blueprint)
The database structure is defined in `backend/database/migrations/`. 
To update or refresh the structure, you use:
```bash
php artisan migrate
```

### 2. Backups
Since everything is a file, backing up your data is as simple as copying `backend/database/database.sqlite` to a safe location (e.g., Google Drive, external HDD).

### 3. Scaling
If you ever need to scale to a high-traffic environment (e.g., thousands of simultaneous writes), Laravel makes it easy to switch to **PostgreSQL** or **MySQL** by just changing a few lines in the `.env` file and running migrations.

---

## 🛠 Tools for Inspection
If you want to view the raw data inside the database:
- **DB Browser for SQLite**: A free, open-source tool to open and browse the `.sqlite` file.
- **VS Code Extensions**: Search for "SQLite Viewer" in the extension marketplace.

---
*Data Integrity & Security by Antigravity*
