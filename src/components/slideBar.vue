<template>
  <div
    class="slidebar rounded py-md-5 py-3 h-100 d-flex justify-content-center"
  >
    <div class="d-flex d-md-block justify-content-center">
      <div
        class="d-flex align-items-center mb-3"
        v-for="(i, index) in InFo"
        :key="index"
      >
        <div
          class="circle fsm-sm ub-med rounded-pill border border-2 d-flex align-items-center justify-content-center me-3"
          :class="currentStep == index + 1 ? 'current' : ''"
        >
          {{ index + 1 }}
        </div>
        <div class="d-none d-md-block">
          <p class="step-p fsm-xm text-uppercase m-0">step {{ index + 1 }}</p>
          <p class="select-p fsm-sm text-uppercase m-0 ub-med">{{ i }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["currentStep"],
  data() {
    return {
      InFo: ["your info", "select plan", "add-ons", "summary"],
    };
  },
};
</script>
<style scoped>
.slidebar {
  background-image: url("@/assets/images/bg-sidebar-desktop.svg");
  background-position: center;
  background-size: cover;
}
@media (max-width: 767px) {
  .slidebar {
    background-image: url("@/assets/images/bg-sidebar-mobile.svg");
  }
}
.circle {
  --size: 40px;
  width: var(--size);
  height: var(--size);
  font-size: calc(0.45vw + 12px);
  border-color: var(--Light-blue);
  color: var(--Light-blue);
}
.circle.current {
  background: var(--Light-blue);
  color: var(--Marine-blue);
}
.step-p {
  /* font-size: smaller !important; */
  color: var(--Cool-gray);
}
.select-p {
  color: var(--Light-gray);
}
</style>
