<template>
  <div>
    <a-button class="hjsy w-100px" @click="toAdd" type="dashed">确认</a-button>
    {{ number }}
  </div>
</template>

<script setup lang="ts">
const number = ref<number>(0);

const toAdd = () => {
  number.value += 1;
};
</script>
