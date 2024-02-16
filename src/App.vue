<template>
  <Header />

  <main id="main">
    <transition mode="out-in">
      <router-view />
    </transition>
  </main>
  <Footer />
</template>

<style>
nav a.router-link-exact-active {
  background: #87f;
  color: #fff;
}

nav a.router-link-exact-active:hover {
  background: #87f;
  color: #fff;
}
</style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
