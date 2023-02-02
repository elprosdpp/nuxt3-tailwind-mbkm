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
        <!-- <div class="p-5">
          <div
            class="w-[20rem] bg-white border border-gray-200 rounded-lg shadow lg:sticky lg:top-[7rem]"
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
        </div> -->
        <!-- HR -->
        <!-- <div class="border-b-2 lg:border-r-2"></div> -->

        <!-- Content Render -->
        <div class="mt-10 p-10">
          <!-- Filter Search & Paginate -->
          <div class="flex flex-col gap-4 items-center mb-20 lg:flex-row justify-between">
            <div class="inline-flex items-center">
              <p class="mr-2">Show</p>
              <select
                @change="paginate($event.target.value)"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-3 outline-none"
              >
                <option selected>6</option>
                <option value="9">9</option>
                <option value="12">12</option>
                <option value="14">14</option>
              </select>
              <p class="ml-2">Entries</p>
            </div>

            <div class="flex flex-col items-center gap-4 lg:flex-row">
              <div class="inline-flex items-center">
                <p class="mr-2">Search :</p>
                <div class="relative">
                  <div
                    class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
                  >
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    v-model="search"
                    class="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-md outline-none focus:border focus:border-blue-600"
                    placeholder="Search File"
                    required
                  />
                </div>
              </div>
              <div class="">
                <select
                  @change="sortir($event.target.value)"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 px-3 outline-none"
                >
                  <option selected>Ascending ↑</option>
                  <option value="desc">Descending ↓</option>
                </select>
              </div>
            </div>
          </div>
          <CardNews :data="newsData" />
        </div>
      </div>

      <!-- Meta & Pagination -->
      <div
        class="flex flex-col gap-4 items-center my-3 px-0 lg:flex-row justify-between lg:px-10"
      >
        <span class="text-sm text-gray-700 dark:text-gray-400">
          Showing
          <span class="font-semibold text-gray-900">{{ newsData.meta.from }}</span>
          to
          <span class="font-semibold text-gray-900">{{ newsData.meta.to }}</span>
          of
          <span class="font-semibold text-gray-900">{{ newsData.meta.total }}</span>
          Entries
        </span>
        <Pagination
          :totalPages="newsData.meta.last_page"
          :perPage="newsData.meta.per_page"
          :currentPage="page"
          @pagechanged="refetch"
        />
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
  sort.value = sort.value === "asc" ? "desc" : "asc";
  // field.value = s;
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
