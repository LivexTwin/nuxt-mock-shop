<template>
  <nav class="navbar">
    <div class="logo">
      <NuxtLink to="/"> Nuxt Mock Shop </NuxtLink>
    </div>

    <!-- mobile  -->
    <div class="menu" :class="{ 'is-active': isMenuActive }">
      <ul>
        <li><NuxtLink to="/" @click="toggleMenu">Home</NuxtLink></li>
        <li><NuxtLink to="/catalog" @click="toggleMenu">Catalog</NuxtLink></li>
      </ul>
    </div>
    <div class="hamburger" @click="toggleMenu">
      <div :class="{ 'is-active': isMenuActive }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <!-- desktop -->
    <div class="navbar-links">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/catalog">Catalog</NuxtLink>
    </div>
  </nav>
</template>

<script setup>
const isMenuActive = ref(false);

const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};

// Watch for changes to isMenuActive and toggle the class on body
watch(isMenuActive, (newVal) => {
  if (newVal) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  font-family: "kanit", sans-serif;
  font-weight: 500;
}

.logo {
  color: var(--clr-primary100);

  font-size: var(--size-xl);
  font-family: "teko", sans-serif;
}

.menu {
  display: flex;
}
.menu ul {
  display: flex;
  flex-direction: column;
  font-size: var(--size-3xl);
  gap: 5rem;
}

.menu a {
  color: var(--clr-light);
}

.menu.is-active a {
  color: var(--clr-light); /* Change this to your desired active color */
}

.hamburger {
  display: none;

  z-index: 11;
}

.hamburger div {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.hamburger div span {
  width: 20px;
  height: 1px;
  background-color: var(--clr-primary100);
  transition: all 0.3s ease;
}

.hamburger div.is-active span:nth-child(1) {
  transform: rotate(45deg) translateY(8px);
}

.hamburger div.is-active span:nth-child(2) {
  opacity: 0;
}

.hamburger div.is-active span:nth-child(3) {
  transform: rotate(-45deg) translateY(-8px);
}

.hamburger div.is-active span {
  background-color: var(
    --clr-light
  ); /* Change this to your desired active color */
}

.navbar-links {
  display: flex;
  gap: 2rem;
  color: var(--clr-primary100);
}

.navbar-links a:hover {
  color: var(--clr-primary200);
  transition: 0.3s ease;
}

/* Responsive styles */
@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .menu {
    position: absolute;
    top: 0;
    right: 0;
    height: 100dvh;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.96);
    flex-direction: column;
    align-items: center;
    z-index: 10;
    justify-content: center;
    transition: transform 500ms ease-in-out;
    transform: translateX(100%);
  }

  .menu.is-active {
    transform: translateX(0);
  }

  .hamburger {
    display: block;
  }
}

@media (min-width: 768px) {
  .navbar {
    padding: 0.5rem 2rem;
  }

  .navbar-links {
    display: flex;
  }

  .menu {
    display: none;
  }

  .menu a {
    color: var(--clr-primary100);
  }

  .menu.is-active a {
    color: var(--clr-primary100);
  }

  .logo a {
    font-size: var(--size-3xl);
  }
}
</style>
