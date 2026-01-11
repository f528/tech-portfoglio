# 🔧 Render - Configurazione Backend Laravel

## ❌ Errore: "Cannot GET /api/portfolio"

Questo errore significa che Render non sta servendo correttamente l'applicazione Laravel.

---

## ✅ Soluzione: Configura Render Correttamente

### 📋 Step 1: Vai su Render Dashboard

1. Vai su: https://dashboard.render.com
2. Seleziona il tuo **Web Service** del backend
3. Vai su **Settings**

---

### ⚙️ Step 2: Configura Build & Start Commands

Scorri fino a trovare:

#### **Build Command:**
```bash
bash build.sh
```

#### **Start Command:**
```bash
bash start.sh
```

---

### 📁 Step 3: Configura Root Directory (IMPORTANTE!)

Se il tuo repository ha il backend in una sottocartella:

**Root Directory:** (lascia vuoto se il backend è nella root)
```
(vuoto)
```

Il progetto ha una struttura così:
```
tech-portfolio/
├── backend/          ← Laravel è qui
├── components/       ← Next.js frontend
├── build.sh          ← Script di build
└── start.sh          ← Script di avvio
```

Gli script `build.sh` e `start.sh` si occupano di entrare nella cartella `backend/`.

---

### 🔢 Step 4: Verifica la Porta

Render assegna automaticamente la porta tramite la variabile `$PORT`.

Assicurati che NON ci sia una variabile `PORT` manuale nelle Environment Variables.

---

### 🌍 Step 5: Configura Environment Variables

Vai su **Environment** e aggiungi:

```bash
# App Configuration
APP_NAME="Tech Portfolio"
APP_ENV=production
APP_DEBUG=false

# IMPORTANTE: Genera con: php artisan key:generate --show
APP_KEY=base64:TUO_APP_KEY_QUI

# URLs
APP_URL=https://tuo-backend.onrender.com
FRONTEND_URL=https://tuo-portfolio.vercel.app

# Database (SQLite per semplicità)
DB_CONNECTION=sqlite

# Session & Cache
SESSION_DRIVER=database
CACHE_STORE=database
QUEUE_CONNECTION=database

# File Storage
FILESYSTEM_DISK=public

# Logs
LOG_CHANNEL=stderr
LOG_LEVEL=error
```

---

### 🔑 Step 6: Genera APP_KEY

Se non hai ancora generato `APP_KEY`:

**Opzione A - Locale (Raccomandato):**
```bash
cd backend
php artisan key:generate --show
```

Copia il valore che ti dà (es: `base64:abc123...`) e mettilo in `APP_KEY` su Render.

**Opzione B - Online:**
Usa: https://generate-random.org/laravel-key-generator

---

### 🚀 Step 7: Manual Deploy

Dopo aver configurato tutto:

1. Scorri in basso in Settings
2. Click su **Save Changes**
3. Vai su **Manual Deploy** → **Deploy latest commit**

Oppure fai un nuovo push:
```bash
git add -A
git commit -m "Add Render deployment scripts"
git push origin main
```

---

### 📊 Step 8: Monitora i Logs

Durante il deploy:

1. Vai su **Logs** nel dashboard Render
2. Dovresti vedere:
   ```
   🚀 Starting Laravel deployment on Render...
   📦 Installing Composer dependencies...
   ⚙️  Caching configuration...
   ✅ Build completed successfully!
   ```

3. Poi nel runtime:
   ```
   🚀 Starting Laravel application...
   🗄️  Running database migrations...
   🔗 Creating storage symbolic link...
   🌐 Starting PHP server on port 10000...
   ```

---

### ✅ Step 9: Testa l'API

Una volta che il servizio è **Live** (pallino verde), testa:

**Nel browser:**
```
https://tuo-backend.onrender.com/up
```
Dovresti vedere un JSON di health check.

**Testa l'API Portfolio:**
```
https://tuo-backend.onrender.com/api/portfolio
```
Dovresti vedere i dati JSON del portfolio.

---

## 🐛 Troubleshooting

### Errore: "Class 'Composer\InstalledVersions' not found"

**Soluzione:** Aggiungi alle Environment Variables:
```bash
COMPOSER_MEMORY_LIMIT=-1
```

### Errore: "No application encryption key has been specified"

**Soluzione:** Genera e aggiungi `APP_KEY` (vedi Step 6).

### Errore: "Database file not found"

**Soluzione:** Assicurati che:
```bash
DB_CONNECTION=sqlite
```
E che lo script `start.sh` esegua `php artisan migrate --force`.

### Errore: 404 su tutte le route

**Soluzione:** 
1. Verifica che il **Start Command** sia: `bash start.sh`
2. Controlla che usi `php artisan serve` e non solo `php -S`
3. Verifica i logs per errori

### Build fallisce

**Soluzione:**
1. Controlla che `composer.json` esista in `backend/`
2. Verifica che PHP version sia compatibile (8.2+)
3. Guarda i logs per l'errore specifico

---

## 📝 Checklist Deploy Render

- [ ] Build Command: `bash build.sh`
- [ ] Start Command: `bash start.sh`
- [ ] Root Directory: (vuoto)
- [ ] `APP_KEY` generata e configurata
- [ ] `APP_URL` configurato con dominio Render
- [ ] `FRONTEND_URL` configurato con dominio Vercel
- [ ] `DB_CONNECTION=sqlite`
- [ ] Deploy completato con successo
- [ ] `/up` ritorna 200 OK
- [ ] `/api/portfolio` ritorna JSON

---

## 🎯 Riepilogo Comandi Render

```bash
# Build Command
bash build.sh

# Start Command  
bash start.sh

# Nessuna configurazione di Root Directory necessaria
```

---

**Una volta configurato tutto, il backend Laravel dovrebbe funzionare perfettamente su Render!** 🚀
