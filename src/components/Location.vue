<template>
  <section class="py-20 w-full">
    
    <div class="container mx-auto px-6">
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <!-- Left -->
        <div>
          <h1 class="text-4xl font-semibold text-left leading-tight">
              Visit Us in Stevenage
          </h1>
          

          <p class="mt-6 text-sm text-muted leading-relaxed">
             Located in the heart of Stevenage, Lolo Café Bistro is your local spot for coffee, breakfast, and relaxed dining.
          </p>

          <div class="mt-10">
            <RouterLink to="/contact"class="btn-primary inline-flex">
              Get in touch
            </RouterLink>
          </div>
        </div>

        <!-- Right -->
        <div class="relative">
          <div class="aspect-[4/3] w-full rounded-xl overflow-hidden bg-black/5 flex items-center justify-center">
            
            <!-- Replace this with an image later -->
            <span class="text-black/40 text-sm">
              Image / Map / Interior Photo
            </span>

          </div>
        </div>

      </div>

    </div>

  </section>
</template>