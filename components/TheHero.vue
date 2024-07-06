<template>
  <section class="hero-banner">
    <div class="hero-content">
      <p>New Arrivals</p>
      <button class="btn" type="button">
        <NuxtLink to="/catalog">Shop Now</NuxtLink>
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero-banner {
  position: relative;
  height: 70vh;
  background: url("/public/images/hero-img.jpg") no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--clr-light);
  text-align: center;
}

.hero-content {
  /* background: rgba(0, 0, 0, 0.5); */
  padding: 5rem;
}

.hero-content p {
  font-size: var(--size-5xl);
  font-family: "teko", sans-serif;

  margin-bottom: 2rem;
}
</style>
