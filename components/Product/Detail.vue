<template>
  <section class="product-details">
    <img :src="image" alt="Product Image" />
    <div class="info">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <pre>${{ price }}</pre>
      <button class="pay-btn" @click="emit('button-clicked')">
        {{ loading ? "redirecting" : `Pay ${price}` }}
      </button>
      <!-- here i can add my cart stuff-->
    </div>
  </section>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  description: {
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

  loading: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["button-clicked"]);
</script>

<style scoped>
.product-details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

img {
  max-width: 100%;
}

.info {
  padding-inline: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.pay-btn {
  padding: 0.75rem 1.5rem;
  background-color: var(--clr-primary200);
  color: var(--clr-light);
  font-family: "kanit", sans-serif;
  text-decoration: none;
  border-radius: 2px;
  max-width: fit-content;
  margin: 0 auto;
  transition: background-color 0.3s ease;
}

.pay-btn:hover {
  background-color: var(--clr-primary100);
}

/* desktop */
@media (min-width: 768px) {
  .product-details {
    grid-template-columns: 1fr 1fr;
    display: grid;

    place-items: center;
  }

  .info {
    gap: 1.5rem;
    max-width: 500px;
  }

  .container {
    display: grid;
    place-content: center;
  }
}
</style>
