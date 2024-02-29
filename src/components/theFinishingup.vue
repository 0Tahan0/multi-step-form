<template>
  <div>
    <special-title
      tit="Finishing up"
      txt="Double-check everything looks OK before confirming."
    ></special-title>
    <div class="list p-4 rounded-3">
      <div
        class="header border-bottom d-flex justify-content-between align-items-center"
      >
        <div class="d-flex flex-column p-1 mb-2 text-capitalize fsm-sm">
          <p class="ub-bold fsm-sm mb-0">
            {{ final.plan.type }} <span>({{ final.plan.period }})</span>
          </p>
          <b-link class="change" @click.prevent="reset()">Change</b-link>
        </div>
        <p class="ub-bold fsm-sm mb-0">
          ${{ final.plan.price }}/<span v-if="final.plan.period == 'monthly'"
            >mo</span
          ><span v-else>yr</span>
        </p>
      </div>

      <div class="mt-3">
        <div
          class="list-item p-1 d-flex justify-content-between align-items-center"
          v-for="i in final.additions"
          :key="i.id"
        >
          <p class="addName fsm-sm mb-0">
            {{ i.title }}
          </p>

          <p class="price fsm-sm mb-0 ub-med">
            ${{ i.price }}/<span v-if="final.plan.period == 'monthly'">mo</span
            ><span v-else>yr</span>
          </p>
        </div>
      </div>
    </div>
    <!-- total -->
    <div
      class="total p-3 mt-2 d-flex justify-content-between align-items-center"
    >
      <p class="addName fsm-sm mb-0 ub-med">
        Total (per {{ final.plan.period }})
      </p>

      <p class="price fsm-med mb-0 ub-bold">
        ${{ final.total }}/<span v-if="final.plan.period == 'monthly'">mo</span
        ><span v-else>yr</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["currentStep"],
  data() {
    return {};
  },
  computed: {
    final() {
      return this.$store.getters.getFinal;
    },
  },
  methods: {
    reset() {
      this.$emit('reset',1)
    
    },
  },
};
</script>
<style scoped>
.list {
  background-color: var(--Alabaster);
  border-color: var(--Cool-gray);
}
h6 {
  color: var(--Marine-blue);
}
.change,
.addName {
  color: var(--Cool-gray);
}
.price {
  /* font-size: ; */
  color: var(--Purplish-blue);
}
</style>
