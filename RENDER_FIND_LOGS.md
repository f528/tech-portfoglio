# 🔍 Come Trovare i Log del Build su Render

## ❗ Problema: "No logs in the past 7 days"

Questo messaggio appare perché stai guardando i **Runtime Logs** (quando l'app gira), ma il tuo servizio non è mai partito perché il **build** fallisce prima.

---

## ✅ SOLUZIONE: Guarda i Build Logs

### **Metodo 1: Nella pagina Events**

1. **Nel menu laterale sinistro**, click su **"Events"** (non "Logs"!)
2. Vedrai la lista dei deploy con:
   ```
   Deploy failed for c4d7ce8: ...
   ```
3. **Click su quella riga** del deploy fallito
4. Si aprirà una finestra con i **build logs completi**
5. Cerca l'errore (di solito verso la fine)

### **Metodo 2: Nella pagina del Deploy**

1. Nella pagina principale del servizio, troverai **"Latest Deploy"** 
2. Click su **"View Details"** o sul commit hash
3. Vedrai i log completi del build

---

## 🎯 Cosa Cercare nei Log

Cerca queste sezioni:

```bash
Step X/XX : RUN composer install...
 ---> Running in xxxxx
```

Poi guarda cosa viene dopo. L'errore sarà lì.

**Errori comuni:**
- `Out of memory` → risolto con COMPOSER_MEMORY_LIMIT=-1
- `Failed to download` → problema di rete/dipendenze
- `Class not found` → problema con post-install scripts

---

## 💡 Nel Frattempo

Ho semplificato il Dockerfile con una **strategia fallback**:

```dockerfile
RUN composer install --no-dev --optimize-autoloader || \
    composer install --no-dev --no-scripts ...
```

Se il primo comando fallisce, prova senza gli script di post-install.

---

**Vai su "Events" → Click sul deploy fallito → Condividi l'errore che vedi!** 🔍
