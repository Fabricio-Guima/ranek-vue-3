<template>
  <form
    class="adicionar-produto"
    ref="createFormProduct"
    @submit.prevent="createProduct"
  >
    <label for="nome">Nome</label>
    <input type="text" name="nome" id="nome" v-model="produto.nome" />

    <label for="preco">Preço (R$)</label>
    <input type="text" name="preco" id="preco" v-model="produto.preco" />

    <label for="fotos">Fotos</label>
    <input
      type="file"
      name="fotos"
      id="fotos"
      ref="imgInput"
      accept="image/*"
      @change="handleUploadPhoto"
    />

    <label for="descricao">Descrição</label>
    <textarea
      name="descricao"
      id="descricao"
      cols="30"
      rows="10"
      v-model="produto.descricao"
    ></textarea>

    <label v-if="photoUploadPreview" for="preview"> Prévia </label>
    <div class="preview-photo" v-if="photoUploadPreview">
      <img :src="photoUploadPreview" alt="" />
    </div>

    <button class="btn" type="submit">Criar Produto</button>
  </form>
</template>

<script setup>
import { api } from "@/services/api";
import { useUserStore } from "@/stores/user";
import { reactive, ref } from "vue";

const userStore = useUserStore();

const produto = reactive({
  vendido: "false",
});
const createFormProduct = ref(null);

const photoUploadPreview = ref(null);

const createProduct = () => {
  formatterProduct();
  api.post("/produtos", produto).then(() => {
    userStore.getUserProducts();
    resetInput();
  });
};

const formatterProduct = () => {
  produto.user_id = userStore.user.id;
};

const handleUploadPhoto = (e) => {
  produto.fotos = e.target.files[0];

  const reader = new FileReader();
  reader.onload = (event) => {
    photoUploadPreview.value = event.target.result;
  };

  reader.readAsDataURL(produto.fotos);
};

const resetInput = () => {
  produto.nome = "";
  produto.preco = "";
  produto.descricao = "";
  produto.fotos = null;
  photoUploadPreview.value = false;
  createFormProduct.value.reset();
};
</script>

<style scoped>
.adicionar-produto {
  display: grid;
  grid-template-columns: 100px 1fr;
  align-items: center;
  margin-bottom: 60px;
}
.btn {
  grid-column: 2;
}

.preview-photo {
  max-width: 200px;
  height: 200xp;
  margin-bottom: 40px;
}
</style>
