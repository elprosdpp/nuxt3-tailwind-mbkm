<template>
  <div class="flex justify-center pb-10">
    <div class="text-2xl font-bold text-center border-b-8 p-2 border-indigo-500 text-[#1d1b84]">
      {{ title }}
    </div>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
