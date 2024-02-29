<template>
  <div class="position-relative" id="CARD">
    <b-card class="theCard border-0 shadow position-relative">
      <b-row>
        <b-col md="4" lg="4">
          <slideBar :currentStep="current_step" />
        </b-col>
        <b-col
          md="8"
          lg="8"
          class="content p-md-5 p-2 mx-md-auto d-md-flex flex-column justify-content-between"
        >
          <!-- <the-form></the-form> -->

          <div v-if="conf != true">
            <keep-alive>
              <component
                :is="selectedComponent[current_step - 1]"
                :currentStep="current_step - 1"
                @reset="reset"
                class="px-md-2"
              >
              </component>
            </keep-alive>

            <div class="mt-5 d-md-flex d-none justify-content-between">
              <b-button
                v-if="current_step > 1"
                class="btn-light text-capitalize mainBtn"
                @click="prev()"
                :disabled="current_step == selectedComponent.length"
                >go back</b-button
              >
              <b-button
                v-if="current_step != selectedComponent.length"
                class="blue-btn ms-auto text-capitalize mainBtn"
                @click="next()"
                :disabled="!checkCurrentStep"
                >next step</b-button
              >
              <b-button
                v-if="current_step == selectedComponent.length"
                class="blue-btn-2 ms-auto text-capitalize mainBtn"
                @click="confirm()"
                >confirm</b-button
              >
            </div>
          </div>
          <the-confirming
            v-else
            img="icon-thank-you.svg"
            title="Thank you!"
            text="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
          />
        </b-col>
      </b-row>
    </b-card>
    <div
      v-if="conf != true"
      class="btn-box position-sticky bottom-0 top-100 d-flex d-md-none p-2 pb-2 shadow rounded justify-content-between"
    >
      <b-button
        v-if="current_step > 1"
        class="btn-light text-capitalize mainBtn"
        :disabled="current_step == selectedComponent.length"
        @click="prev()"
        >go back</b-button
      >
      <b-button
        v-if="current_step != selectedComponent.length"
        class="blue-btn ms-auto text-capitalize mainBtn"
        @click="next()"
        :disabled="!checkCurrentStep"
        >next step</b-button
      >
      <b-button
        v-if="current_step == selectedComponent.length"
        class="blue-btn-2 ms-auto text-capitalize mainBtn"
        @click="confirm()"
        >confirm</b-button
      >
    </div>
  </div>
</template>
<script>
import theForm from "@/components/theForm.vue";
import thePlans from "@/components/thePlans.vue";
import addOns from "@/components/addOns.vue";
import theFinishingup from "@/components/theFinishingup.vue";
import theConfirming from "@/components/theConfirming.vue";

import slideBar from "@/components/slideBar.vue";

export default {
  data() {
    return {
      selectedComponent: ["the-form", "the-plans", "addOns", "the-Finishingup"],
      current_step: 1,
      conf: false,
      
    };
  },
  components: {
    theForm,
    slideBar,
    thePlans,
    addOns,
    theFinishingup,
    theConfirming,
  },
  computed: {
    checkCurrentStep() {
      return this.$store.state.steps[this.current_step - 1].step;
    },
  },
  methods: {
    next() {
      this.current_step++;
    },
    prev() {
      this.current_step--;
    },
    confirm() {
      this.conf = true;
    },
    reset(val) {
      this.$store.state.reseting = true;
      this.$store.commit("resetData");
      this.current_step = val;
      // this.resetData = false
    },
  },
  watch: {
    current_step(val) {
      if (val == this.selectedComponent.length - 1) {
        this.$store.state.reseting = false;
      }
    },
  },
};
</script>
<style scoped>
#CARD {
  /* background: var(--White); */
  /* height: 100vh; */
  max-width: 992px;
  margin: auto;
}

@media (max-width: 767px) {
  #CARD {
    height: 100vh;
  }
  .theCard > div {
    padding: 0;
  }
  .content {
    --space: 2rem;
    position: absolute;
    top: 75%;
    left: 0;
    /* transform: translateY(-50%); */
    background: var(--White);
    box-shadow: 0px 0px 10px #0000003a;
    border-radius: 0.5rem;
    width: calc(100% - var(--space));
    margin-left: calc(var(--space) / 2);
  }

  .btn-box {
    background: var(--White);
    height: calc(10%);
    align-items: center;
  }
}
@media (min-width: 768px) {
  .content {
    min-height: 550px;
  }
}
</style>
