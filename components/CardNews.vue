<template>
  <div class="flex flex-col gap-4 lg:grid grid-cols-3">
    <div
      v-for="(b, index) in data.data"
      :key="index"
      class="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md mb-8"
    >
      <NuxtLink
        :to="`/berita/` + b.slug"
        id="boderNone"
        class="relative bg-clip-border mx-4 rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg -mt-6 c7"
      >
        <img :src="b.image" :alt="b.title" class="c8 d4 f1" />
      </NuxtLink>
      <div class="p-6">
        <p
          class="block antialiased text-sm font-normal leading-normal text-blue-500 b3 g4"
        >
          {{ b.newsCategory.name }}
        </p>
        <NuxtLink
          :to="`/berita/` + b.slug"
          id="boderNone"
          class="b3 c6 d9 e2 e4 g7 g8 g9:mtr-text-blue-500"
          ><div class="a9">
            <h5
              class="block antialiased tracking-normal text-xl font-semibold leading-snug text-inherit g6"
            >
              {{ b.title.substring(0, 40) + ".." }}
            </h5>
          </div>
        </NuxtLink>
        <p
          class="block antialiased text-base font-normal leading-relaxed text-gray-700 b5 g5"
        >
          <span v-html="b.excerpt.substring(0, 100) + '..'"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
});
</script>

<style>
.a9 {
  grid-column: span 5 / span 5 !important;
}
.c7 {
  height: 16rem !important;
}
.f1 {
  -o-object-fit: cover !important;
  object-fit: cover !important;
}
.d4 {
  width: 100% !important;
}
.c8 {
  height: 100% !important;
}

.g4 {
  font-weight: 600 !important;
}

.b3 {
  margin-bottom: 0.25rem !important;
}

.g8 {
  transition-property: color, background-color, border-color, fill, stroke,
    -webkit-text-decoration-color !important;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke !important;
  transition-property: color, background-color, border-color, text-decoration-color, fill,
    stroke, -webkit-text-decoration-color !important;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
  transition-duration: 150ms !important;
}

.g7 {
  --tw-text-opacity: 1 !important;
  color: rgb(38 50 56 / var(--tw-text-opacity)) !important;
}
.e4 {
  gap: 0.5rem !important;
}
.e2 {
  align-items: flex-start !important;
}
.d9 {
  grid-template-columns: repeat(6, minmax(0, 1fr)) !important;
}
.c6 {
  display: grid !important;
}
.b3 {
  margin-bottom: 0.25rem !important;
}
.g5 {
  font-weight: 400 !important;
}
.b5 {
  margin-bottom: 2rem !important;
}
.e5 {
  gap: 0.75rem !important;
}
.e3 {
  align-items: center !important;
}
</style>
