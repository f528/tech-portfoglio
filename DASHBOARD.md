# 🎛 Portfolio Administration Dashboard Guide

This guide explains how to use the **Filament-based Administration Panel** to manage your portfolio content. The dashboard is the "brain" of your website, allowing you to update your skills, projects, and personal information without touching any code.

## 🔑 Accessing the Dashboard

- **URL**: `http://localhost:8000/admin`
- **Credentials**: Use the email and password you configured during the initial setup (or run `php artisan make:filament-user` to create a new one).

---

## 🗂 Managing Content

### 👤 Profile
Update your global information here.
- **Name & Title**: Appears in the Hero section.
- **Social Links**: Manage your GitHub, LinkedIn, and other profiles.
- **Bio**: The text displayed in the "About" section.
- **Avatar**: Upload your profile picture (will be synced to the frontend).

### 🛠 Skills & Proficiency
This section feeds both the **Technical Proficiency** (bars) and the **Competency Radar** (chart).
- **Category**: Group skills into Frontend, Backend, Cybersecurity, Cloud, Tools, or Languages.
- **Level**: A value from 0 to 100 representing your expertise.
- **Icon**: Use common React Icon names (e.g., `SiLaravel`, `FaReact`). See the [React Icons](https://react-icons.github.io/react-icons/) library for names.

### 🏆 Certifications
Manage your academic and professional achievements.
- **Badge Image**: Uploaded images will be displayed as the certificate logo.
- **Credential URL**: Links directly to the verification page (e.g., Credly, Google).
- **Description**: Provide context about what you learned or achieved.

### 🚀 Projects
Your showcase of work.
- **Featured**: Toggle "Featured" to highlight specific projects on the main grid.
- **Technologies**: List the stack used (e.g., "Laravel, Next.js, TailWind").
- **Links**: Provide internal or external URLs for Demos and GitHub repositories.

### ⏳ Timeline
Document your journey.
- **Type**: Categorize events as Education, Work, or Certification.
- **Order**: Use the `Sort Order` field to ensure events appear in the correct sequence.

### 📊 Stats Counter
Manage the numbers shown in "Mission Control".
- **Prefix/Suffix**: Add characters like "+" or "%" (e.g., `50+` Projects).

---

## 💡 Pro Tips for Content Management

1.  **Icon Mapping**: If you enter an icon name that isn't pre-loaded in the frontend code, it will default to a generic "Award" or "Tag" icon. For custom icons, ensure they are imported in the corresponding React component.
2.  **Image Optimization**: While the system handles uploads, try to use compressed `.webp` or `.png` files to keep the frontend loading speeds lightning-fast.
3.  **Real-Time Sync**: Changes saved in the dashboard reflect **instantly** on the website upon refreshing the page.

---
*Empowering your digital presence via Antigravity*
