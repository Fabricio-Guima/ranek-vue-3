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
        <button
          type="submit"
          class="btn btn-form"
          @click.prevent="createAccount"
        >
          Cria conta
        </button>
      </FormUser>
    </transition>
  </section>
</template>

<script setup>
import { ref } from "vue";
import FormUser from "@/components/user/FormUser.vue";
import { useUserStore } from "@/stores/user";
import { useRouter, useRoute } from "vue-router";

const showFormUser = ref(false);
const userStore = useUserStore();
const router = useRouter();

const createAccount = async () => {
  userStore.createUser();
  router.push({ name: "user.products" });
};
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
