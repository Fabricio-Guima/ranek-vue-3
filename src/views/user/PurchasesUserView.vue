<template>
  <section>
    <div v-if="purchases">
      <h2>Compras</h2>

      <div
        class="produtos-wrapper"
        v-for="(purchase, index) in purchases"
        :key="index"
      >
        <ItemProduct v-if="purchase.product" :product="purchase.product">
          <p class="vendedor">
            <span>Vendedor </span> {{ purchase.saller_id }}
          </p>
        </ItemProduct>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useUserStore } from "@/stores/user";
import ItemProduct from "@/components/product/ItemProduct.vue";
import { api } from "@/services/api";

const userStore = useUserStore();
const purchases = ref(null);

const getPurchases = () => {
  api.get(`/transacao?purchaser_id=${userStore.user.id}`).then((response) => {
    purchases.value = response.data;
  });
};

onBeforeMount(() => {
  if (userStore.isLogged) {
    getPurchases();
  }
});
</script>

<style scoped>
.produto-wrapper {
  margin-bottom: 40px;
}
.vendedor span {
  color: #e80;
}
</style>
