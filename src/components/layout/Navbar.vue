<template>
  <nav class="w-full fixed top-0 z-50 bg-[var(--bg)] border-b border-black/5">

    <div class="container mx-auto flex items-center justify-between h-20 px-6">

      <!-- Logo -->
      <div class="font-medium text-2xl tracking-wide">
        LOLO
      </div>

      <!-- Links -->
      <div class="hidden md:flex items-center gap-8 text-sm font-medium">
        <RouterLink to="/" class="link-special">Home</RouterLink>
        <RouterLink to="/about" class="link-special">About</RouterLink>
        <RouterLink to="/menu" class="link-special">Menu</RouterLink>
        <RouterLink to="/gallery" class="link-special">Gallery</RouterLink>
        <RouterLink to="/booking" class="link-special">Book a Table</RouterLink>
      </div>

      <!-- Mobile -->
      <button class="md:hidden text-sm font-medium">
        Nav
      </button>

    </div>
  </nav>
</template>