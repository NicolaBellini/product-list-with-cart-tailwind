<script>
export default {
  props: {
    product: Object,
  },
  methods: {
    convertToAbsolutePath(device) {
      // Definisco il percorso base della cartella `src`
      const basePath = "/src";
      let cleanedPath = this.product.image[device].replace(/^\.\//, "");
      // Unisco il percorso base con il percorso pulito
      const absolutePath = `${basePath}/${cleanedPath}`;
      console.log(this.absolutePath);
      return absolutePath;
    },
  },
};
</script>

<template>
  <div class="h-96 w-1/3 bg-slate-500 max-md:w-full max-lg:w-1/2 p-2">
    <div class="h-2/3 sm:hidden">
      <img
        :src="convertToAbsolutePath('mobile')"
        alt="product.name"
        class="h-full"
      />
    </div>
    <div class="h-2/3 hidden sm:block xl:hidden">
      <img
        :src="convertToAbsolutePath('tablet')"
        alt="product.name"
        class="h-full"
      />
    </div>
    <div class="h-2/3 hidden xl:block">
      <img
        :src="convertToAbsolutePath('desktop')"
        alt="product.name"
        class="h-full"
      />
    </div>
    <div>
      <h1>{{ product.category }}</h1>
    </div>
  </div>
</template>

<style></style>
