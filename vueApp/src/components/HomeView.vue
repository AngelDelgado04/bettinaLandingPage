<template>
  <div class= "bg-gray-100 flex w-full flex-wrap">
    <div class="flex">
    <!-- Text area -->
    <div class="lg:w-1/2 flex px-40 pt-20">
        <article class="prose lg:prose-2xl">
          <h1 class="text-secondary h-auto max-h-40 font-parisienne">¿Quieres ser un chef reconocido?</h1>
          <h3 class="text-primary">¡Forma parte del nuevo grupo!</h3>
          <p class=" text-secondary text-2xl font-semibold mb-4">Lo que incluye el curso:</p>
          <ul class="text-secondary space-y-2 text-lg">
            <li class="flex items-center">
              <i class="fa-regular fa-square-check text-secondary mr-2"></i>
              12 módulos con 2 temas cada uno.
            </li>
            <li class="flex items-center">
              <i class="fa-regular fa-square-check text-secondary mr-2"></i>
              Material en PDF.
            </li>
            <li class="flex items-center">
              <i class="fa-regular fa-square-check text-secondary mr-2"></i>
              24 podcasts de las clases teóricas.
            </li>
            <li class="flex items-center">
              <i class="fa-regular fa-square-check text-secondary mr-2"></i>
              Live todos los sábados.
            </li>
          </ul>
        </article>
      </div>
      
    <!-- Image area -->
    <div class="lg:w-1/2 flex items-center justify-center flex-wrap pt-16">
      <div class="avatar">
        <div class=" w-96 rounded-full bg-accent ">
          <img src="../assets/bettina.png" />
        </div>
      </div>
      <div>
        <p class="prose prose-xl italic">Ayudo a cocineros a alcanzar sus sueños y desarrollar sus proyectos</p>
      </div>
    </div>
  </div>

    <!-- Button area -->
    <div class="flex justify-center my-8 w-full">
      <router-link to="/form" class="btn btn-secondary rounded-xl">Inscribirme ahora</router-link>
      <!-- <router-view></router-view> -->
    </div>
  </div>
</template>

<script>
    export default {
        name: 'HomeView',
    };
</script>