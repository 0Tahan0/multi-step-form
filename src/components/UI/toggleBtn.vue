<template>
  <b-button
    :class="checked ? 'switched' : ''"
    class="toggleBtn toggle rounded-5 position-relative"
    @click="changeSt"
  >
  </b-button>
</template>
<script>
export default {
  props: {
    checked: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    changeSt() {
      this.$emit("switch", !this.checked);
    },
  },
};
</script>

<style scoped>
.toggleBtn {
  width: 75px;
  height: 30px;

  background: var(--Marine-blue);
}

.toggleBtn::before {
  content: "";
  --size: 20px;
  height: var(--size);
  width: var(--size);
  background: var(--Magnolia);
  border-radius: 100vmax;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 5px;
  transition: 0.3s;
}

.toggleBtn.switched::before {
  left: calc(100% - 5px - var(--size));
}
</style>
