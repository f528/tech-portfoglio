<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\User;

class CreateAdminUser extends Command
{
    protected $signature = 'admin:create';
    protected $description = 'Create an admin user for Filament';

    public function handle()
    {
        $email = 'admin@example.com';
        $password = 'password123';

        // Check if admin already exists
        if (User::where('email', $email)->exists()) {
            $this->error('❌ Admin user already exists!');
            $this->info('📧 Email: ' . $email);
            return 1;
        }

        // Create admin user
        User::create([
            'name' => 'Admin',
            'email' => $email,
            'password' => bcrypt($password),
        ]);

        $this->info('');
        $this->info('🎉 Admin user created successfully!');
        $this->info('');
        $this->info('📧 Email: ' . $email);
        $this->info('🔑 Password: ' . $password);
        $this->info('');
        $this->info('🔗 Login at: https://tech-portfoglio-new.onrender.com/admin');
        $this->info('');
        $this->warn('⚠️  IMPORTANT: Change the password after first login!');
        
        return 0;
    }
}
