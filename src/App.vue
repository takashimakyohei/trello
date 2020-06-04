<template>
  <div id="app">
    <div class="container">
      <List />
    </div>
  </div>
</template>

<script>
import List from './components/List';

export default {
  data() {
    return {};
  },
  components: {
    List,
  },
  methods: {},
};
</script>

<style>
.container {
  display: flex;
}
</style>
