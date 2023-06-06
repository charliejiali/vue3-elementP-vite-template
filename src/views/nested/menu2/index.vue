<template>
  <div>
    {{ name }}
  </div>
</template>

<script setup lang="ts">
const name = ref('')
name.value = nestedConfig.menu2Name
</script>
