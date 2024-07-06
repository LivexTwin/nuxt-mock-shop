<!-- <template>
  <h2>Browse our latest looks</h2>
  <div class="featured">
    <div class="featured-grid" v-if="data && data.products">
      <NuxtLink
        v-for="product in data.products.edges"
        :key="product.node.id"
        :to="`/products/${product.node.handle}`"
      >
        <img
          v-if="product.node.images.edges.length > 0"
          :src="product.node.images.edges[0].node.url"
          alt="Product Image"
        />
        <p>{{ product.node.title }}</p>
        <p class="price" v-if="product.node.variants.edges.length > 0">
          Price: {{ product.node.variants.edges[0].node.price.amount }}
          {{ product.node.variants.edges[0].node.price.currencyCode }}
        </p>
      </NuxtLink>

      
    </div>
    <p v-else>Loading...</p>
  </div>
</template> -->

<!-- Add more fields as needed -->

<template>
  <h2>Featured items</h2>
  <ProductList :products="data.products.edges" />
</template>

<!-- <template>
  <div>
    {{ data }}
  </div>
</template> -->

<script setup>
const { data } = await useAsyncGql("Products", { first: 5 });
// const { data } = await useAsyncGql("Products" );
</script>

<style scoped>
h2 {
  margin-bottom: 2rem;
  text-align: center;
  font-size: var(--size-2xl);
  font-family: "kanit", sans-serif;
  font-weight: 300;
}
</style>
