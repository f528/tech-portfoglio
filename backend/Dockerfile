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
    libsqlite3-dev \
    libzip-dev \
    libicu-dev

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions (including intl for Filament)
RUN docker-php-ext-install pdo_sqlite mbstring exif pcntl bcmath gd zip intl

# Configure PHP for file uploads
RUN echo "upload_max_filesize = 10M" > /usr/local/etc/php/conf.d/uploads.ini && \
    echo "post_max_size = 12M" >> /usr/local/etc/php/conf.d/uploads.ini && \
    echo "memory_limit = 256M" >> /usr/local/etc/php/conf.d/uploads.ini && \
    echo "max_execution_time = 60" >> /usr/local/etc/php/conf.d/uploads.ini

# Get latest Composer (for artisan commands)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /app

# Copy all application files
COPY . .

# Set composer environment variables
ENV COMPOSER_MEMORY_LIMIT=-1
ENV COMPOSER_ALLOW_SUPERUSER=1

# Install dependencies - ignore platform reqs to avoid build-time checks
# The extensions are installed, but composer might check for different versions
RUN composer install --no-dev --optimize-autoloader --no-interaction --prefer-dist --ignore-platform-reqs

# Create SQLite database directory
RUN mkdir -p /app/database && \
    touch /app/database/database.sqlite && \
    chmod -R 775 /app/database

# Create storage directories and set permissions
RUN mkdir -p /app/storage/app/public && \
    mkdir -p /app/storage/framework/{cache,sessions,views} && \
    mkdir -p /app/storage/logs && \
    chmod -R 775 /app/storage && \
    chown -R www-data:www-data /app/storage /app/bootstrap/cache

# Expose port
EXPOSE 8000

# Start script
COPY docker-start.sh /usr/local/bin/start
RUN chmod +x /usr/local/bin/start

CMD ["/usr/local/bin/start"]
