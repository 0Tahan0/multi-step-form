<template>
  <div class="h-100 d-flex flex-column justify-content-center p-4">
    <img
      :src="require(`@/assets/images/${img}`)"
      :alt="img"
      class="mx-auto mb-5"
    />
    <h1 class="text-center ub-bold mb-3">{{ title }}</h1>
    <p class="text-center fsm-med lh-med">{{ text }}</p>
  </div>
</template>
<script>
export default {
  props: ["img", "title", "text"],
};
</script>
<style scoped>
h1 {
  color: var(--Marine-blue);
}
p {
  color: var(--Cool-gray);
}
</style>
