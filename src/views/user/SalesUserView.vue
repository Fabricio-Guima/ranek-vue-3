<template>
  <section>
    <div v-if="sales">
      <h2>Vendas</h2>
      <div class="produtos-wrapper" v-for="(sale, index) in sales" :key="index">
        <ItemProduct v-if="sale.product" :product="sale.product">
          <p class="vendedor">
            <span>Compradores </span> {{ sale.purchaser_id }}
          </p>
        </ItemProduct>
        <div class="entrega">
          <h3>Entrega:</h3>
          <ul v-if="sale.endereco">
            <li v-for="(value, index) in sale.endereco" :key="index">
              {{ index }}: {{ value }}
            </li>
          </ul>
        </div>
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
const sales = ref(null);

const getSales = () => {
  api.get(`/transacao?saller_id=${userStore.user.id}`).then((response) => {
    sales.value = response.data;
  });
};

onBeforeMount(() => {
  if (userStore.isLogged) {
    getSales();
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
.entrega {
  display: grid;
  grid-template-columns: minmax(100px, 200px) 1fr;
  gap: 20px;
  margin-bottom: 60px;
}

h2 {
  margin-bottom: 20px;
}

h3 {
  margin: 0;
  justify-self: end;
}
</style>
