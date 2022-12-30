<template>
  <div class="event-list"></div>
</template>

<script setup lang="tsx">
import TestComp from "./TestComp.vue";

let test: number = 1;
const testFunc = () => {
  return <TestComp test={1}> </TestComp>;
};
</script>

<style lang="scss" scoped></style>
