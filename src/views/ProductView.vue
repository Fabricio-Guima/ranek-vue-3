<template>
  <section>
    <div v-if="product != null" class="produto">
      <ul class="fotos" v-if="product.fotos">
        <li v-for="(foto, index) in product.fotos" :key="index">
          <img :src="foto.src" :alt="foto.titulo" />
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.nome }}</h1>
        <p class="preco">{{ formatNumberToPtBr(product.preco) }}</p>
        <p class="descricao">{{ product.descricao }}</p>
        <button class="btn" v-if="product.vendido === 'false'">Comprar</button>
        <button v-else class="btn" disabled>Produto vendido</button>
      </div>
    </div>
    <LoadingPage v-else />
  </section>
</template>

<script setup>
import { api } from "@/services/api";
import { computed, onBeforeMount, ref } from "vue";
import LoadingPage from "@/components/LoadingPage.vue";
import { formatNumberToPtBr } from "@/helpers/convertToBRL.js";

const props = defineProps({
  id: String,
});

const product = ref(null);

const getProduct = () => {
  api
    .get(`/produtos/${props.id}`)
    .then((response) => (product.value = response.data));
};

onBeforeMount(() => {
  getProduct();
});
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  max-width: 900px;
  padding: 60px 20px;
  margin: 0 auto;
}
.preco {
  color: #e80;
  font-weight: bold;
  font-size: 1.5rem;
  margin-bottom: 40px;
}
.descricao {
  font-size: 1.2rem;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
