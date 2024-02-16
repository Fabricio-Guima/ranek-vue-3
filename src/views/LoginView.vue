<template>
  <section class="login">
    <h1>Login</h1>
    <form action="" @submit.prevent="signin">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="login.email" />

      <label for="password">Senha:</label>
      <input type="password" id="password" v-model="login.password" />
      <button type="submit" class="btn">Logar</button>
    </form>
    <p class="perdeu">
      <a href="/" target="_blank">Esqueceu a senha? Clique aqui.</a>
    </p>
    <RegisterUser />
  </section>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user.js";
import RegisterUser from "@/components/user/RegisterUser.vue";

const router = useRouter();
const userStore = useUserStore();

const login = reactive({
  email: "",
  password: "password",
});
const signin = () => {
  userStore.isLogged = true;
  userStore.setUser(login);
  userStore.getUser(login.email);
  router.push({ name: "home" });
};
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
  padding: 0 20px;
}
h1 {
  text-align: center;
  font-size: 2rem;
  margin-top: 40px;
  color: #87f;
}
form {
  display: grid;
}
.btn {
  width: 100%;
  max-width: 300px;
  margin-left: auto;
  margin-right: auto;
}
.perdeu {
  text-align: center;
  margin: 20px auto 0 auto;
}

.perdeu a:hover {
  color: #87f;
  text-decoration: underline;
}
</style>
