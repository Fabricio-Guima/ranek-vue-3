import { ref, reactive } from "vue";
import { defineStore } from "pinia";
import { api } from "@/services/api";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
  const router = useRouter();
  const isLogged = ref(false);
  let user = reactive({});
  const userProducts = ref([]);

  const getUser = (payload) => {
    const email = payload;

    api
      .get(`/users/${email}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => console.log("error login", error));
  };

  const setUser = (payload) => {
    user.id = payload.email;
    Object.assign(user, { ...payload });
  };

  const getUserProducts = () => {
    api.get(`/produtos?user_id=${user.id}`).then((response) => {
      setUserProducts(response.data);
    });
  };
  const setUserProducts = (payload) => {
    userProducts.value = payload;
  };

  const addUserProducts = (payload) => {
    userProducts.unshift(payload);
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

  const destroyUser = () => {
    if (Object.keys(user).length > 0) {
      for (const key in user) {
        delete user[key];
      }
    }
  };

  const signout = () => {
    destroyUser();
    isLogged.value = false;
  };

  return {
    isLogged,
    user,
    userProducts,
    getUser,
    setUser,
    createUser,
    signout,
    getUserProducts,
    setUserProducts,
    addUserProducts,
  };
});
