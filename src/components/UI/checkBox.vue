<template>
  <div>
    <div
      class="check border border-1 rounded-3 px-3 py-2 mb-2 d-flex align-items-center"
      @click="checking"
      :class="checker ? 'selected' : ''"
    >
      <input type="checkbox" :value="value" :checked="checker" />
      <div class="ms-5">
        <h6 class="option fsm-sm ub-bold">{{ option }}</h6>
        <p class="desc fsm-xm mb-0 ub-med">{{ desc }}</p>
      </div>

      <span class="ms-auto price fsm-sm ub-bold"
        >+${{ price }}/<span v-if="periods == 'monthly'">mo</span>
        <span v-else>yr</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: ["value", "option", "desc", "price", "periods"],

  data() {
    return {
      checker: false,
    };
  },
  methods: {
    checking() {
      this.checker = !this.checker;
      this.$emit("checked", { checked: this.checker, value: this.value });
    },
  },
  computed: {
    resetData() {
      return this.$store.state.reseting;
    },
  },
  watch: {
    resetData(val) {
      if (val) {
        this.checker = false;
      }
    },
  },
};
</script>
<style scoped>
.check {
  accent-color: var(--Purplish-blue);
  cursor: pointer;
  border-color: var(--Light-gray) !important;
  transition: 0.3s;
}

input[type="checkbox"] {
  cursor: pointer;
  font: inherit;
  width: 1.15rem;
  height: 1.15rem;
}

.check:hover {
  border-color: var(--Pastel-blue) !important;
}
.check.selected {
  border-color: var(--Purplish-blue) !important;
  background-color: var(--Alabaster);
}
.option {
  color: var(--Marine-blue);
  /* font-size: 1.1rem; */
}
.desc {
  color: var(--Cool-gray);
  /* font-size: 0.85rem !important; */
}
.price {
  color: var(--Purplish-blue);
}
</style>
