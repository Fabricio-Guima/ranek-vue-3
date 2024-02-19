<template>
  <section>
    <h2>Adicionar Produtos</h2>
    <AddProductVue />
    <h2>Seus Produtos</h2>
    <transition-group v-if="userStore.userProducts" name="list" tag="ul">
      <li v-for="(product, index) in userStore.userProducts" :key="index">
        <ItemProduct :product="product">
          <p>{{ product.descricao }}</p>
          <button class="deletar" @click="deleteProduct(product.id)">
            Deletar
          </button>
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
import { api } from "@/services/api";
const userStore = useUserStore();

// watch(userStore.isLogged, () => {
//   userStore.getUserProducts();
// });

const deleteProduct = (id) => {
  const confirm = window.confirm("Deseja remover este produto?");
  if (confirm) {
    api
      .delete(`/produtos/${id}`)
      .then(() => {
        userStore.getUserProducts();
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
};

onBeforeMount(() => {
  if (userStore.isLogged) userStore.getUserProducts();
});
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translate3d(20px, 0, 0);
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}

.deletar {
  position: absolute;
  top: 0px;
  right: 0px;
  background: url("../../assets/svg/remove.svg") no-repeat center center;
  width: 24px;
  height: 24px;
  text-indent: -140px;
  overflow: hidden;
  cursor: pointer;
  border: none;
}
</style>
