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
  <footer>
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