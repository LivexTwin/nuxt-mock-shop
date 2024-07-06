<template>
  <div class="catalog-heading">
    <h3>Catalog</h3>
    <span>20 products </span>
  </div>
  <ProductList :products="data.products.edges" />
</template>

<script setup>
const { data } = await useAsyncGql("Products", { first: 20 });
</script>

<style scoped>
.catalog-heading {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  align-items: center;
  padding: 0 2rem;

  @media (max-width: 375px) {
    padding: 0 1rem;
  }
}

/*  */
</style>
