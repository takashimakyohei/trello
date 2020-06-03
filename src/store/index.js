import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [],
    newtodo: '',
  },
  mutations: {
    addtodo(state) {
      state.todos.push(state.newtodo);
      state.newtodo = '';
    },
  },
  actions: {},
  modules: {},
});
