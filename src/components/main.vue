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
  <div class="h-full flex justify-center max-sm:flex-col font-red-hat-text">
    <!-- left col -->
    <div class="h-full bg-teal-300 w-2/3 p-14 max-sm:w-full">
      <!-- card container -->
      <div class="bg-slate-200 w-full">
        <div class="font-bold text-[42px]">Desserts</div>
        <div class="flex flex-wrap items-center">
          <div v-for="(product, index) in productsList" :key="index"></div>

          <productCard
            v-for="(product, index) in productsList"
            :key="index"
            :product="product"
          />
        </div>
      </div>
    </div>
    <!-- right col -->
    <div class="h-full bg-teal-500 w-1/3 pt-14 max-sm:w-full max-sm:pt-0">
      <!-- cart container -->
      <div class="h-96 w-full bg-slate-400 block"></div>
    </div>
  </div>
</template>

<style></style>
