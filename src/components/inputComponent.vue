<template>
  <div>
    <h2>inputコンポーネント</h2>
    <input
      type="text"
      @keyup.enter="addtodo"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {};
  },
  methods: {
    addtodo() {
      // 親コンポーネントであるList.vueにemitでイベントを発火させる。
      this.$emit('clicked-add-todo');
    },
  },
};
</script>

<style></style>
