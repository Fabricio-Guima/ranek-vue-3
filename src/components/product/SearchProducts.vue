<template>
  <form action="" @submit.prevent="getProducts">
    <input type="text" name="search" id="search" v-model="search" />
    <button type="submit" id="seek">Buscar</button>
    {{ search }}
  </form>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const search = ref("");

const getProducts = () => {
  router.push({
    query: {
      q: search.value,
    },
  });
  console.log("getProducts");
};
</script>

<style lang="scss" scoped></style>
