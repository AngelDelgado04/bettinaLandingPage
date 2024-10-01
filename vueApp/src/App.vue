<template>
  <!-- Navbar -->
  <div class="navbar bg-base-100 fixed h-16">
  <div class="navbar-start">
    <div class="flex w-52">
      <img src="./assets/Logo BW.png" alt="">
    </div>
  </div>
  <div class="navbar-end space-x-4">
    <ul class="menu menu-horizontal px-1 text-lg text-secondary hidden md:flex">
      <li><router-link to ="/">Inicio</router-link></li>
      <li>
        <router-link to ="/about">Sobre mi</router-link>
      </li>
    </ul>
    <router-link to="/form" class="btn btn-secondary rounded-xl">Inscribirme ahora</router-link>
  </div>
</div>

<!-- Content -->
<router-view />

  <!-- Footer -->
  <footer class="flex p-4 bg-white">
    <address>
      For any questions, please contact me at:
      <a href="mailto:angeleduardo200213@gmail.com">angeleduardo200213@gmail.com</a>
    </address>
  </footer>
</template>

<script>

export default {
  name: 'App'
}
</script>