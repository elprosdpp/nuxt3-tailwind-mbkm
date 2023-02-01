<template>
  <div>
    <!-- Heading Title and SEO Optimalisasi -->
    <Head>
      <Title>Home | MBKM Universitas Ngudi Waluyo</Title>
    </Head>

    <!-- Jumbotron Section -->
    <Carousel :img="img.data" />
    <section class="rounded-bl-[8rem]">
      <!-- Ornament -->
      <div class="w-full flex justify-between top-0 z-0">
        <!-- <div class="">
          <img
            src="@/assets/img/hero-top-left-image.svg"
            alt="Ornament"
            class="absolute left-0 w-[25rem]"
          />
        </div>
        <div class="float-right">
          <img
            src="@/assets/img/hero-top-right-image.svg"
            alt="Ornament"
            class="absolute right-0 w-[30rem]"
          />
        </div> -->
      </div>

      <!-- Content Jumbotron -->
      <div class="container mx-auto relative z-20 lg:max-w-xl">
        <div
          class="flex flex-col gap-4 items-center pt-[6rem] lg:justify-center lg:pt-[9rem]"
        >
          <!-- <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md text-xs px-1 py-1 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            MBKM UNW
          </button> -->
          <p class="text-white text-xs lg:text-sm">MBKM Universitas Ngudi Waluyo 👋</p>
        </div>
        <div class="flex justify-center p-7">
          <h1
            class="text-white font-bold text-[2.3em] text-center leading-[55px] lg:text-[3.35rem]"
          >
            MERDEKA BELAJAR
            <span
              class="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400"
              >KAMPUS MERDEKA</span
            >
          </h1>
        </div>

        <div class="py-3">
          <p class="text-gray-400 text-center mx-5">
            Website Resmi Merdeka Belajar Kampus Merdeka Universitas Ngudi Waluyo
          </p>

          <div class="flex justify-center items-center py-8">
            <button
              type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Daftar Sekarang!
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Program MBKM -->
    <section class="container mx-auto py-14">
      <!-- Title Section -->
      <TitleSection title="PROGRAM MBKM" />
      <!-- Content Section -->
      <div
        class="flex flex-col justify-center items-center gap-10 p-5 lg:flex-row"
        data-aos="fade-up"
      >
        <!-- Card 1 -->
        <div
          class="max-w-sm h-[29rem] bg-white border border-gray-200 rounded-lg cursor-pointer shadow hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <a href="#">
            <img
              class="relative rounded-t-lg h-[6rem] my-10"
              src="https://kampusmerdeka.kemdikbud.go.id/static/media/kampus-mengajar-logo.4cb4b8b5.webp"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Kampus Mengajar
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Bantu tingkatkan kualitas pengajaran pendidikan dasar melalui
              <span class="font-bold text-gray-600">Kampus Mengajar</span>
            </p>
            <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">
              <span class="font-bold text-gray-600">Pendaftaran:</span> Telah ditutup pada
              27 November 2022
            </p>
            <a
              href="#"
              class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >Selengkapnya</a
            >
          </div>
        </div>
        <!-- End Card 1 -->
        <!-- Card 1 -->
        <div
          class="max-w-sm h-[29rem] bg-white border border-gray-200 rounded-lg cursor-pointer shadow hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <a href="#">
            <img
              class="relative rounded-t-lg h-[6rem] my-10"
              src="https://kampusmerdeka.kemdikbud.go.id/static/media/msib-logo.8402a51e.webp"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Magang Merdeka
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Rasakan pengalaman dunia kerja dengan terjun langsung melalui
              <span class="font-bold text-gray-600">Magang Merdeka</span>
            </p>
            <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">
              <span class="font-bold text-gray-600">Pendaftaran:</span> Telah ditutup pada
              27 Januari 2023
            </p>
            <a
              href="#"
              class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >Selengkapnya</a
            >
          </div>
        </div>
        <!-- End Card 1 -->
        <!-- Card 1 -->
        <div
          class="max-w-sm h-[29rem] bg-white border border-gray-200 rounded-lg cursor-pointer shadow hover:shadow-md hover:-translate-y-3 duration-300"
        >
          <a href="#">
            <img
              class="relative rounded-t-lg h-[6rem] my-10"
              src="https://kampusmerdeka.kemdikbud.go.id/static/media/pmm-logo.02f2aceb.webp"
              alt=""
            />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Pertukaran Mahasiswa
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Bertukar pengalaman budaya dengan universitas lain melalui
              <span class="font-bold text-gray-600">Pertukaran Mahasiswa </span>dalam
              negeri
            </p>
            <p class="mb-6 font-normal text-gray-700 dark:text-gray-400">
              <span class="font-bold text-gray-600">Pendaftaran:</span> Telah ditutup pada
              5 Juli 2021
            </p>
            <a
              href="#"
              class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >Selengkapnya</a
            >
          </div>
        </div>
        <!-- End Card 1 -->
      </div>
      <!-- Button More News -->
      <div class="flex justify-center mt-5">
        <nuxt-link
          to="/program"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            ></path>
          </svg>
          Program Lainya
        </nuxt-link>
      </div>
    </section>

    <!-- Sambutan Rektor -->
    <section
      class="container mx-auto bg-[#121180] rounded-tr-[8rem] my-24 overflow-hidden lg:h-[43rem]"
      data-aos="fade-in"
    >
      <div
        class="flex flex-col-reverse justify-between p-5 gap-4 lg:p-24 lg:grid grid-cols-2"
      >
        <!-- Left Content -->
        <div class="1" data-aos="fade-right" data-aos-easing="ease-in-sine">
          <div class="border-b-8 border-indigo-500 w-32 mb-5"></div>
          <h1 class="text-white font-bold text-2xl lg:text-[50px] lg:leading-[55px]">
            Sambutan Rektor <br />
            <span
              class="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400"
              >Universitas Ngudi Waluyo.</span
            >
          </h1>

          <p class="text-white my-8 text-justify text-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio quisquam
            quaerat obcaecati praesentium? Vel ipsum debitis deleniti in consectetur quis
            commodi reiciendis totam amet nostrum facilis id odit quia placeat,
            exercitationem ab.
          </p>

          <button
            type="button"
            class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-8 inline-flex items-center lg:mb-2"
          >
            <svg
              class="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              ></path>
            </svg>
            Read More
          </button>
        </div>

        <!-- Right Content -->
        <div
          class="flex justify-center relative lg:h-[42rem] lg:-mt-24"
          data-aos="fade-left"
        >
          <div class="absolute bottom-20 lg:bottom-[5rem]">
            <span
              class="box-decoration-clone bg-gradient-to-r from-indigo-600 to-indigo-600 text-white px-5 py-2 text-xs font-bold lg:text-2xl"
            >
              Prof. Dr. Subyantoro, M.Hum.
            </span>
          </div>
          <img
            class="max-w-xs lg:max-w-md"
            src="../assets/img/rektor-unw-yellow.png"
            alt="Rektor UNW"
          />
        </div>
      </div>
    </section>

    <!-- Berita Terbaru -->
    <section class="container mx-auto py-14">
      <!-- Title Section -->
      <TitleSection title="BERITA TERBARU" />
      <!-- Content Section -->
      <div
        class="flex flex-col justify-center items-center gap-10 p-5 lg:flex-row"
        data-aos="fade-up"
      >
        <!-- Card 1 -->
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
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
        <!-- End Card 1 -->
        <!-- Card 1 -->
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
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
        <!-- End Card 1 -->
        <!-- Card 1 -->
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
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
        <!-- End Card 1 -->
      </div>
      <!-- Button More News -->
      <div class="flex justify-center mt-5">
        <nuxt-link
          to="berita"
          class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 inline-flex items-center"
        >
          <svg
            class="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            ></path>
          </svg>
          Berita Lainya
        </nuxt-link>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="container mx-auto py-16">
      <!-- Title Section -->
      <!-- <TitleSection title="TESTIMONI" /> -->
      <!-- Content Section -->
      <div class="bg-[#121180] rounded-bl-[8rem] p-14">
        <!-- Comma -->
        <div
          class="flex justify-center rounded-full w-40 h-40 bg-blue-500 p-5 relative -mt-[8rem]"
          data-aos="zoom-in"
        >
          <img src="../assets/img/quote1.png" alt="Testimoni" class="w-24 h-24 mt-3" />
        </div>

        <!-- Content Rendered -->
        <div class="flex flex-col lg:grid grid-cols-5 items-center overflow-hidden">
          <!-- Left Content -->
          <div class="col-span-2" data-aos="fade-right" data-aos-easing="ease-in-sine">
            <div class="border-b-8 border-indigo-500 w-32 mb-4 mt-10"></div>
            <h1 class="text-white font-bold text-2xl lg:text-[25px] lg:leading-[27px]">
              TESTIMONI MBKM<br />
              <span
                class="text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-orange-400"
              >
                Universitas Ngudi Waluyo.</span
              >
            </h1>

            <p class="text-white my-8 text-justify text-sm lg:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
              quisquam quaerat obcaecati praesentium? Vel ipsum debitis deleniti in
              consectetur quis commodi reiciendis totam amet nostrum facilis id odit quia
              placeat, exercitationem ab.
            </p>

            <!-- <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-8 inline-flex items-center lg:mb-2"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                ></path>
              </svg>
              Read More
            </button> -->
          </div>

          <!-- Right Content -->

          <div class="col-span-3" data-aos="fade-left" data-aos-easing="ease-in-sine">
            <div class="splide__track splide__track1" id="splide01-track">
              <Splide
                class="splide1"
                id="splide1"
                :options="{
                  rewind: true,
                  perPage: perpage,
                  gap: '1rem',
                  autoplay: true,
                }"
                aria-label="My Favorite Images"
              >
                <SplideSlide>
                  <div
                    class="max-w-xs lg:max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow"
                  >
                    <a href="#">
                      <img
                        class="rounded-t-lg"
                        src="https://flowbite.com/docs/images/blog/image-1.jpg"
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so
                        far, in reverse chronological order.
                      </p>
                      <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900">
                        Jack Sparrow
                      </h5>
                      <p class="-mt-3 text-[.7rem]">HR Manager</p>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div
                    class="max-w-xs lg:max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow"
                  >
                    <a href="#">
                      <img
                        class="rounded-t-lg"
                        src="https://flowbite.com/docs/images/blog/image-1.jpg"
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so
                        far, in reverse chronological order.
                      </p>
                      <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900">
                        Jack Sparrow
                      </h5>
                      <p class="-mt-3 text-[.7rem]">HR Manager</p>
                    </div>
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div
                    class="max-w-xs lg:max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow"
                  >
                    <a href="#">
                      <img
                        class="rounded-t-lg"
                        src="https://flowbite.com/docs/images/blog/image-1.jpg"
                        alt=""
                      />
                    </a>
                    <div class="p-5">
                      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        Here are the biggest enterprise technology acquisitions of 2021 so
                        far, in reverse chronological order.
                      </p>
                      <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900">
                        Jack Sparrow
                      </h5>
                      <p class="-mt-3 text-[.7rem]">HR Manager</p>
                    </div>
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Inialisasi
const runtimeConfigs = useRuntimeConfig();
const perpage = ref(1);

// Fetch Data Slider
const { data: img } = await useFetch(() => `${runtimeConfigs.public.API_URL}/sliders`);

// Fetch Data Slider
const { data: news } = await useFetch(
  () => `${runtimeConfigs.public.API_URL}/news?paginate=3`
);

// Size Window Function
const sizeWindow = () => {
  const track = document.getElementById("splide01-track");
  const splid = document.getElementById("splide1");
  if (window.innerWidth >= 500) {
    // console.log("Screen width is at least 500px ");
    track.classList.remove("splide__track1");
    splid.classList.remove("splide1");
    return (perpage.value = 2);
  } else {
    // console.log("Screen less than 500px");
    track.classList.add("splide__track1");
    splid.classList.add("splide1");
    return (perpage.value = 1);
  }
};

onMounted(() => {
  window.addEventListener("resize", sizeWindow);
  sizeWindow();
});

onUnmounted(() => {
  window.removeEventListener("resize", sizeWindow);
});
</script>

<style>
.splide1 {
  padding: 0;
}
.splide__arrows {
  visibility: hidden;
}

.splide__track1 {
  overflow: hidden;
  position: relative;
  z-index: 0;
  max-width: 19rem;
}

.splide__track {
  overflow: hidden;
  position: relative;
  z-index: 0;
}
</style>
