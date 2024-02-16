<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <RouterLink :to="{ name: 'user.products' }">Produtos</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'user.purchases' }">Compras</RouterLink>
        </li>
        <li><RouterLink :to="{ name: 'user.sales' }">Vendas</RouterLink></li>
        <li>
          <RouterLink :to="{ name: 'user.edit' }">Editar Usuário</RouterLink>
        </li>
        <li><button @click.prevent="signout">Deslogar</button></li>
      </ul>
    </nav>
    <transition mode="out-in">
      <router-view> </router-view>
    </transition>
  </section>
</template>

<script setup>
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

const userStore = useUserStore();
const router = useRouter();
const signout = () => {
  console.log("signout");
  userStore.signout();
  router.push({ name: "login" });
};
</script>

<style scoped>
.usuario {
  display: grid;
  grid-template-columns: minmax(140px, 200px);
  max-width: 900px;
  margin: 40px auto;
  gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
  .usuario {
    grid-template-columns: 1fr;
    margin: 0px auto;
    gap: 20px;
    padding: 20px;
  }
}

.sidenav a,
.sidenav button {
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav button:hover {
  background: #87f;
  color: #fff;
}

.sidenav li button {
  border: none;
  width: 100%;
  text-align: left;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 1rem;
  cursor: pointer;
}
</style>
