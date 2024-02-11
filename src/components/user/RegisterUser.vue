<template>
  <section>
    <h2>Crie a sua conta</h2>
    <transition mode="out-in">
      <button
        v-if="!showFormUser"
        @click="showFormUser = !showFormUser"
        class="btn"
        key="button"
      >
        Criar Conta
      </button>

      <FormUser v-else key="form-user">
        <button class="btn btn-form">Cria conta</button>
      </FormUser>
    </transition>
  </section>
</template>

<script setup>
import { ref } from "vue";
import FormUser from "@/components/user/FormUser.vue";

const showFormUser = ref(false);
</script>

<style scoped>
h2 {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 10px;
}
.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.btn-form {
  max-width: 100%;
}
</style>
