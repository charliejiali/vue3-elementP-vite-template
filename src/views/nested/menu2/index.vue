<template>
  <div>
    {{ name }}
  </div>
</template>

<script setup lang="ts">
const name = ref('')
name.value = window.dict.menu2Name
</script>
