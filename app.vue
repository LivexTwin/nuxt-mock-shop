<template>
  <header>
    <TheNavigation />
  </header>

  <TheHero v-if="isHomePage" />
  <main class="container">
    <NuxtPage />
  </main>
  <TheFooter />
</template>

<script setup>
const route = useRoute();
const router = useRouter();
const isHomePage = ref(route.path === "/");

// Watch for route changes to update isHomePage
watchEffect(() => {
  isHomePage.value = route.path === "/";
});

// cart
</script>
