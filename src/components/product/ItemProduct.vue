<template>
  <div class="produto" v-if="product">
    <router-link
      class="produto-img"
      :to="{ name: 'product', params: { id: product.id } }"
    >
      <img
        v-if="product.fotos && product.fotos.length > 0"
        :src="product.fotos[0]?.src"
        :alt="product.fotos[0]?.titulo"
      />
    </router-link>
    <div class="info">
      <p class="preco">{{ formattedPrice(product.preco) }}</p>
      <h2 class="titulo">{{ product.nome }}</h2>
      <slot> </slot>
    </div>
  </div>
</template>

<script setup>
import { formattedPrice } from "@/helpers/convertToBRL.js";
const props = defineProps({
  product: Object,
});
</script>

<style scoped>
.produto {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  gap: 20px;
  margin-bottom: 40px;
  position: relative;
}

.info {
  align-self: end;
}

.produto-img {
  border-radius: 4px;
  overflow: hidden;
  height: 100px;
}
</style>
