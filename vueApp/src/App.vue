<template>
  <!-- <nav class="fixed top-0 left-0 right-0 w-full z-50">
    <div class="container mx-auto flex justify-end">
      <ul class="menu menu-horizontal flex bg-orange-900 space-x-8">
        <li><a href="#home" class="text-white hover:text-gray-400">Home</a></li>
        <li><a href="#about" class="text-white hover:text-gray-400">About</a></li>
        <li><a href="#services" class="text-white hover:text-gray-400">Services</a></li>
        <li><a href="#contact" class="text-white hover:text-gray-400">Contact</a></li>
      </ul>
    </div>
  </nav> -->
  <div class="min-h-screen bg-gray-100 flex w-full">
    <div class="lg:w-1/2 p-10 flex w-6">
      <section class="p-8">
        <article class="prose lg:prose-2xl">
          <h1 class="text-secondary">¿QUIERES SER UN CHEF RECONOCIDO?</h1>
          <h3 class="text-primary">¡Forma parte del nuevo grupo!</h3>
          <p class=" text-secondary text-2xl font-semibold mb-4">Lo que incluye el curso:</p>
          <ul class="text-secondary list-disc pl-6 space-y-2 text-lg">
            <li>12 módulos con 2 temas cada uno</li>
            <li>Material en PDF</li>
            <li>24 podcasts de las clases teóricas</li>
            <li>Live todos los sábados</li>
          </ul>
        </article>
      </section>

    <div class="lg:w-1/2 flex items-center p-8 m-10 ">
      <div class="avatar">
        <div class="w-80 rounded-full bg-accent">
          <img src="./assets/bettina.png" />
        </div>
      </div>
    </div>
    </div>

          
    <div class="flex justify-center mt-8 w-full">
      <router-link to="/form" class="btn btn-secondary rounded-xl">Inscribirme ahora</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>