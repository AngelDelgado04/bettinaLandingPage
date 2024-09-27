<template>
  <!-- Navbar -->
  <div class="navbar bg-base-100 fixed h-16">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Inicio</a></li>
        <li>
          <a>Sobre mi</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="navbar-end">
    <ul class="menu menu-horizontal px-1 text-lg text-secondary hidden md:flex">
      <li><a>Inicio</a></li>
      <li>
        <a href="">Sobre mi</a>
      </li>
    </ul>
    <router-link to="/form" class="btn btn-secondary rounded-xl">Inscribirme ahora</router-link>
  </div>
</div>

  <!-- Content -->
  <div class= "bg-gray-100 flex w-full flex-wrap pt-12">
    <div class="flex">
    <!-- Text area -->
    <div class="lg:w-1/2 flex px-40 pt-6">
        <article class="prose lg:prose-2xl">
          <h1 class="text-secondary h-auto max-h-40">¿QUIERES SER UN CHEF RECONOCIDO?</h1>
          <h3 class="text-primary">¡Forma parte del nuevo grupo!</h3>
          <p class=" text-secondary text-2xl font-semibold mb-4">Lo que incluye el curso:</p>
          <ul class="text-secondary space-y-2 text-lg">
            <li class="flex items-center">
              <i class="fa-regular fa-square-check text-primary mr-2"></i>
              12 módulos con 2 temas cada uno.
            </li>
            <li class="flex items-center">
              <i class="fa-regular fa-square-check text-primary mr-2"></i>
              Material en PDF.
            </li>
            <li class="flex items-center">
              <i class="fa-regular fa-square-check text-primary mr-2"></i>
              24 podcasts de las clases teóricas.
            </li>
            <li class="flex items-center">
              <i class="fa-regular fa-square-check text-primary mr-2"></i>
              Live todos los sábados.
            </li>
          </ul>
        </article>
      </div>
    <!-- Image area -->
    <div class="lg:w-1/2 flex items-center justify-center">
      <div class="avatar">
        <div class="w-80 rounded-full bg-accent ">
          <img src="./assets/bettina.png" />
        </div>
      </div>
    </div>
  </div>

    <!-- Button area -->
    <div class="flex justify-center my-8 w-full">
      <router-link to="/form" class="btn btn-secondary rounded-xl">Inscribirme ahora</router-link>
    </div>
  </div>
  <footer>
    <address>
      To any concern, please contact me at:
      <a href="mailto:angeleduardo200213@gmail.com">angeleduardo200213@gmail.com</a>
    </address>
  </footer>
</template>

<script>
export default {
  name: 'App'
}
</script>