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
            class="bg-white border border-gray-200 rounded-lg shadow lg:sticky lg:top-[7rem]"
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
        <div class="flex flex-col gap-5 p-5 lg:grid grid-cols-3">
          <div
            class="bg-white border border-gray-200 rounded-lg shadow"
            v-for="n in 9"
            :key="n"
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
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped></style>
