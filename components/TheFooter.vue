<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="social-icons">
        <Icon name="skill-icons:instagram" />
        <Icon name="logos:youtube-icon" />
      </div>
      <p>&copy; Copyright 2024 Site by Live★Twin</p>
      <p>Powered by Shopify</p>

      <div class="subscribe">
        <form @submit.prevent="subscribe">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
          <button class="btn" type="submit">Subscribe</button>
        </form>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div v-if="successMessage" class="success-message">
          {{ successMessage }}
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const email = ref("");
const errorMessage = ref("");
const successMessage = ref("");

const subscribe = () => {
  errorMessage.value = "";
  successMessage.value = "";

  if (!email.value || !validateEmail(email.value)) {
    errorMessage.value = "Please enter a valid email address.";
  }

  // Placeholder logic for email subscription
  else
    setTimeout(() => {
      successMessage.value = `Successfully subscribed  ${email.value}`;
      email.value = "";
    }, 500);
};

const validateEmail = (email: string, string: undefined) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};
</script>

<style scoped>
.footer {
  background-color: var(--clr-primary100);
  color: var(--clr-light);
  padding: 1rem;
  font-family: "kanit", sans-serif;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.social-icons {
  margin-bottom: 2rem;
  display: flex;
  margin: auto;
  gap: 1rem;
  align-items: center;
}

.btn:hover {
  background-color: var(--clr-primary200);
}
.subscribe {
  display: flex;
  gap: 2rem;
  align-items: center;
}

.subscribe form {
  display: flex;
}

.subscribe input[type="email"] {
  padding: 10px;
  border: none;
  font-family: "kanit", sans-serif;
  border-radius: 4px 0 0 4px;
}

.error-message {
  color: red;
}

.success-message {
  font-size: var(--size-xs);
  color: var(--clr-light);

  text-transform: uppercase;
}
</style>
: string: undefined
