<template>
  <section>
    <h2>Adicionar Produtos</h2>
    <AddProductVue />
    <h2>Seus Produtos</h2>
    <transition-group v-if="userStore.userProducts" name="list" tag="ul">
      <li v-for="(product, index) in userStore.userProducts" :key="index">
        <ItemProduct :product="product">
          <p>{{ product.descricao }}</p>
        </ItemProduct>
      </li>
    </transition-group>
  </section>
</template>

<script setup>
import { onBeforeMount, watch } from "vue";
import { useUserStore } from "@/stores/user";
import AddProductVue from "@/components/product/AddProduct.vue";
import ItemProduct from "@/components/product/ItemProduct.vue";
const userStore = useUserStore();

// watch(userStore.isLogged, () => {
//   userStore.getUserProducts();
// });

onBeforeMount(() => {
  if (userStore.isLogged) userStore.getUserProducts();
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}
</style>
