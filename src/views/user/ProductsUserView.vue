<template>
  <div>
    <p>Lista de Produtos</p>
    <p v-if="userStore.user">
      {{ userStore.user }}
    </p>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
