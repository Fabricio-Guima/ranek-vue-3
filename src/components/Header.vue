<template>
  <header>
    <nav>
      <RouterLink to="/" class="logo">
        <img src="@/assets/svg/ranek.svg" alt="Ranek ecommerce" />
      </RouterLink>
      <RouterLink
        v-if="userStore.isLogged"
        class="btn"
        :to="{ name: 'user.products' }"
        >{{ name }}</RouterLink
      >
      <RouterLink v-else class="btn" to="/login">Vender / Login</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { computed } from "vue";

const userStore = useUserStore();

const name = computed(() => userStore.user.nome?.replace(/ .*/, ""));
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo,
.logo:hover {
  padding: 10px 0;
  background: #fff;
}

.logo img {
  width: 90px;
  background: #fff;
}
</style>
