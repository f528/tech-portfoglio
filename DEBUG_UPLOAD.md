# 🔍 DEBUG UPLOAD - Checklist Sistematica

## ❓ Domande Diagnostiche

**Rispondi a queste domande per capire il problema:**

### 1. Dove stai provando a caricare?
- [ ] Projects
- [ ] Profile (Avatar)
- [ ] Certifications
- [ ] Altro

### 2. Cosa succede ESATTAMENTE quando clicchi per caricare?
- [ ] A) Si apre il file picker, selezioni file, ma non succede nulla
- [ ] B) Vedi un messaggio di errore rosso (quale?)
- [ ] C) Vedi la barra di caricamento ma poi scompare
- [ ] D) File sembra caricarsi ma non appare nell'anteprima
- [ ] E) La pagina si ricarica ma l'immagine non c'è

### 3. Tipo e dimensione file
- Formato: JPG / PNG / altro?
- Dimensione: ____ KB/MB

### 4. Deploy Render
- Il servizio è "Live" su Render Dashboard? SI / NO
- Quando è stato l'ultimo deploy? ____ minuti fa

---

## 🧪 Test Rapidi

### Test 1: Verifica Environment Variable
1. Su Render Dashboard → Environment
2. Conferma: `FILESYSTEM_DISK=public` ✓

### Test 2: Verifica Storage Link
Render Logs dovrebbe mostrare:
```
🔗 Linking storage...
```

### Test 3: File Size Test
Prova con file MOLTO piccoli:
- Scarica immagine < 100KB
- Prova upload

---

## 🔧 Soluzioni Comuni

### Se vedi errore "The file must be an image"
- Usa solo JPG o PNG
- Max 5MB

### Se vedi errore "413 Payload Too Large"
- File troppo grande
- Riduci sotto 5MB

### Se non vedi NESSUN errore ma file non si carica
- Problema JavaScript/browser
- Prova browser diverso
- Cancella cache browser (Ctrl+Shift+Del)

---

**Rispond a queste domande così posso aiutarti meglio!**
