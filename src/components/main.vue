<script>
import productCard from "./productCard.vue";
import data from "../../data.json";
export default {
  data() {
    return {
      productsList: data,
    };
  },
  components: {
    productCard,
  },
};
</script>

<template>
  <div class="h-full flex justify-center">
    <!-- left col -->
    <div class="h-full bg-teal-300 w-2/3 p-14">
      <!-- card container -->
      <div
        class="bg-slate-200 w-full flex flex-wrap items-center justify-center"
      >
        <productCard
          v-for="(product, index) in productsList"
          :key="index"
          :product="product"
        />
      </div>
    </div>
    <!-- right col -->
    <div class="h-full bg-teal-500 w-1/3 flex items-start">
      <!-- cart container -->
      <div class="h-96 w-full bg-slate-400 fixed"></div>
    </div>
  </div>
</template>

<style></style>
