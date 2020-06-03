<template>
  <div>
    <h1>Listコンポーネント</h1>
    <card />
    <input-component />
  </div>
</template>

<script>
import card from './card';
import inputComponent from './inputComponent';
export default {
  components: {
    card,
    inputComponent,
  },
};
</script>

<style></style>
