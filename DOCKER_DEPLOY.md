# 🐳 Render - Deploy Laravel con Docker

## ✅ Soluzione al Problema "composer: command not found"

Il problema era che Render usava l'ambiente **Node.js** invece di **PHP**.

La soluzione è usare **Docker** per avere pieno controllo dell'ambiente.

---

## 🚀 Nuova Configurazione (Docker)

Ho creato questi file:

- ✅ `Dockerfile` - Container PHP 8.3 con tutte le estensioni
- ✅ `docker-start.sh` - Script di avvio per il container
- ✅ `render.yaml` - Configurazione aggiornata per Docker

---

## 📋 Configurazione su Render

### **Metodo 1: Usa render.yaml (Automatico)**

Render leggerà automaticamente il file `render.yaml` e configurerà tutto correttamente.

**Non devi fare nulla!** Basta fare push e Render farà il resto.

---

### **Metodo 2: Configurazione Manuale (Se necessario)**

Se Render non legge `render.yaml`, configura manualmente:

#### **1️⃣ Vai su Settings**

Dashboard Render → Tuo Web Service → Settings

#### **2️⃣ Cambia Environment**

**Environment:** Docker

#### **3️⃣ Configura Dockerfile**

**Dockerfile Path:** `./Dockerfile`

#### **4️⃣ Rimuovi Build/Start Commands**

Lascia vuoti (Docker usa CMD nel Dockerfile)

---

## 🌍 Environment Variables

Assicurati di aver configurato:

```bash
APP_KEY=base64:9plw5O7drBQcZB5hlWK//hosBjZFbbmpCvk1akGXXSA=
APP_NAME=Tech Portfolio
APP_ENV=production
APP_DEBUG=false
APP_URL=https://tuo-backend.onrender.com
FRONTEND_URL=https://tuo-portfolio.vercel.app
DB_CONNECTION=sqlite
SESSION_DRIVER=database
CACHE_STORE=database
LOG_CHANNEL=stderr
LOG_LEVEL=error
```

---

## 🎯 Dopo il Push

1. **Commit e Push:**
```bash
git add -A
git commit -m "feat: Add Docker support for Render deployment"
git push render main
```

2. **Render rileverà automaticamente il Dockerfile** e:
   - Costruirà l'immagine Docker
   - Installerà PHP 8.3 + Composer
   - Installerà le dipendenze Laravel
   - Eseguirà le migrations
   - Avvierà il server

3. **Nei logs vedrai:**
```
==> Building Docker image...
==> Successfully built Docker image
==> Starting container...
🚀 Starting Laravel application...
🔑 Generating app key...
🗄️  Running migrations...
🔗 Linking storage...
⚡ Optimizing...
🌐 Starting PHP server on port 10000...
```

---

## ✅ Test

Dopo il deploy:

**Health Check:**
```
https://tuo-backend.onrender.com/up
```

**API Portfolio:**
```
https://tuo-backend.onrender.com/api/portfolio
```

---

## 🐛 Troubleshooting

### Errore: "Failed to build Docker image"

**Soluzione:** Controlla i logs per l'errore specifico. Di solito è un problema di sintassi nel Dockerfile.

### Errore: "Container exited with code 1"

**Soluzione:** Controlla che `APP_KEY` sia configurata nelle Environment Variables.

### Port binding errors

**Soluzione:** Il container usa `$PORT` da Render automaticamente. Non configurare manualmente.

---

## 📊 Vantaggi Docker vs Buildpack

| Aspetto | Buildpack | Docker |
|---------|-----------|--------|
| Controllo | ❌ Limitato | ✅ Completo |
| Ambiente | ❌ Auto-rilevato | ✅ Definito da te |
| Dipendenze | ❌ Limitate | ✅ Tutte disponibili |
| Debugging | ❌ Difficile | ✅ Facile |
| Prestazioni | ✅ Veloce | ✅ Veloce |

---

**Con Docker, hai il pieno controllo dell'ambiente di deployment!** 🐳
