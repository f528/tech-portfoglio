<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/admin');
});

Route::get('/cv/download', [\App\Http\Controllers\CVController::class, 'download'])->name('cv.download');
