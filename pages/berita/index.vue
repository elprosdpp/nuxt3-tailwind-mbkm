<template>
  <div>
    <!-- Heading Title and SEO Optimalisasi -->
    <Head>
      <Title>Berita | MBKM Universitas Ngudi Waluyo</Title>
    </Head>

    <!-- Jumbotron Section -->
    <section>
      <HeaderPage text="Berita" />
    </section>

    <!-- Content Render -->
    <section class="container mx-auto py-14">
      <div class="flex flex-col justify-between gap-5 lg:flex-row lg:p-0">
        <!-- Navigation Filter Sort -->
        <div class="p-5">
          <div
            class="max-w-xl bg-white border border-gray-200 rounded-lg shadow lg:sticky lg:top-[7rem]"
          >
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in
                reverse chronological order.
              </p>
            </div>
          </div>
        </div>
        <!-- HR -->
        <div class="border-b-2 lg:border-r-2"></div>
        <!-- Content Render -->
        <div class="flex flex-col gap-5 p-5 lg:grid grid-cols-2 items-center">
          <div
            class="max-w-xl h-[29rem] bg-white border border-gray-200 rounded-lg shadow"
            v-for="(b, index) in newsData.data"
            :key="index"
          >
            <a href="#">
              <img
                class="rounded-t-lg object-cover w-[27rem] h-[16rem]"
                :src="b.image"
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
                  {{ b.title.substring(0, 40) + ".." }}
                </h5>
              </a>
              <p class="mb-3 text-sm font-normal text-gray-700 dark:text-gray-400">
                <span v-html="b.excerpt.substring(0, 100) + '..'"></span>
              </p>
            </div>
          </div>

          <!-- Meta & Pagination -->
          <div class="row-span-2">
            <span class="text-sm text-gray-700 dark:text-gray-400">
              Showing
              <span class="font-semibold text-gray-900">{{ newsData.meta.from }}</span>
              to
              <span class="font-semibold text-gray-900">{{ newsData.meta.to }}</span>
              of
              <span class="font-semibold text-gray-900">{{ newsData.meta.total }}</span>
              Entries
            </span>
          </div>
          <div class="row-span-3">
            <Pagination
              :totalPages="newsData.meta.last_page"
              :perPage="newsData.meta.per_page"
              :currentPage="page"
              @pagechanged="refetch"
            />
          </div>
        </div>
      </div>
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

// Page Number
function refetch(pageNumber) {
  page.value = pageNumber;
  refresh();
}

// Paginate
function paginate(event) {
  paginates.value = event;
  refresh();
}

// Sort
function sortir(s) {
  if (s === field.value) {
    sort.value = sort.value === "asc" ? "desc" : "asc";
  }
  field.value = s;
  refresh();
}

// Silent Update URL
watch(newsData, () => {
  navigateTo({
    path: "/berita",
    query: {
      paginate: paginates.value,
      page: page.value,
      search: search.value,
      field: field.value,
      sort: sort.value,
    },
  });
});
</script>

<style scoped></style>
