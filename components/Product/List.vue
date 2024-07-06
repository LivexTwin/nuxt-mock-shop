<script setup>
const props = defineProps({
  products: {
    type: undefined,
    required: true,
  },
});
</script>

<template>
  <div class="product-list">
    <ProductCard
      v-for="product in products"
      :key="product.node.id"
      :image="product.node.images.edges[0].node.url"
      :title="product.node.title"
      :price="`${product.node.priceRange.maxVariantPrice.amount} ${product.node.priceRange.maxVariantPrice.currencyCode}`"
      :link="`/products/${product.node.handle}`"
    />
  </div>
</template>
<!-- :image="product.node.edges[0].node.url" -->

<style scoped>
.product-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 768px) {
  .product-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
<!-- <template>
  <div class="product-list">
    <ProductCard
      v-for="product in data.products.edges"
      :key="product.node.id"
      :image:="product.node.images.edges[0].node.url"
      :title="product.node.title"
      :price="`${product.node.priceRange.maxVariantPrice.amount} ${product.node.priceRange.maxVariantPrice.currencyCode}`"
      :link="`/products/${product.node.handle}`"
      :description="product.node.description"
    />
  </div>
</template> -->
