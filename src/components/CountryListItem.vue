<template>
  <router-link
    class="list-group-item list-group-item-action"
    :to="getLinkToDetail"
  >
    <img :src="getFlag" />
    <p>{{ name }}</p>
  </router-link>
</template>

<script>
export default {
  props: {
    name: String,
    alpha2Code: String,
    alpha3Code: String,
  },

  computed: {
    getFlag() {
      return `https://flagpedia.net/data/flags/icon/72x54/${this.alpha2Code?.toLowerCase()}.png`;
    },
    getLinkToDetail() {
      return "/list/" + this.alpha3Code;
    },
  },
};
</script>

<style></style>
