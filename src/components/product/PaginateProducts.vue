<template>
  <ul>
    <li
      v-for="page in pageRange"
      :key="page"
      :class="{ active: isPageActive(page) }"
    >
      <RouterLink :to="{ query: query(page) }">{{ page }}</RouterLink>
    </li>
  </ul>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  totalProducts: Number,
  perPage: Number,
});

const route = useRoute();

const totalPages = computed(() => {
  const total = props.totalProducts / props.perPage;
  return total !== Infinity ? Math.ceil(total) : 0;
});

const pageRange = computed(() => {
  const currentPage = Number(route.query._page);
  const range = 9;
  const offSet = Math.ceil(range / 2);
  const total = totalPages.value;
  const pagesArray = [];

  for (let i = 1; i <= total; i++) {
    pagesArray.push(i);
  }
  pagesArray.splice(0, currentPage - offSet);
  pagesArray.splice(range, total);

  return pagesArray;
});

const query = (page) => {
  return {
    ...route.query,
    _page: page,
  };
};

const isPageActive = (page) => {
  return route.query._page === page.toString();
};
</script>

<style scoped>
ul {
  grid-column: 1 / -1;
}

li {
  display: inline-block;
}

li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li.active a {
  background: #87f;
  color: #fff;
}
</style>
