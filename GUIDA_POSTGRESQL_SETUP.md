# 📋 GUIDA STEP-BY-STEP: Creazione Database PostgreSQL

## 🎯 Quello che Stai Per Fare

Creare un database PostgreSQL permanente su Render (gratis) che sostituirà SQLite.

---

## 📝 PASSO 1: Crea Database

### Su Render Dashboard:

1. **Apri:** https://dashboard.render.com

2. **Click sul pulsante blu "New"** (in alto a destra)

3. **Select: "PostgreSQL"**

4. **Compila il form:**
   ```
   Name: tech-portfolio-db
   Database: portfolio_db
   User: portfolio_user
   Region: Frankfurt (o quello più vicino)
   PostgreSQL Version: 16 (default)
   ```

5. **Plan: Free** (già selezionato)

6. **Click: "Create Database"**

7. **Aspetta 30-60 secondi** che si crei

---

## 📝 PASSO 2: Copia URL Database

### Quando database è creato:

1. **Click sul database** `tech-portfolio-db` appena creato

2. **Tab "Info"** (già selezionato)

3. **Scorri giù fino a "Connections"**

4. **Trova: "Internal Database URL"**
   - Sembra tipo: `postgresql://portfolio_user:AbCD1234XyZ...@dpg-xxxxx-a.frankfurt-postgres.render.com/portfolio_db`

5. **Click sull'icona "Copy"** a destra dell'URL

6. **IMPORTANTE:** È l'URL "Internal", NON "External"!

---

## 📝 PASSO 3: Aggiungi al Servizio

1. **Vai su:** Dashboard → Services

2. **Click su:** `tech-portfoglio-new` (il tuo servizio web)

3. **Menu laterale:** Click "Environment"

4. **Click: "Add Environment Variable"**

5. **Compila:**
   ```
   Key: DATABASE_URL
   Value: [INCOLLA QUI L'URL COPIATO]
   ```

6. **Click: "Save Changes"**

---

## ✅ FATTO!

**Quando hai finito, dimmi:**
"Ho aggiunto DATABASE_URL"

**Poi io:**
- Configuro il codice per PostgreSQL
- Faccio deploy
- Testo che funziona
- Dati permanenti! 🎉

---

## ❓ Problemi Comuni

**Non vedo "New" button:**
- Assicurati di essere loggato su Render
- Refresh pagina

**Database non si crea:**
- Aspetta 1-2 minuti
- Refresh pagina

**Non trovo Internal Database URL:**
- Tab "Info"
- Scorri giù
- Sezione "Connections"
- "Internal Database URL" (NON External!)

---

**Inizia con PASSO 1 e dimmi quando hai finito!** 🚀
