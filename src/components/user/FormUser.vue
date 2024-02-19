<template>
  <form>
    <div v-if="showFormUser" class="usuario">
      <label for="nome">Nome:</label>
      <input type="text" id="nome" name="nome" v-model="userStore.user.nome" />

      <label for="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        v-model="userStore.user.email"
      />

      <label for="password">Senha:</label>
      <input
        type="password"
        id="password"
        name="password"
        v-model="userStore.user.password"
      />
    </div>

    <label for="cep">CEP:</label>
    <input
      type="text"
      id="cep"
      name="cep"
      v-model="userStore.user.cep"
      @blur="fillAddress"
    />

    <label for="rua">Rua:</label>
    <input type="text" id="rua" name="rua" v-model="userStore.user.rua" />

    <label for="numero">Número:</label>
    <input
      type="text"
      id="numero"
      name="numero"
      v-model="userStore.user.numero"
    />

    <label for="cidade">Cidade:</label>
    <input
      type="text"
      id="cidade"
      name="cidade"
      v-model="userStore.user.cidade"
    />

    <label for="estado">Estado:</label>
    <input
      type="text"
      id="estado"
      name="estado"
      v-model="userStore.user.estado"
    />

    <div class="button">
      <slot> </slot>
    </div>
  </form>
</template>

<script setup>
import { computed, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "@/stores/user";
import { getCep } from "@/services/cep.js";

const router = useRouter();
const route = useRoute();
const userStore = useUserStore();

const user = reactive({});

const fillAddress = () => {
  const cep = userStore.user?.cep?.replace(/\D/g, "");
  if (cep.length === 8) {
    getCep(cep).then((response) => {
      userStore.user.rua = response.data.logradouro;
      userStore.user.cidade = response.data.localidade;
      userStore.user.estado = response.data.uf;
    });
  }
};

const showFormUser = computed(() => {
  return !userStore.isLogged || route.name === "user.edit";
});
</script>

<style scoped>
form,
.usuario {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}
.usuario {
  grid-column: 1 / 3;
}
.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
