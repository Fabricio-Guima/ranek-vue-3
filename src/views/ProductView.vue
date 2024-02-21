<template>
  <section>
    <div v-if="product" class="produto">
      <ul class="fotos" v-if="product.fotos && product.fotos.length > 0">
        <li v-for="(foto, index) in product.fotos" :key="'fotos' + index">
          <img :src="foto?.src" :alt="foto?.titulo" />
        </li>
      </ul>
      <div class="info">
        <h1>{{ product.nome }}</h1>
        <p class="preco">{{ formattedPrice(product.preco) }}</p>
        <p class="descricao">{{ product.descricao }}</p>

        <transition mode="out-in" v-if="product.vendido === 'false'">
          <button v-if="!finalizar" @click="finalizar = !finalizar" class="btn">
            Comprar
          </button>
          <FinalizePurchase v-else :product="product" />
        </transition>
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
import FinalizePurchase from "@/components/product/FinalizePurchase.vue";

import { formattedPrice } from "@/helpers/convertToBRL.js";

const props = defineProps({
  id: String,
});

const product = ref(null);
const finalizar = ref(false);

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
.fotos {
  grid-row: 1 / 3;
}

.info {
  position: sticky;
  top: 20px;
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

img {
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(30, 60, 60, 0.2);
  border-radius: 4px;
}

.btn {
  margin-top: 60px;
  width: 200px;
}
</style>
