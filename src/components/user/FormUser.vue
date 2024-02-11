<template>
  <form action="" @submit.prevent="createAccount">
    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome" v-model="user.nome" />

    <label for="email">Email:</label>
    <input type="text" id="email" name="email" v-model="user.email" />

    <label for="password">Senha:</label>
    <input
      type="password"
      id="password"
      name="password"
      v-model="user.password"
    />

    <label for="cep">CEP:</label>
    <input
      type="text"
      id="cep"
      name="cep"
      v-model="user.cep"
      @blur="fillAddress"
    />

    <label for="rua">Rua:</label>
    <input type="text" id="rua" name="rua" v-model="user.rua" />

    <label for="numero">Número:</label>
    <input type="text" id="numero" name="numero" v-model="user.numero" />

    <label for="cidade">Cidade:</label>
    <input type="text" id="cidade" name="cidade" v-model="user.cidade" />

    <label for="estado">Estado:</label>
    <input type="text" id="estado" name="estado" v-model="user.estado" />

    <div class="button">
      <slot> </slot>
    </div>
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { getCep } from "@/services/cep.js";

const router = useRouter();
const userStore = useUserStore();

const user = reactive({});

const createAccount = async () => {
  userStore.setUser(user);
  userStore.createUser();
  router.push({ name: "user" });
};

const fillAddress = () => {
  const cep = user?.cep?.replace(/\D/g, "");
  if (cep.length === 8) {
    getCep(cep).then((response) => {
      user.rua = response.data.logradouro;
      user.cidade = response.data.localidade;
      user.estado = response.data.uf;
    });
  }
};
</script>

<style scoped>
form {
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
}
.button {
  grid-column: 2;
  margin-top: 10px;
}
</style>
