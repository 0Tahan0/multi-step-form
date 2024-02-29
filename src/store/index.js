import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    reseting: false,
    steps: [{ step: false }, { step: false }, { step: false }, { step: false }],
    final: {
      personalData: {},
      plan: {},
      additions: [],
      total: 0,
    },
    periods: "monthly",
    plans: [
      {
        id: 123,
        type: "arcade",
        price: { moPrice: 9, yrPrice: 90 },
        img: "icon-arcade.svg",
      },
      {
        id: 456,
        type: "advanced",
        price: { moPrice: 12, yrPrice: 120 },
        img: "icon-advanced.svg",
      },
      {
        id: 567,
        type: "pro",
        price: { moPrice: 15, yrPrice: 150 },
        img: "icon-pro.svg",
      },
    ],
    addOns: [
      {
        id: 123,
        title: "Online service",
        description: "Access to multiplayer games",
        price: { moPrice: 1, yrPrice: 10 },
      },
      {
        id: 456,
        title: "Larger storage",
        description: "Extra 1TB od cloud save",
        price: { moPrice: 2, yrPrice: 20 },
      },
      {
        id: 567,
        title: "Customizable profile",
        description: "custom theme on your profile",
        price: { moPrice: 2, yrPrice: 20 },
      },
    ],
  },
  getters: {
    getPlans(state) {
      const PLN = [];
      state.plans.forEach((pl) => {
        PLN.push({
          type: pl.type,
          img: pl.img,
          id: pl.id,
          price:
            state.periods == "monthly" ? pl.price.moPrice : pl.price.yrPrice,
        });
      });

      return PLN;
    },
    getAdditions(state) {
      const AddOns = [];
      state.addOns.forEach((ao) => {
        AddOns.push({
          title: ao.title,
          description: ao.description,
          id: ao.id,
          price:
            state.periods == "monthly" ? ao.price.moPrice : ao.price.yrPrice,
        });
      });
      return AddOns;
    },
    getFinal(state) {
      return state.final;
    },
  },
  mutations: {
    changeStepState(state, { stepIndex, stepVal }) {
      state.steps[stepIndex].step = stepVal;
    },
    changePeriods(state) {
      state.periods == "monthly"
        ? (state.periods = "yearly")
        : (state.periods = "monthly");
    },
    // ------------------Adding
    addPersonalData(state, info) {
      state.final.personalData = info;
    },
    addPlan(state, id) {
      const plan = this.getters.getPlans.find((pl) => pl.id == id);
      state.final.plan = {
        id: plan.id,
        type: plan.type,
        price: plan.price,
        period: state.periods,
      };
    },
    addAdditions(state, addOns) {
      if (addOns != "") {
        let additions = [];
        addOns.forEach((ao) => {
          additions.push(
            this.getters.getAdditions.find((ga) => ga.id == ao.id)
          );
        });
        state.final.additions = additions;
      } else state.final.additions = [];
    },
    sumTotal(state) {
      let total = 0;
      total = state.final.plan.price;
      state.final.additions.forEach((ad) => (total += ad.price));
      state.final.total = total;
    },
    resetData(state) {
      // state.reseting = false;
      state.periods = "monthly"
      state.final = {
      personalData: {},
      plan: {},
      additions: [],
      total: 0,
      
    },


      state.steps.forEach((stp) => (stp.step = false));
    },
  },
  actions: {
    setPersonInfo(context, payload) {
      context.commit("changeStepState", {
        stepIndex: payload.stepIndex,
        stepVal: payload.stepVal,
      });
      context.commit("addPersonalData", payload.info);
    },
    setPlans(context, payload) {
      context.commit("changeStepState", {
        stepIndex: payload.stepIndex,
        stepVal: payload.stepVal,
      });
      context.commit("addPlan", payload.id);
      context.commit("sumTotal");
    },
    setAdditions(context, payload) {
      context.commit("changeStepState", {
        stepIndex: payload.stepIndex,
        stepVal: payload.stepVal,
      });
      context.commit("addAdditions", payload.selected);
      context.commit("sumTotal");
    },
    update(context) {
      if (this.state.final.plan.id != null)
        context.commit("addPlan", this.state.final.plan.id);
      if (this.state.final.additions != "")
        context.commit("addAdditions", this.state.final.additions);
      context.commit("sumTotal");
    },
  },
});
