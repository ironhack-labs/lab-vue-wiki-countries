<template>
  <div class="loading">
    {{ text }}
    <Spinner />
  </div>
</template>

<script>
import Spinner from "./Spinner.vue";
export default {
  components: { Spinner },
  props: {
    text: String,
  },
};
</script>

<style scoped>
.loading {
  display: flex;
  flex-flow: row;
}
</style>
