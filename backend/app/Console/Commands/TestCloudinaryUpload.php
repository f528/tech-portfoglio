<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

class TestCloudinaryUpload extends Command
{
    protected $signature = 'cloudinary:test';
    protected $description = 'Test Cloudinary upload functionality';

    public function handle()
    {
        $this->info('🧪 Testing Cloudinary Upload...');
        $this->newLine();

        // 1. Check environment variables
        $this->info('1️⃣ Checking Environment Variables:');
        $cloudName = config('cloudinary.cloud_name');
        $apiKey = config('cloudinary.api_key');
        $apiSecret = config('cloudinary.api_secret');

        if (!$cloudName || !$apiKey || !$apiSecret) {
            $this->error('❌ Cloudinary credentials NOT configured!');
            $this->error('Missing: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, or CLOUDINARY_API_SECRET');
            return 1;
        }

        $this->info("✅ Cloud Name: {$cloudName}");
        $this->info("✅ API Key: " . substr($apiKey, 0, 4) . '...');
        $this->info("✅ API Secret: " . (strlen($apiSecret) > 0 ? 'SET' : 'NOT SET'));
        $this->newLine();

        // 2. Check disk configuration
        $this->info('2️⃣ Checking Disk Configuration:');
        $defaultDisk = config('filesystems.default');
        $this->info("Default disk: {$defaultDisk}");

        $cloudinaryConfig = config('filesystems.disks.cloudinary');
        if (!$cloudinaryConfig) {
            $this->error('❌ Cloudinary disk NOT configured in filesystems.php!');
            return 1;
        }
        $this->info('✅ Cloudinary disk configured');
        $this->newLine();

        // 3. Test disk driver
        $this->info('3️⃣ Testing Disk Driver:');
        try {
            $disk = Storage::disk('cloudinary');
            $this->info('✅ Cloudinary disk driver loaded');
        } catch (\Exception $e) {
            $this->error('❌ Failed to load Cloudinary disk driver!');
            $this->error($e->getMessage());
            return 1;
        }
        $this->newLine();

        // 4. Test simple upload
        $this->info('4️⃣ Testing File Upload:');
        try {
            // Create a small test image
            $testContent = base64_decode('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==');
            $testPath = storage_path('app/test-upload.png');
            file_put_contents($testPath, $testContent);

            // Try upload
            $uploadedPath = $disk->put('test', new UploadedFile($testPath, 'test.png'));

            if ($uploadedPath) {
                $this->info("✅ Upload successful!");
                $this->info("Path: {$uploadedPath}");

                // Get URL
                $url = $disk->url($uploadedPath);
                $this->info("URL: {$url}");

                // Clean up test file
                unlink($testPath);

                $this->newLine();
                $this->info('🎉 CLOUDINARY IS WORKING!');
                return 0;
            } else {
                $this->error('❌ Upload failed - no path returned');
                return 1;
            }
        } catch (\Exception $e) {
            $this->error('❌ Upload failed with exception!');
            $this->error($e->getMessage());
            $this->error($e->getTraceAsString());
            return 1;
        }
    }
}
