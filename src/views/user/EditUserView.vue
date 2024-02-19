<template>
  <section>
    <FormUser>
      <button type="submit" class="btn" @click.prevent="EditUser">
        Editar Usuário
      </button>
    </FormUser>
  </section>
</template>

<script setup>
import FormUser from "@/components/user/FormUser.vue";
import { api } from "@/services/api";
import { useUserStore } from "@/stores/user";
import { useRouter, useRoute } from "vue-router";

const userStore = useUserStore();
const router = useRouter();

const EditUser = () => {
  console.log("EditUser");
  userStore.editUser();
  router.push({ name: "user.products" });
};
</script>

<style lang="scss" scoped></style>
