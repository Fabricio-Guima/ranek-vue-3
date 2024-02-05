<template>
  <section class="produtos-container">
    <div v-if="products && products.length > 0" class="produtos">
      <div v-for="product in products" :key="product.id" class="produto">
        <RouterLink to="/">
          <img
            v-if="product.fotos && product.fotos.length > 0"
            :src="product.fotos[0]"
            :alt="product.fotos[0].titulo"
          />
          <p class="preco">{{ product.preco }}</p>
          <h2 class="titulo">{{ product.nome }}</h2>
          <p>{{ product.descricao }}</p>
        </RouterLink>
      </div>
    </div>
    <div v-else-if="products">
      <p class="sem-resultados">
        Busca sem resultados. Tente buscar outro termo.
      </p>
    </div>
  </section>
</template>

<script setup>
import { onBeforeMount, ref, computed, watch } from "vue";
import { api } from "@/services/api.js";
import { useRouter, useRoute } from "vue-router";
import { serialize } from "@/helpers/helpers.js";

const router = useRouter();
const route = useRoute();

const products = ref([]);

const url = computed(() => {
  return "/produtos/?_limit=10" + serialize(route.query);
});

const getProducts = () => {
  api.get(url.value).then((response) => {
    products.value = response.data;
  });
};

onBeforeMount(() => {
  getProducts();
});

watch(url, (value, oldValue) => {
  getProducts();
});
</script>

<style scoped>
.produtos-container {
  max-width: 1000px;
  margin: 0 auto;
}
.produtos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin: 30px;
}

.produto {
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  padding: 10px;
  border-radius: 4px;
  transition: all 0.2s;
}
.produto:hover {
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  transform: scale(1.1);
  position: relative;
  z-index: 1;
}
.produto img {
  border-radius: 4px;
  margin-bottom: 20px;
}
.titulo {
  margin-bottom: 10px;
}
.preco {
  color: #e80;
  font-weight: bold;
}
.sem-resultados {
  text-align: center;
}
</style>
