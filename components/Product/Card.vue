<!-- <template>
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
        <p class="price">
          Price: {{ product.node.priceRange.maxVariantPrice.amount }}
          {{ product.node.priceRange.maxVariantPrice.currencyCode }}
        </p>
      </NuxtLink>
    </div>
    <p v-else>Loading...</p>
  </div>
</template> -->

<template>
  <div class="product-card">
    <NuxtLink :to="link">
      <img :src="image" alt="Product Image" />
    </NuxtLink>
    <div class="product-info">
      <h5>{{ title }}</h5>
      <pre>${{ price }}</pre>
      <!-- <p>{{ description }}</p> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },
});
</script>

<style>
.product-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
  width: 20rem;
}

.product-card:hover {
  transform: translateY(-1px);
}

.product-info {
  display: flex;
  gap: 2rem;
  align-items: center;
}

img {
  border-radius: 5px;
  /* max-width: 350px; */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.3s ease-in-out;
}

@media (min-width: 768px) {
  .product-card {
    width: unset;
  }
}
</style>
