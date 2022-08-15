<template>
  <div className="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  data: () => ({}),
  components: {
    NavBar,
  },
};
</script>

<style></style>
