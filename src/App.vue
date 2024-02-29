<template>
  <div id="app" class="d-md-flex align-items-center">
    <div class="container">
      <the-card></the-card>
    </div>
  </div>
</template>
<script>
import theCard from "@/components/theCard.vue";
export default {
  name: "App",
  components: {
    theCard,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
#app {
  min-height: 100svh;
  font-family: Ubuntu-regular;
  background: var(--Magnolia);
}
</style>
