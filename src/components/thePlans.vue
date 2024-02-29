<template>
  <div>
    <special-title
      tit="Select your plan"
      txt="You have the option of monthley or yearly billing."
    ></special-title>
    <div class="plans-box d-flex flex-md-row flex-column gap-3">
      <div
        class="plan border border-1 p-2 p-md-3 py-md-4 d-flex d-md-block align-items-center"
        v-for="(i, index) in getData"
        :key="index"
        @click="selectPlan(index)"
        :class="selectedPlan == index ? 'selected' : ''"
      >
        <img :src="require(`@/assets/images/${i.img}`)" :alt="i.type" />

        <div class="mt-md-3 ms-md-0 ms-3">
          <h6 class="name fsm-sm text-capitalize ub-bold">{{ i.type }}</h6>
          <p class="price fsm-xm ub-med mb-0">
            <!-- <span v-if="getPeriods == 'monthly'">${{ i.price }}/mo</span> -->
            ${{ i.price }}<span v-if="getPeriods == 'monthly'">/mo</span>
            <span v-else>/yr</span>
          </p>
          <p v-if="getPeriods == 'yearly'" class="free fsm-sm ub-med mb-0">
            2 months free ago
          </p>
        </div>
      </div>
    </div>
    <div class="periods-box rounded p-2 mt-5 d-flex justify-content-center">
      <span
        class="period ub-med"
        :class="getPeriods == 'monthly' ? 'selected' : ''"
        >monthly</span
      >
      <toggle-btn
        class="mx-4"
        @switch="changePeriod"
        :checked="getPeriods == 'yearly'"
      ></toggle-btn>
      <span
        class="period ub-med"
        :class="getPeriods == 'yearly' ? 'selected' : ''"
        >yearly</span
      >
    </div>
  </div>
</template>
<script>
export default {
  props: ["currentStep"],

  data() {
    return {
      selectedPlan: null,
      selected: 0,
    };
  },
  watch: {
    selected(val) {
      if (val > 0) {
        this.$store.dispatch("setPlans", {
          id: this.selected,
          perVal: this.switched,
          stepIndex: this.currentStep,
          stepVal: true,
        });
      }
    },

    resetData(val) {
      if (val) {
        this.selectedPlan = null;
        this.selected = 0;
      }
    },
  },
  methods: {
    changePeriod() {
      this.$store.commit("changePeriods");
      this.$store.dispatch("update");
    },
    selectPlan(ind) {
      this.selectedPlan = ind;
      this.selected = this.getData[ind].id;
    },
  },
  computed: {
    getData() {
      return this.$store.getters.getPlans;
    },
    getPeriods() {
      return this.$store.state.periods;
    },
    resetData() {
      return this.$store.state.reseting;
    },
  },
};
</script>
<style scoped>
.plan {
  border-color: var(--Cool-gray);
  cursor: pointer;
  flex-basis: 33.3%;
  border-radius: 0.5rem !important;
}
.plan img {
  max-width: 40px;
}
.plan:hover {
  transition: 0.5s;
  border-color: var(--Pastel-blue) !important;
}
.plan.selected {
  border-color: var(--Purplish-blue) !important;
  background-color: var(--Alabaster);
}
.plan .name {
  color: var(--Marine-blue);
}
.plan .price {
  color: var(--Cool-gray);
}
.plan .free {
  color: var(--Marine-blue);
}
.period {
  color: var(--Cool-gray);
}
.period.selected {
  color: var(--Marine-blue);
}
.periods-box {
  background-color: var(--Magnolia);
}
</style>
