# 📸 Formato e Dimensioni Foto Accettate

## ✅ Formati Supportati

**Per TUTTE le immagini:**
- ✅ **JPG / JPEG** (consigliato)
- ✅ **PNG**
- ✅ **GIF**
- ✅ **WebP**

❌ **NON supportati:**
- ❌ BMP
- ❌ TIFF
- ❌ SVG (per sicurezza)

---

## 📏 Dimensioni Massime

**File Size:** Massimo **5 MB** per immagine

**Dimensioni consigliate:**
- **Avatar/Profile:** 500x500px
- **Project Images:** 1200x800px
- **Certification Badges:** 400x400px

---

## 🔧 Se Non Riesci a Upload

### **Problema 1: Foto troppo grande**

**Soluzione:** Riduci la dimensione prima di caricare
- Usa un tool online: https://tinypng.com
- Oppure ridimensiona con un editor

### **Problema 2: Formato non supportato**

**Soluzione:** Converti in JPG o PNG
- Online: https://image.online-convert.com/convert-to-jpg

### **Problema 3: Errore generico**

Se hai configurato **Cloudinary**, assicurati che:
1. `FILESYSTEM_DISK=cloudinary` è impostato su Render
2. Le credenziali Cloudinary sono corrette
3. Il servizio Render è riavviato dopo aver aggiunto le variabili

Se **NON** hai configurato Cloudinary:
- L'upload funzionerà ma le foto spariranno al prossimo deploy
- Per ora è OK per testare il pannello admin

---

## ✅ Test Upload

1. Vai su: https://tech-portfoglio-new.onrender.com/admin/projects
2. Click "New Project"  
3. Carica un'immagine JPG < 5MB
4. Salva

Se funziona, vedrai l'immagine nella tabella!

---

**Che errore specifico vedi quando provi a caricare?** Mandami screenshot o il messaggio di errore!
