<template>
  <Header />

  <main id="main">
    <transition mode="out-in">
      <RouterView />
    </transition>
  </main>
  <Footer />
</template>

<style scoped>
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
