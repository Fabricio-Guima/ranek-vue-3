<template>
  <form action="" @submit.prevent="getProducts">
    <input
      type="text"
      name="search"
      id="search"
      v-model="search"
      placeholder="Buscar..."
    />
    <input type="submit" name="seek" id="seek" />

    {{ search }}
  </form>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const search = ref("");

const getProducts = () => {
  router.push({
    query: {
      q: search.value,
    },
  });
  console.log("getProducts");
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 60px auto;
  position: relative;
}

#search {
  width: 100%;

  padding: 20px;
}

#search:focus,
#search:hover {
  transform: scale(1.1);
}

#seek {
  width: 62px;
  height: 62px;
  background: url("../../assets/svg/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 0px;
  box-shadow: none;
}
</style>
