<template>
  <div>
    <h2>カードコンポーネント</h2>
    <div v-for="todo in todos" :key="todo.id">
      {{ todo }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
};
</script>

<style></style>
