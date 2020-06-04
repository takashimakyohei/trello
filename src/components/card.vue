<template>
  <div>
    <h2>カードコンポーネント</h2>
    {{ todo.title }}
    {{ todo }}
    {{ todo.id }}
    <button @click="removetodo">削除</button>
  </div>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    removetodo(todo) {
      this.$emit('clicked-remove-todo', todo);
    },
  },
};
</script>

<style></style>
