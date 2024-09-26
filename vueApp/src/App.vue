<template>
  <div class="min-h-screen bg-gray-100">
    <header class="p-4 bg-blue-600 text-white">
      <h1 class="text-3xl">¿Quieres ser un chef reconocido?</h1>
    </header>
    <section class="p-8">
      <h2 class="text-2xl font-semibold mb-4">Lo que incluye el curso:</h2>
      <ul class="list-disc pl-6 space-y-2 text-lg">
        <li>12 módulos con 2 temas cada uno</li>
        <li>Material en PDF</li>
        <li>24 podcasts de las clases teóricas</li>
        <li>Live todos los sábados</li>
      </ul>

      <!-- Botón para inscribirse -->
      <div class="mt-8">
        <router-link to="/form" class="btn btn-primary">Inscribirme ahora</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
git merge master
