# 📧 Guida alla Configurazione Email

Questa guida spiega come configurare il sistema di invio email per il tuo Portfolio, permettendoti di ricevere i messaggi dei clienti direttamente sulla tua casella di posta.

## 🛠️ Configurazione Backend (Laravel)

Per attivare l'invio delle email, devi modificare il file `.env` situato nella cartella `backend/`.

### 1. Opzione Consigliata: Hotmail / Outlook
Utilizzando il tuo indirizzo `faouzi_ee@hotmail.it`.

> [!IMPORTANT]
> **Sicurezza**: Non usare la tua password normale. Devi generare una **"Password per le app"** dalle impostazioni di sicurezza del tuo account Microsoft.

Modifica queste righe nel file `.env`:

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.office365.com
MAIL_PORT=587
MAIL_USERNAME=faouzi_ee@hotmail.it
MAIL_PASSWORD=tua_password_per_le_app_qui
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="faouzi_ee@hotmail.it"
MAIL_FROM_NAME="${APP_NAME}"
```

---

### 2. Opzione Alternativa: Gmail
Se decidi di usare un account Gmail.

> [!NOTE]
> Anche per Gmail è obbligatorio generare una **"Password per le app"** nelle impostazioni dell'Account Google (sotto Sicurezza > Verifica in due passaggi).

```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_USERNAME=tuo_indirizzo@gmail.com
MAIL_PASSWORD=tua_password_per_le_app_qui
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS="tuo_indirizzo@gmail.com"
```

---

### 3. Opzione per Test: Mailtrap (Gratuito)
Perfetto per testare il design delle email senza inviare messaggi reali.

1. Vai su [Mailtrap.io](https://mailtrap.io/) e crea un account gratuito.
2. Crea una "Inboxes" e seleziona "Laravel 9+" dal menu a tendina.
3. Copia i parametri forniti nel tuo file `.env`.

---

## 🛰️ Verifica della Configurazione

Dopo aver salvato il file `.env`, segui questi passaggi per assicurarti che il sistema legga i nuovi dati:

1. **Pulisci la cache** (da terminale nella cartella backend):
   ```bash
   php artisan config:clear
   ```

2. **Testa il Modulo**:
   Vai sulla pagina del tuo portfolio, compila il modulo "Contact" e clicca su **Transmit Message**.

3. **Controlla la Posta**:
   Se hai usato Hotmail/Gmail, controlla la cartella **Posta in Arrivo** (e anche lo **Spam** per la prima volta). Se hai usato Mailtrap, controlla la tua inbox virtuale sul loro sito.

## 🛡️ Troubleshooting (Risoluzione Problemi)

- **Errore di Connessione**: Verifica che la porta (587 o 465) non sia bloccata dal tuo firewall o provider internet.
- **Autenticazione Fallita**: Assicurati che la "Password per le app" sia corretta e che non ci siano spazi vuoti nel file `.env`.
- **Email non arriva**: Controlla i log in `backend/storage/logs/laravel.log` per vedere l'errore specifico inviato dal server di posta.

---
*Documentazione generata per Fouzi Portfolio System • 2026*
