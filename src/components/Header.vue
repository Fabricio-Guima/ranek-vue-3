<template>
  <header>
    <nav>
      <RouterLink to="/" class="logo">
        <img src="@/assets/svg/ranek.svg" alt="Ranek ecommerce" />
      </RouterLink>
      <RouterLink class="btn" to="/login">Vender / Login</RouterLink>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 90px;
}
</style>
