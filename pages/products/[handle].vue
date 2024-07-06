<template>
  <ProductDetail
    :title="product.product?.title"
    :description="product.product?.description"
    :price="`${product.product?.priceRange.maxVariantPrice.amount} ${product.product?.priceRange.maxVariantPrice.currencyCode}`"
    :image="product.product?.images.edges[0].node.url"
    :loading="loading"
    @button-clicked="redirectToPayment"
  />
</template>

<script setup>
const route = useRoute();
const { handle } = route.params;

// const { data } = await useAsyncGql("Product", { handle });
const { data: product } = await useAsyncGql("Product", { handle });

const loading = ref(false);
const redirectToPayment = async () => {
  loading.value = true;
  const {
    checkoutCreate: {
      checkout: { webUrl },
    },
  } = await GqlCheckout({
    variantId: product.value.product.variants.edges[0].node.id,
  });

  window.location.href = webUrl;
};
</script>
