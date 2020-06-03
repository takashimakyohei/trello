<template>
  <div id="app">
    <div class="container">
      <List />
      <List />
    </div>
  </div>
</template>

<script>
import List from './components/List';

export default {
  components: {
    List,
  },
};
</script>

<style>
.container {
  display: flex;
}
</style>
