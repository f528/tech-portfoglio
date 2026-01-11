#!/usr/bin/env bash
# Render Build Script for Laravel

set -e

echo "🚀 Starting Laravel deployment on Render..."

# Navigate to backend directory
cd backend

# Install composer dependencies
echo "📦 Installing Composer dependencies..."
composer install --no-dev --optimize-autoloader --no-interaction

# Generate application key if not set
if [ -z "$APP_KEY" ]; then
    echo "🔑 Generating application key..."
    php artisan key:generate --force
fi

# Clear and cache config
echo "⚙️  Caching configuration..."
php artisan config:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "✅ Build completed successfully!"
