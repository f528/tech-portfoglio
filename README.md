# 🚀 Tech Portfolio - Cyber Edition

![Project Status](https://img.shields.io/badge/Status-Active_Development-green)
![Next.js](https://img.shields.io/badge/Next.js-14.x-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC)
![License](https://img.shields.io/badge/License-MIT-yellow)

Un portfolio futuristico per **Full Stack Developer** & **Cybersecurity Specialist**, progettato per stupire con un'interfaccia immersiva, animazioni avanzate e una dashboard interattiva.

---

## 🌟 Caratteristiche Principali

### 🎨 Design & Animazioni (Cyber/Hacker Theme)
- **Interfaccia Futuristica**: Tema scuro "Cyber" con accenti Neon Cyan, Blue e Pink.
- **Glassmorphism**: Utilizzo intensivo di sfocature e trasparenze per un look moderno.
- **Particle Background**: Sfondo interattivo particellare in HTML5 Canvas.
- **Typing Effects**: Animazioni di digitazione simulata per titoli e intro.
- **Smooth Transitions**: Animazioni fluide guidate da **GSAP** e **Framer Motion**.

### 📊 Dashboard Interattiva
- **Skill Radar Chart**: Grafico a radar interattivo per visualizzare il bilanciamento delle competenze.
- **Progress Bars**: Barre di progresso animate per le skill tecniche.
- **Timeline**: Cronologia verticale interattiva di esperienze lavorative e studi.
- **Stats Counters**: Contatori numerici animati per progetti, anni di esperienza, ecc.

### 💻 Funzionalità Speciali
- **Terminal CLI**: Una vera interfaccia a riga di comando (apribile con `Ctrl + \` o icona) che accetta comandi come `help`, `about`, `skills`.
- **Certificazioni**: Gallery a griglia con card 3D e modali di dettaglio.
- **Theme Toggle**: Supporto nativo per Light/Dark mode (default Dark).
- **Progetti Filtrabili**: Griglia progetti con filtri per categoria (Web, Security, Fullstack).
- **Contact Form**: Modulo contatti stilizzato con animazioni di invio "trasmissione dati".

---

## 🛠️ Tecnologie Utilizzate

### Core
- **[Next.js 14](https://nextjs.org/)**: Framework React per la produzione (App Router).
- **[TypeScript](https://www.typescriptlang.org/)**: Superset JavaScript tipizzato per codice robusto.
- **[React](https://react.dev/)**: Libreria per la costruzione dell'interfaccia utente.

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utility-first per styling rapido.
- **[Clsx](https://github.com/lukeed/clsx) & [Tailwind Merge](https://github.com/dcastil/tailwind-merge)**: Gestione dinamica delle classi CSS.
- **[React Icons](https://react-icons.github.io/react-icons/)**: Icone vettoriali (FontAwesome, Simple Icons).

### Animazioni & Grafica
- **[Framer Motion](https://www.framer.com/motion/)**: Animazioni declarative e layout transitions.
- **[GSAP](https://greensock.com/gsap/) (GreenSock)**: Animazioni performanti e complesse timeline.
- **[Chart.js](https://www.chartjs.org/)** (via `react-chartjs-2`): Visualizzazione dati e grafici.
- **HTML5 Canvas**: Per gli effetti particellari personalizzati.

### Data Handling
- **Mock Data Layer**: Architettura dati separata (`lib/data.ts`) pronta per integrazione API.

---

## 🚀 Istruzioni per l'Installazione

### Prerequisiti
- Node.js 18+ installato.
- npm o yarn.

### 1. Clona il repository
```bash
git clone https://github.com/yourusername/tech-portfolio.git
cd tech-portfolio
```

### 2. Installa le dipendenze
```bash
npm install
# oppure
yarn install
```

### 3. Avvia il server di sviluppo
```bash
npm run dev
# oppure
yarn dev
```

Apri [http://localhost:3000](http://localhost:3000) nel tuo browser per vedere il risultato.

---

## 📂 Struttura del Progetto

```
tech-portfolio/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Layout globale (Fonts, Navbar, Footer)
│   ├── page.tsx          # Homepage principale
│   └── globals.css       # Stili globali e variabili CSS
├── components/           # Componenti React riutilizzabili
│   ├── dashboard/        # Widget specifici dashboard (Chart, Stats, ecc.)
│   ├── effects/          # Effetti visivi (Particles)
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # Sezioni principali (Hero, Projects, Contact)
│   ├── special/          # Feature speciali (Terminal)
│   └── ui/               # Componenti base (Button, Card, Container)
├── lib/                  # Logica, utility e dati statici
│   ├── animations.ts     # Configurazioni animazioni riutilizzabili
│   ├── data.ts           # Dati mock (Skills, Projects, Certs)
│   ├── types.ts          # Definizioni interfacce TypeScript
│   └── utils.ts          # Helper functions
└── public/               # Asset statici (immagini, icone)
```

---

## 🔮 Roadmap Futura (Backend Phase)

- [ ] **Laravel API**: Integrazione backend per gestione dinamica contenuti.
- [ ] **Admin Panel**: Pannello di controllo per aggiungere progetti/certificazioni.
- [ ] **Database**: Migrazione da dati statici a PostgreSQL/MySQL.
- [ ] **Auth**: Login sicuro per l'area amministrativa.

---

## 📄 Licenza

Distribuito sotto licenza MIT. Vedi `LICENSE` per maggiori informazioni.

---

<div align="center">
  <sub>Built with ❤️ by Alex Cyber AI Assistant</sub>
</div>
