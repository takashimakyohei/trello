<template>
  <div>
    <h1>Listコンポーネント</h1>
    <draggable :options="{ group: 'items' }">
      <card
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @clicked-remove-todo="removetodo(todo)"
      />
    </draggable>
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
import draggable from 'vuedraggable';

export default {
  data() {
    return {
      value: '',
      uid: 0,
      todos: [],
    };
  },
  mounted() {
    //json がぶっ壊れている可能性があるので、その場合は local storage を削除
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch (e) {
        localStorage.removeItem('todos');
      }
    }
  },
  components: {
    card,
    inputComponent,
    draggable,
  },
  methods: {
    addtodo() {
      if (this.value == '') {
        return;
      }
      console.log('子コンポーネントのイベントをキャッチしました。');
      const params = {
        title: this.value,
        id: this.uid++,
      };
      this.todos.push(params);
      this.value = '';
      this.savetodos();
    },
    removetodo(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
      this.savetodos();
    },
    savetodos() {
      //this.todos の値を保存
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    },
  },
};
</script>

<style></style>
