<template>
  <div>
    <!-- Heading Title and SEO Optimalisasi -->
    <Head>
      <Title>Kurikulum | MBKM Universitas Ngudi Waluyo</Title>
    </Head>

    <!-- Jumbotron Section -->
    <section>
      <HeaderPage text="Kurikulum" />
    </section>

    <section class="container mx-auto py-14">
      <CardNews :data="newsData" />
    </section>
  </div>
</template>

<script setup>
// Inialisasi
const runtimeConfigs = useRuntimeConfig();
const page = ref(1);
const search = ref([]);
const paginates = ref(6);
const sort = ref("asc");
const field = ref("created_at");

// fetch Data
const { data: newsData, pending, refresh } = await useFetch(
  () =>
    `${runtimeConfigs.public.API_URL}/news?page=${page.value}&search=${search.value}&paginate=${paginates.value}&field=${field.value}&direction=${sort.value}`
);
</script>

<style></style>
