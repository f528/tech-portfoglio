# 🔍 Debug Filament CSS Issue

Esegui questo comando per vedere quali URL vengono generate per gli assets:

```bash
# Nel browser, apri:
https://tech-portfoglio-new.onrender.com/admin

# Poi apri Developer Tools (F12)
# Vai su Network tab
# Refresh la pagina
# Cerca file .css che falliscono con 404
```

Probabilmente i CSS puntano a URL sbagliate tipo:
- ❌ `http://localhost/css/...`  
- ✅ `https://tech-portfoglio-new.onrender.com/css/...`

Il problema è che **APP_URL non è configurato** su Render!
