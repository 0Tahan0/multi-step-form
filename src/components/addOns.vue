<template>
  <div>
    <special-title
      tit="Pick add-ons"
      txt="Add-ons help enhance your  gaming experience."
    />

    <b-form-checkbox-group v-model="selected" class="addOns-box">
      <div v-for="(i, index) in getData" :key="index">
        <check-box
          :value="i"
          :option="i.title"
          :desc="i.description"
          :price="i.price"
          :periods="periods"
          :resetData="resetData"
          @checked="addToSelected"
        >
        </check-box>
      </div>
    </b-form-checkbox-group>
    <!-- {{ selected }} -->
  </div>
</template>
<script>
export default {
  props: ["currentStep"],

  data() {
    return {
      selected: [],
    };
  },
  watch: {
    selected(val) {
      this.$store.dispatch("setAdditions", {
        stepIndex: this.currentStep,
        stepVal: val != "",
        selected: this.selected,
      });
    },
    resetData(val) {
      if (val) {
        this.selected = [];
        
        
      }
    },
  },
  methods: {
    addToSelected(payload) {
      if (payload.checked) this.selected.push(payload.value);
      else
        this.selected = this.selected.filter((se) => se.id != payload.value.id);
    },
  },
  computed: {
    getData() {
      return this.$store.getters.getAdditions;
    },
    periods() {
      return this.$store.getters.getPeriods;
    },resetData(){
      return this.$store.state.reseting
    }
  },
};
</script>
<style scoped>
.addition.selected {
  border-color: var(--Purplish-blue) !important;
  background-color: var(--Alabaster);
}
</style>
