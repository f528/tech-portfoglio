# 🛡 Portfolio Security Architecture

As a Cybersecurity Specialist's portfolio, this project implements a multi-layered security strategy to ensure data integrity, prevent unauthorized access, and protect against common web vulnerabilities.

## 🛡 Layer 1: Network & Protocol

### Secure Transport (HSTS)
The application enforces HTTPS using **HTTP Strict Transport Security (HSTS)** with a 2-year duration, including subdomains and preloading support.
- **Header**: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`

### DNS Prefetch Control
Reduces DNS resolved latency while preventing potential information leakage by disabling unintentional DNS prefetching.

## 🛡 Layer 2: Browser Security Headers

Both the Next.js Frontend and Laravel Backend are protected by a strict set of security headers:

| Header | Purpose | Configuration |
| :--- | :--- | :--- |
| **X-Content-Type-Options** | Prevents MIME-sniffing | `nosniff` |
| **X-Frame-Options** | Protects against Clickjacking | `SAMEORIGIN` |
| **X-XSS-Protection** | Blocks reflected XSS attacks | `1; mode=block` |
| **Referrer-Policy** | Controls sensitive info in referrers | `origin-when-cross-origin` |
| **Permissions-Policy** | Disables unused browser features | `camera=(), microphone=(), geolocation=()` |

## 🛡 Layer 3: Content Security Policy (CSP)

A robust CSP is implemented on both ends to mitigate XSS and data injection attacks.

- **Frontend**: Restricts resource loading to `self` and trusted domains (Laravel Backend, Unsplash).
- **Backend**: Restricts its own responses to trust only the local development environment and its own resources.

```javascript
// Example CSP (Simplified)
default-src 'self'; 
script-src 'self' 'unsafe-eval' 'unsafe-inline'; 
style-src 'self' 'unsafe-inline'; 
img-src 'self' blob: data: http://127.0.0.1:8000;
```

## 🛡 Layer 4: Backend Hardening (Laravel & Filament)

### Cross-Origin Resource Sharing (CORS)
Strictly configured to only allow requests from the Next.js frontend, preventing unauthorized domains from consuming the Portfolio API.

### Rate Limiting (Throttle)
The `/api/portfolio` endpoint is protected by Laravel's built-in throttle middleware to prevent Brute Force and DoS attempts.

### Dashboard Authentication
The Filament administration panel is secured by Laravel's default authentication system, ensuring only authorized users can modify the site's content.

### Mass-Assignment Protection
Models use carefully managed property guarding to prevent injection of unauthorized fields during database operations.

## 🛡 Layer 5: Data Integrity

- **API Versioning**: Stateless REST architecture for reliable data delivery.
- **Validation**: Strict input validation on all Dashboard forms via Filament schemas.
- **Sanitization**: Automatic HTML escaping provided by Blade (backend) and React (frontend).

---
*Verified & Documented by Antigravity*
