<template>
  <div>
    <h1>View de User</h1>
    <p>{{ userStore.user }}</p>
  </div>
</template>

<script setup>
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
</script>

<style scoped></style>
