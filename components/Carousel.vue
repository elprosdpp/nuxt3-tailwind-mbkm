<template>
  <div class="relative">
    <!-- Carousel wrapper -->
    <div class="relative overflow-hidden rounded-lg h-[37rem] object-cover">
      <!-- Item Carousel -->
      <div
        class="carousel-item relative w-full transform transition-all duration-500 ease-in-out"
        v-for="(img, i) in img"
        :id="`slide-${i}`"
        :key="i.id"
        :class="`${isActive === i ? 'active' : 'left-full'}`"
      >
        <!-- Content Text -->
        <div
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"
        >
          <h1 class="text-sm text-white lg:text-5xl font-bold">{{ img.content }}</h1>
        </div>

        <!-- Image Slider Carousel -->
        <img :src="img.img" :alt="`slide-${i}`" class="object-cover w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
const isActive = ref(0);
const props = defineProps({
  img: {
    type: Object,
  },
});

onMounted(() => {
  let i = 0;
  setInterval(() => {
    if (i > props.img.length - 1) {
      i = 0;
    }
    isActive.value = i++;
  }, 10000);
});
</script>

<style scoped>
.left-full {
  /* left: -100%; */
  opacity: 0;
}

.carousel-item {
  float: left;
  margin-right: -100%;
  backface-visibility: hidden;
}

.carousel-item.active {
  /* left: 0; */
  opacity: 1;
}
</style>
