<template>
  <div>
    <!-- Heading Title and SEO Optimalisasi -->
    <Head>
      <Title>Unduhan | MBKM Universitas Ngudi Waluyo</Title>
    </Head>

    <!-- Jumbotron Section -->
    <section>
      <HeaderPage text="Unduhan" />
    </section>

    <!-- Table Section Download -->
    <section class="container mx-auto py-14">
      <div class="relative overflow-x-auto p-14 bg-white shadow-lg sm:rounded-lg">
        <!-- Title -->
        <h1 class="text-3xl my-4 font-semibold">List Unduhan</h1>
        <hr />

        <!-- Filter Search & Paginate -->
        <div class="flex flex-col gap-4 items-center my-5 lg:flex-row justify-between">
          <div class="inline-flex items-center">
            <p class="mr-2">Show</p>
            <select
              @change="paginate($event.target.value)"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 px-3 outline-none"
            >
              <option selected>10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <p class="ml-2">Entries</p>
          </div>

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
        </div>

        <!-- Table Render Data -->
        <!-- <div class="" v-if="pending"><LoadingTable /></div> -->
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="border text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" class="px-6 py-3">No</th>
              <th scope="col" class="px-6 py-3">
                <div
                  class="flex items-center cursor-pointer max-w-[6rem]"
                  @click="sortir('name')"
                >
                  Nama File
                  <SortTable :field="field" name="name" :sort="sort" />
                </div>
              </th>
              <th scope="col" class="px-6 py-3">
                <div
                  class="flex items-center max-w-[4rem] cursor-pointer"
                  @click="sortir('slug')"
                >
                  Slug
                  <SortTable :field="field" name="slug" :sort="sort" />
                </div>
              </th>
              <th scope="col" class="px-6 py-3">Deskrisi</th>
              <th scope="col" class="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border" v-for="(dokumen, index) in documents.data" :key="index">
              <td scope="row" class="px-6 py-4">{{ documents.meta.from + index }}.</td>
              <td scope="row" class="px-6 py-4">{{ dokumen.name }}</td>
              <td scope="row" class="px-6 py-4">{{ dokumen.slug }}</td>
              <td scope="row" class="px-6 py-4">{{ dokumen.description }}</td>
              <td scope="row" class="px-6 py-4">
                <a
                  :href="`http://panel-bkapp.unw.ac.id:2324/file-password/` + dokumen.id"
                  class="font-medium text-blue-600 hover:underline"
                  target="_blank"
                  download
                >
                  Download
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <!-- Meta & Pagination -->
        <div class="flex flex-col gap-4 items-center my-5 lg:flex-row justify-between">
          <span class="text-sm text-gray-700 dark:text-gray-400">
            Showing
            <span class="font-semibold text-gray-900">{{ documents.meta.from }}</span>
            to
            <span class="font-semibold text-gray-900">{{ documents.meta.to }}</span>
            of
            <span class="font-semibold text-gray-900">{{ documents.meta.total }}</span>
            Entries
          </span>
          <Pagination
            :totalPages="documents.meta.last_page"
            :perPage="documents.meta.per_page"
            :currentPage="page"
            @pagechanged="refetch"
          />
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
const paginates = ref(10);
const sort = ref("asc");
const field = ref("name");

// fetch Data
const { data: documents, pending, refresh } = await useFetch(
  () =>
    `${runtimeConfigs.public.API_URL}/documents?page=${page.value}&search=${search.value}&paginate=${paginates.value}&field=${field.value}&direction=${sort.value}`
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
  sort.value = sort.value == "asc" ? "desc" : "asc";
  field.value = s;
  refresh();
}

// Silent Update URL
watch(documents, () => {
  navigateTo({
    path: "/unduhan",
    query: {
      paginate: paginates.value,
      page: page.value,
      search: search.value,
      field: field.value,
      sort: sort.value,
    },
  });
});

// Download Button
// const download = (id) => {
//   const url = "http://panel-bkapp.unw.ac.id:2324/file-password/" + id;
//   window.location.href = url;
// };
</script>

<style scoped>
/* .fokus-none:focus {
  border: none;
  outline: none;
} */
</style>
