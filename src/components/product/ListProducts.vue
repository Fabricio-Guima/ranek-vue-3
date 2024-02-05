<template>
  <section class="produtos-container">
    <div v-for="product in products" :key="product.id">
      <img
        v-if="product.fotos && product.fotos.length > 0"
        :src="product.fotos[0]"
        :alt="product.fotos[0].titulo"
      />
      <p class="preco">{{ product.preco }}</p>
      <h2 class="titulo">{{ product.nome }}</h2>
      <p>{{ product.description }}</p>
    </div>
  </section>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { api } from "@/services/api.js";

const products = ref([]);

const getProducts = () => {
  api.get("/produtos").then((response) => {
    products.value = response.data;
  });
};

onBeforeMount(() => {
  getProducts();
});
</script>

<style lang="scss" scoped></style>
