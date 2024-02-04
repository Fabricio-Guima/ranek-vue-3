<template>
  <section>
    <h1>Compre ou Venda</h1>
    <SearchProducts />
    <ListProducts />
  </section>
</template>

<script setup>
import SearchProducts from "@/components/product/SearchProducts.vue";
import ListProducts from "@/components/product/ListProducts.vue";
</script>

<style scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  margin-top: 40px;
  text-align: center;
}
</style>
