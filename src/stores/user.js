import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { api } from "@/services/api";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
  const router = useRouter();
  const isLogged = ref(false);
  let user = reactive({});

  const getUser = (payload) => {
    const email = payload;

    api
      .get(`/users/${email}`)
      .then((response) => {
        setUser(response.data);
        router.push({ name: "user" });
      })
      .catch((error) => console.log("error login", error));
  };

  const setUser = (payload) => {
    user.id = payload.email;
    Object.assign(user, { ...payload });
  };

  const createUser = () => {
    api
      .post("/users", user)
      .then((response) => {
        isLogged.value = true;
        setUser(response.data);
      })
      .catch((error) => console.log("Erro ao criar usuário", error));
  };

  return {
    isLogged,
    user,
    getUser,
    setUser,
    createUser,
  };
});
