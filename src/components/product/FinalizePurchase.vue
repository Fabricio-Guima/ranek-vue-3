<template>
  <section>
    <h2>Endereço de Envio</h2>
    <FormUser>
      <button @click.prevent="finalizePurchase" class="btn">
        Finalizar Compra
      </button>
    </FormUser>
  </section>
</template>

<script setup>
import FormUser from "@/components/user/FormUser.vue";
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { api } from "@/services/api";

const props = defineProps({
  product: Object,
});
const router = useRouter();
const userStore = useUserStore();

const purchase = computed(() => {
  return {
    purchaser_id: userStore.user.email,
    saller_id: props.product.user_id,
    product: props.product,
    endereco: {
      cep: userStore.user.cep,
      rua: userStore.user.rua,
      numero: userStore.user.numero,
      cidade: userStore.user.cidade,
      estado: userStore.user.estado,
    },
  };
});

const createTransaction = async () => {
  const purchaseData = JSON.parse(JSON.stringify(purchase.value));
  return api.post("/transacao", purchaseData).then(() => {
    router.push({ name: "user.purchases" });
  });
};

const createAccount = async () => {
  userStore.createUser();
  await createTransaction();
  //   router.push({ name: "user.products" });
};

const finalizePurchase = () => {
  if (userStore.isLogged) {
    createTransaction();
  } else {
    createAccount();
  }
};
</script>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 20px;
}

.btn {
  background: #e80;
}
</style>
