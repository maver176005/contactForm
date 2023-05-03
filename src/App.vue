<script setup>
import Form from "./components/Form.vue";
import Form2 from "./components/Form2.vue";
</script>

<template>
  <h2>форма заявки на вакансию</h2>
  <div>
    <Form />
    <Form2 />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
