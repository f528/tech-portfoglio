# 🚀 Portfolio Frontend Documentation

Welcome to the frontend documentation for your professional portfolio. This project is built with a focus on high-performance animations, futuristic design, and seamless backend integration.

## 🛠 Technology Stack

- **Core**: [Next.js 14](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a custom Cyber-Theme.
- **Animations**:
    - [Framer Motion](https://www.framer.com/motion/): Utilized for interactive hover states, scroll reveals, and modal transitions.
    - [GSAP](https://greensock.com/gsap/): Used for complex sequencing like the typing effect in the Hero section.
- **Data Visualization**: [Chart.js](https://www.chartjs.org/) for the Competency Radar.
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) (Font Awesome, Simple Icons).

## 📁 Project Structure

```text
/tech-portfolio
├── app/                  # Next.js App Router (Layouts, Page, Global CSS)
├── components/           # Reusable UI components
│   ├── dashboard/       # Stats, SkillsProgress, Charts, Certs
│   ├── layout/          # Navbar, Footer
│   ├── sections/        # Hero, SkillsCloud, Projects, Contact
│   └── ui/              # Atom components (Button, Card, Container)
├── lib/                  # Utilities and Configuration
│   ├── api.ts           # Axios-like fetches to Laravel Backend
│   ├── data.ts          # Fallback / Mock data
│   ├── types.ts         # TypeScript Interfaces
│   └── animations.ts    # Reusable animation variants
└── public/               # Static assets (Images, Favicon)
```

## 🔄 Data Architecture & Sync

The frontend implements a **Hybrid Data Model**:

1.  **API Primary**: On load, it attempts to fetch your data from `http://127.0.0.1:8000/api/portfolio`.
2.  **Fallback Secondary**: If the database is empty or the API is unreachable, it automatically uses the high-quality mock data in `lib/data.ts`.
3.  **Automatic Switch**: As soon as you add content to your Filament Dashboard, the site will prioritize those "Real" entries over the example ones.

## 🎨 Theme & Customization

The design system is managed via `tailwind.config.ts`. You can easily change the "Cyber" feel by modifying the primary colors:

- `--cyber-cyan`: `#00f0ff` (Primary Glow)
- `--cyber-blue`: `#0066ff` (Secondary Accent)
- `--cyber-pink`: `#ff00e5` (Hover / Interactive)

## ⚡ Local Development

To run the frontend separately:

1.  Ensure dependencies are installed: `npm install`.
2.  Start the development server: `npm run dev`.
3.  Access the site at `http://localhost:3000`.

## 📂 Mapping Dashboard Fields

When adding data via the **Filament Panel**, remember:
- **Skill Category**: Maps directly to the Radar Chart axes.
- **Skill Icon**: Enter the name of a React Icon (e.g., `SiLaravel`).
- **Certification Badge**: Uploading an image will automatically replace the default icon.

---
*Developed with ❤️ by Antigravity*
