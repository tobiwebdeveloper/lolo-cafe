<template>
  <section class="md:min-h-screen min-h-[70vh] flex items-center pt-20">
    
    <div class="container mx-auto text-center max-w-3xl">

      <h1 class="text-5xl">
        Lolo Café Bistro
      </h1>

      <p v-reveal="50" class="mt-2 text-muted">
        Fresh coffee. Simple food. Real flavour.
      </p>

      <div v-reveal="50" class="mt-6 flex items-center justify-center gap-4">
        <RouterLink class="btn-primary inline-flex" to="/menu">
          View menu
        </RouterLink>

        <RouterLink class="btn-secondary inline-flex" to="/booking">
          Book table
        </RouterLink>
      </div>

    </div>

  </section>
</template>