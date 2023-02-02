<template>
  <div>
    <!-- Heading Title and SEO Optimalisasi -->
    <Head>
      <Title>{{ detailNews.data.title }} | MBKM Universitas Ngudi Waluyo</Title>
      <Meta name="description" :content="detailNews.data.excerpt" />
    </Head>

    <!-- Jumbotron Section -->
    <section class="relative">
      <div
        :class="`w-full h-screen bg-[url('${detailNews.data.image}')] bg-cover bg-center`"
      >
        <div
          class="w-full h-full flex justify-center items-center backdrop-brightness-50"
        >
          <span class="text-white text-4xl w-1/2 text-center">{{
            detailNews.data.title
          }}</span>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-14">
      <h1 class="text-black">{{ detailNews.data.title }}</h1>
    </section>
  </div>
</template>

<script setup>
// Inialisasi
const runtimeConfigs = useRuntimeConfig();
const route = useRoute();

// fetch Data
const { data: detailNews, pending, refresh } = await useFetch(
  () => `${runtimeConfigs.public.API_URL}/news/${route.params.id}`
);
</script>

<style lang="scss" scoped></style>
