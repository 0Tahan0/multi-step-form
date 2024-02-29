<template>
  <div>
    <special-title
      txt="Please provide your name, email address, and phone number."
      tit="Personal info"
    ></special-title>
    <b-form>
      <b-form-group id="input-group-1" :state="nameState.st" class="mb-3">
        <div class="d-flex justify-content-between">
          <label class="text-capitalize ub-med fsm-sm">name</label>
          <span
            class="errorMessage fsm-xm"
            :class="nameState.st == false ? 'd-block' : 'd-none'"
            >{{ nameState.msg }}</span
          >
        </div>
        <b-form-input
          class="mt-2 ub-med p-2 fsm-sm"
          type="text"
          placeholder="e.g Stephen King"
          @input="checker"
          v-model="name"
          :state="nameState.st"
        />
      </b-form-group>
      <b-form-group id="input-group-1" :state="emailState.st" class="mb-3">
        <div class="d-flex justify-content-between">
          <label class="text-capitalize ub-med fsm-sm">email address</label>
          <span
            class="errorMessage fsm-xm"
            :class="emailState.st == false ? 'd-block' : 'd-none'"
            >{{ emailState.msg }}</span
          >
        </div>
        <b-form-input
          class="mt-2 ub-med p-2 fsm-sm"
          type="text"
          placeholder="e.g stephenking@lorem.com"
          @input="checker"
          v-model="email"
          :state="emailState.st"
        />
      </b-form-group>
      <b-form-group id="input-group-1" :state="numState.st" class="mb-3">
        <div class="d-flex justify-content-between">
          <label class="text-capitalize ub-med fsm-sm">phone number</label>
          <span
            class="errorMessage fsm-xm"
            :class="numState.st == false ? 'd-block' : 'd-none'"
            >{{ numState.msg }}</span
          >
        </div>
        <b-form-input
          class="mt-2 ub-med p-2 fsm-sm"
          type="text"
          placeholder="e.g +1 234 567 890"
          v-model="num"
          @input="checker"
          :state="numState.st"
        />
      </b-form-group>
    </b-form>
  </div>
</template>
<script>
export default {
  props: ["currentStep"],
  data() {
    return {
      name: null,
      email: null,
      num: null,
    };
  },

  computed: {
    nameState() {
      if (this.name == "") return { st: false, msg: "This field is required" };
      else if (this.name == null) return { st: null, msg: "" };
      else return { st: true, msg: "" };
    },
    emailState() {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|hotmail).[a-zA-Z]{3,}$/;
      if (this.email == "") return { st: false, msg: "This field is required" };
      else if (this.email == null) return { st: null, msg: "" };
      else return { st: emailPattern.test(this.email), msg: "Invalid email" };
    },
    numState() {
      if (isNaN(this.num))
        return { st: false, msg: "This field should contain numbers only" };
      else if (this.num == null) return { st: null, msg: "" };
      else if (this.num.length < 10 && this.num != "")
        return { st: false, msg: "This field can not be less than 10" };
      else if (this.num == "")
        return { st: false, msg: "This field is required" };
      else return { st: true, msg: "" };

      //   return { st: null, msg: "" };
    },

    getState() {
      return this.$store.getters.Steps;
    },
    resetData() {
      return this.$store.state.reseting;
    },
  },

  methods: {
    checker() {
      if (this.nameState.st && this.emailState.st && this.numState.st) {
        this.$store.dispatch("setPersonInfo", {
          stepIndex: 0,
          stepVal: true,
          info: {
            name: this.name,
            email: this.email,
            phone: this.num,
          },
        });
      } else
        this.$store.commit("changeStepState", {
          stepIndex: this.currentStep,
          stepVal: false,
        });
    },
  },
  watch: {
    resetData(val) {
      if (val) {
        this.num = null;
        this.name = null;
        this.email = null;
        // this.$emit('resetDone',false)
      }
    },
  },
};
</script>
<style scoped>
.errorMessage {
  color: var(--Strawberry-red);

  /* font-size: 13px; */
  /* font-size: 0.8rem; */
}
input,
input:focus,
label {
  color: var(--Marine-blue);
  /* font-size: calc(0.4vw + 12px); */
  /* font-size: 1rem; */
}
</style>
