# 🚀 Render - Crea Nuovo Web Service con Docker

## ✨ Soluzione Più Semplice

Invece di modificare il servizio esistente, **crea un nuovo servizio** che leggerà automaticamente il `render.yaml`.

---

## 📋 Passi da Seguire

### **1️⃣ Vai su Render Dashboard**

👉 https://dashboard.render.com

### **2️⃣ Click sul Bottone "New +"**

In alto a destra, troverai un bottone blu **"New+"**

Click su **"Web Service"**

### **3️⃣ Connetti il Repository**

Dovresti vedere una lista dei tuoi repository GitHub.

**Cerca e seleziona:**
```
f528/tech-portfoglio-new
```

Se non lo vedi, click su **"Configure account"** per dare accesso.

### **4️⃣ Render Rileverà Automaticamente render.yaml!**

Vedrai un messaggio tipo:

```
✅ Blueprint detected: render.yaml
We found a render.yaml file. Would you like to use it?
```

**Click su "Yes" o "Apply"**

### **5️⃣ OPPURE Configura Manualmente**

Se non rileva il render.yaml, configura così:

**Name:**
```
tech-portfolio-backend
```

**Region:**
```
Frankfurt (EU Central)
```

**Branch:**
```
main
```

**Root Directory:**
```
(lascia vuoto)
```

**Environment:** ⬅️ IMPORTANTE!
```
Docker
```

**Dockerfile Path:**
```
./Dockerfile
```

**Build Command:**
```
(lascia vuoto)
```

**Start Command:**
```
(lascia vuoto)
```

### **6️⃣ Aggiungi Environment Variables**

Scorri in basso fino a **"Environment Variables"**

Click su **"Add Environment Variable"** e aggiungi:

```bash
APP_KEY=base64:9plw5O7drBQcZB5hlWK//hosBjZFbbmpCvk1akGXXSA=
```

```bash
APP_NAME=Tech Portfolio
```

```bash
APP_ENV=production
```

```bash
APP_DEBUG=false
```

```bash
DB_CONNECTION=sqlite
```

```bash
SESSION_DRIVER=database
```

```bash
CACHE_STORE=database
```

```bash
LOG_CHANNEL=stderr
```

```bash
LOG_LEVEL=error
```

**IMPORTANTE - Aggiungi questi DOPO il primo deploy:**
```bash
APP_URL=https://[il-tuo-url-render].onrender.com
```

```bash
FRONTEND_URL=https://[il-tuo-url-vercel].vercel.app
```

### **7️⃣ Click su "Create Web Service"**

Render inizierà automaticamente il build!

---

## 📊 Cosa Vedrai

Vai su **"Logs"** e dovresti vedere:

```
==> Cloning from https://github.com/f528/tech-portfoglio-new
==> Checking out commit 7de60ea...
==> Building Docker image from ./Dockerfile
Step 1/15 : FROM php:8.3-fpm
Step 2/15 : RUN apt-get update...
...
==> Successfully built Docker image
==> Starting container...
🚀 Starting Laravel application...
🗄️ Running migrations...
🔗 Linking storage...
⚡ Optimizing...
🌐 Starting PHP server on port 10000...

✅ Your service is live 🎉
```

---

## 🌍 Ottieni l'URL del Servizio

Una volta live, in alto vedrai l'URL tipo:

```
https://tech-portfolio-backend-xyz.onrender.com
```

**Copialo!**

Ora devi:

1. **Tornare su Environment Variables**
2. **Aggiungere/Modificare:**
   - `APP_URL` = il tuo URL Render
   - `FRONTEND_URL` = il tuo URL Vercel

3. **Render riavvierà automaticamente**

---

## ✅ Test dell'API

Apri nel browser:

```
https://[tuo-url].onrender.com/api/portfolio
```

Dovresti vedere i dati JSON! 🎉

---

## 🗑️ Elimina il Vecchio Servizio

Una volta che il nuovo funziona:

1. Vai sul vecchio servizio
2. Settings → in fondo click su **"Delete Web Service"**

---

## 🎯 Riepilogo

✅ Nuovo Web Service  
✅ Render rileva automaticamente Docker  
✅ Build automatico con configurazione corretta  
✅ Nessuna configurazione manuale necessaria!

---

**Questa è la soluzione più semplice e veloce!** 🚀
