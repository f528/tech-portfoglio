FROM php:8.3-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    sqlite3 \
    libsqlite3-dev

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_sqlite mbstring exif pcntl bcmath gd

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app

# Copy application files
COPY . /app

# Install dependencies
WORKDIR /app/backend
RUN composer install --no-dev --optimize-autoloader --no-interaction

# Create SQLite database directory
RUN mkdir -p /app/backend/database && \
    touch /app/backend/database/database.sqlite && \
    chmod -R 775 /app/backend/database

# Set permissions
RUN chown -R www-data:www-data /app/backend/storage /app/backend/bootstrap/cache

# Expose port
EXPOSE 8000

# Start script
COPY docker-start.sh /usr/local/bin/start
RUN chmod +x /usr/local/bin/start

CMD ["/usr/local/bin/start"]
