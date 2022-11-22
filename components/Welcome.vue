<template>
  <div>
    <p class="text-xl font-black text-center italic font-mono">
      Welcome to the {{ pageName }} Page
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps({
  pageName: String,
});
</script>
