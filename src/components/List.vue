<template>
  <div>
    <h1>Listコンポーネント</h1>
    <card
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @clicked-remove-todo="removetodo(todo)"
    />
    <input-component
      @clicked-add-todo="addtodo"
      :value="value"
      @input="value = $event"
    />
  </div>
</template>

<script>
import card from './card';
import inputComponent from './inputComponent';
export default {
  data() {
    return {
      value: '',
      uid: 0,
      todos: [],
    };
  },
  components: {
    card,
    inputComponent,
  },
  methods: {
    addtodo() {
      console.log('子コンポーネントのイベントをキャッチしました。');
      const params = {
        title: this.value,
        id: this.uid++,
      };
      this.todos.push(params);
      this.value = '';
    },
    removetodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
};
</script>

<style></style>
