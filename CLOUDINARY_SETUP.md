# 📸 Configurazione Cloudinary - Guida Rapida

## 🎯 Passi per Attivare Cloudinary

### **1️⃣ Registrati su Cloudinary (GRATIS)**

👉 **Vai su:** https://cloudinary.com/users/register_free

Compila il form e conferma la email.

---

### **2️⃣ Ottieni le Credenziali**

Dopo il login, vai alla **Dashboard** e troverai:

```
Cloud name: xxxxxx
API Key: 123456789012345
API Secret: abcdefghijklmnop
```

**IMPORTANTE:** Copia questi 3 valori!

---

### **3️⃣ Configura su Render**

1. Vai su: https://dashboard.render.com
2. Seleziona il servizio **tech-portfoglio-new**
3. Click su **"Environment"** nel menu laterale
4. Click su **"Add Environment Variable"**

Aggiungi QUESTE variabili:

**Variabile 1:**
- **Key:** `FILESYSTEM_DISK`
- **Value:** `cloudinary`

**Variabile 2:**
- **Key:** `CLOUDINARY_CLOUD_NAME`
- **Value:** (il tuo cloud name)

**Variabile 3:**
- **Key:** `CLOUDINARY_API_KEY`
- **Value:** (la tua API key)

**Variabile 4:**
- **Key:** `CLOUDINARY_API_SECRET`
- **Value:** (la tua API secret)

**Variabile 5 (opzionale ma consigliata):**
- **Key:** `CLOUDINARY_URL`
- **Value:** `cloudinary://API_KEY:API_SECRET@CLOUD_NAME`

5. Click su **"Save Changes"**
6. Il servizio si riavvierà automaticamente

---

### **4️⃣ Testa l'Upload**

1. Vai su: https://tech-portfoglio-new.onrender.com/admin
2. Login: admin@example.com / password123
3. Vai su Projects, Skills, o Certifications
4. Carica un'immagine
5. **Dovrebbe funzionare!** ✅

L'immagine sarà salvata su Cloudinary, non su Render!

---

## ✅ Vantaggi

- ✅ **File persistenti** (non spariscono al deploy)
- ✅ **25GB gratis/mese**
- ✅ **CDN automatico** (immagini veloci in tutto il mondo)
- ✅ **Resize automatico** (ottimizzazione immagini)

---

## 🔍 Verificare che Funziona

Dopo aver configurato, nei logs di Render dovresti vedere:
```
FILESYSTEM_DISK=cloudinary
```

E le immagini caricate appariranno nella tua Dashboard Cloudinary!

---

**Fammi sapere quando hai le credenziali e hai configurato Render!** 🚀
