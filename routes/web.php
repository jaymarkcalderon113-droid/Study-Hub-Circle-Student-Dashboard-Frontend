<?php

use Illuminate\Support\Facades\Route;

// Public landing page (React: resources/js/pages/welcome.tsx)
Route::inertia('/', 'welcome')->name('home');

/*
|--------------------------------------------------------------------------
| STUDENT area  (role:student)
|--------------------------------------------------------------------------
| Phase 1: these pages render React with mock data. Phase 2 will replace
| Route::inertia() with real controllers.
*/
Route::middleware(['auth', 'role:student'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
    Route::inertia('my-profile', 'my-profile')->name('my-profile');
    Route::inertia('findgroups', 'findgroups')->name('findgroups');
    Route::inertia('mygroups', 'mygroups')->name('mygroups');
    Route::inertia('messages', 'messages')->name('messages');
    Route::inertia('schedule', 'schedule')->name('schedule');
    Route::inertia('notes', 'notes')->name('notes');
    Route::inertia('tasks', 'tasks')->name('tasks');
    Route::inertia('progress', 'progress')->name('progress');
    Route::inertia('ratings', 'ratings')->name('ratings');
    Route::inertia('notifications', 'notifications')->name('notifications');
});

/*
|--------------------------------------------------------------------------
| ADMIN area  (role:admin)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.')->group(function () {
    Route::inertia('dashboard', 'admin/dashboard')->name('dashboard');
    Route::inertia('users', 'admin/users')->name('users');
    Route::inertia('groups', 'admin/groups')->name('groups');
});

require __DIR__.'/settings.php';
