<template>
  <div class="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  data() {
    return {
      countries: [],
    };
  },
  components: {
    Navbar,
  },
};
</script>

<style></style>
