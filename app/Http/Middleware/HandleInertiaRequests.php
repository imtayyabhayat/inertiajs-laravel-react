<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     */

    public function share(Request $request)
    {
        return array_merge(parent::share($request), [

            // Synchronously
            'appName' => config('app.name'),
            'base_url' => config('app.url'),
            'errors' => function () {
                return session()->get('errors') ? session()->get('errors')->getBag('default')->getMessages() : (object) [];
            },

            // Lazily
            // 'auth.user' => fn () => $request->user()
            //     ? $request->user()->only('id', 'name', 'email')
            //     : null,
        ]);
    }
}
