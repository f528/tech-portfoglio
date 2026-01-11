#!/usr/bin/env bash  
# Render Start Script for Laravel

set -e

echo "🚀 Starting Laravel application..."

# Navigate to backend directory
cd backend

# Run migrations
echo "🗄️  Running database migrations..."
php artisan migrate --force

# Create storage link
echo "🔗 Creating storage symbolic link..."
php artisan storage:link || true

# Start PHP built-in server
echo "🌐 Starting PHP server on port $PORT..."
php artisan serve --host=0.0.0.0 --port=$PORT
