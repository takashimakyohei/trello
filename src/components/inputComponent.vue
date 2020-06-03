<template>
  <div>
    <h2>inputコンポーネント</h2>
    <input type="text" @keyup.enter="addtodo" v-model="$store.state.newtodo" />
  </div>
</template>

<script>
export default {
  methods: {
    addtodo() {
      if (!this.$store.state.newtodo) {
        return;
      }
      this.$store.commit('addtodo');
    },
  },
};
</script>

<style></style>
