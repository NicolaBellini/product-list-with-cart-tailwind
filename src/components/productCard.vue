<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<template>
  <div class="h-96 w-64 bg-slate-500 m-2">
    <h1>{{ product.name }}</h1>
  </div>
</template>

<style></style>
