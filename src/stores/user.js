import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { api } from "@/services/api";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
  const router = useRouter();
  const isLogged = ref(false);
  const user = reactive({});

  const getUser = (payload) => {
    const email = payload;

    api
      .get(`/users/${email}`)
      .then((response) => {
        user.value = response.data;
        router.push({ name: "user" });
      })
      .catch((error) => console.log("error login", error));
  };

  return {
    isLogged,
    user,
    getUser,
  };
});
