<template>
  <div class="mb-2">
    <h2 class="ub-bold fsm-xlg">{{ tit }}</h2>
    <p class="mt-2 ub-reg fsm-sm">{{ txt }}</p>
  </div>
</template>
<script>
export default {
  props: ["tit", "txt"],
};
</script>
<style scoped>
h2 {
  color: var(--Marine-blue);
  /* font-size: calc(18px + 1.3vw); */
  /* font-size: 1.9rem; */
}
p {
  color: var(--Cool-gray);
  /* font-size: calc(12px + 0.5vw) !important; */
  /* font-size: 1rem !important; */
}
</style>
