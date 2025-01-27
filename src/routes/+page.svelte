<div class="container h-screen mx-auto flex justify-center items-center">
    <div class="space-y-10 flex flex-col items-center">
        <h2 class="text-2xl">Welcome to Gab's SvelteKit App!</h2>
        <div class="flex gap-x-4 drop-shadow-lg">
            <a href="/api/auth/login?post_login_redirect_url=/movies" class="btn preset-filled-primary-500">Login</a>
            <a href="/api/auth/register" class="btn preset-filled-primary-500">Signup</a>
        </div>
        <a href="/api/auth/logout" class="btn preset-filled-primary-500">Logout</a>
    </div>
</div>