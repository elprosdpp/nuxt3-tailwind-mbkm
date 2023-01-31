<template>
  <div>
    <nav
      class="fixed w-full bg-transparent z-50 p-6 text-white font-semibold lg:p-0"
      id="mynav"
    >
      <div
        class="container mx-auto flex items-center justify-between pb-0 lg:pb-10 lg:pt-[1.5rem]"
      >
        <!-- Header logo -->
        <nuxt-link to="/" class="flex items-center gap-2" id="nav-mobile">
          <img class="w-10" src="../assets/img/unw.png" alt="LOGO UNW" />
          <h1 class="font-bold text-[13px] leading-4">
            MERDEKA BELAJAR KAMPUS MERDEKA
            <br />
            <span class="text-[17px]">UNIVERSITAS NGUDI WALUYO</span>
          </h1>
        </nuxt-link>

        <!-- Mobile toggle -->
        <div class="md:hidden relative z-30">
          <button type="button" @click="isOpen = !isOpen">
            <svg
              class="h-8 w-8 fill-current"
              id="btn-toggle"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Navbar -->
        <div class="hidden md:block">
          <ul class="flex space-x-8 items-center text-[16px]" id="navText">
            <li>
              <nuxt-link to="/" class="link p-1">Home </nuxt-link>
            </li>
            <li>
              <!-- <div class="dropdown link py-1">
                <div class="flex justify-between items-center">
                  <button class="cursor-pointer dropbtn">Program MBKM</button>
                  <svg
                    class="w-4 ml-2"
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
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </div>
                <div class="container flex justify-center">
                  <div class="dropdown-content max-w-xl rounded-lg">
                    <div
                      class="grid max-w-screen-xl px-4 py-5 mx-auto text-sm md:grid-cols-3 md:px-6"
                    >
                      <ul
                        class="hidden mb-4 space-y-4 md:mb-0 md:block"
                        aria-labelledby="mega-menu-full-image-button"
                      >
                        <li>
                          <a
                            href="#"
                            class="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Online Stores
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Segmentation
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Marketing CRM
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Online Stores
                          </a>
                        </li>
                      </ul>
                      <ul class="mb-4 space-y-4 md:mb-0">
                        <li>
                          <a
                            href="#"
                            class="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Our Blog
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Terms & Conditions
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            License
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            class="hover:underline hover:text-blue-600 dark:hover:text-blue-500"
                          >
                            Resources
                          </a>
                        </li>
                      </ul>
                      <a
                        href="#"
                        class="p-8 text-left bg-local bg-gray-500 bg-center bg-no-repeat bg-cover rounded-lg bg-blend-multiply hover:bg-blend-soft-light dark:hover:bg-blend-darken"
                        style="background-image: url(/docs/images/dashboard-overview.png)"
                      >
                        <p
                          class="max-w-xl mb-5 font-extrabold leading-tight tracking-tight text-white"
                        >
                          Preview the new Flowbite dashboard navigation.
                        </p>
                        <button
                          type="button"
                          class="inline-flex items-center px-2.5 py-1.5 text-xs font-medium text-center text-white border border-white rounded-lg hover:bg-white hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-700"
                        >
                          Gasd
                          <svg
                            class="w-4 h-4 ml-1 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div> -->
              <nuxt-link to="/program" class="p-1">Program </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/kurikulum" class="p-1">Kurikulum </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/unduhan" class="p-1">Unduhan </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/kontak" class="p-1">Kontak</nuxt-link>
            </li>
          </ul>
        </div>

        <!-- Button -->
        <div class="hidden md:block">
          <button
            type="button"
            class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Login
          </button>
        </div>

        <!-- Drawer Menu -->
        <aside
          class="p-5 transform top-0 left-0 w-64 bg-white text-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 md:hidden"
          :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
        >
          <div class="close">
            <button class="absolute top-0 right-0 mt-4 mr-4" @click="isOpen = false">
              <svg
                class="w-6 h-6"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <span @click="isOpen = false" class="flex w-full items-center p-4 border-b">
            <h1>MBKM-UNW</h1>
          </span>

          <ul class="divide-y font-sans">
            <li>
              <nuxt-link to="/" @click="isOpen = false" class="my-4 inline-block"
                >Home
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/program" @click="isOpen = false" class="my-4 inline-block"
                >Program
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/kurikulum" @click="isOpen = false" class="my-4 inline-block"
                >Kurikulum
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/unduhan" @click="isOpen = false" class="my-4 inline-block"
                >Unduhan
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/kontak" @click="isOpen = false" class="my-4 inline-block"
                >Kontak</nuxt-link
              >
            </li>
            <li>
              <a
                href="#"
                @click="isOpen = false"
                class="my-8 w-full text-center font-semibold cta inline-block bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded text-white"
                >Login</a
              >
            </li>
          </ul>

          <!-- <div class="follow">
            <p class="italic font-sans text-sm">follow us:</p>
            <div class="social flex space-x-5 mt-4">
              <a href="#">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="twitter"
                  class="h-5 w-5 fill-current text-gray-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  class="h-5 w-5 fill-current text-gray-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  ></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  class="h-5 w-5 fill-current text-gray-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </a>
              <a href="#">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="youtube"
                  class="h-5 w-5 fill-current text-gray-600"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
                  ></path>
                </svg>
              </a>
            </div>
          </div> -->
        </aside>
      </div>
    </nav>
  </div>
</template>

<script setup>
const isOpen = ref(false);

function logScroll() {
  const myNav = document.getElementById("mynav");
  const navText = document.getElementById("navText");
  const nav_mobile = document.getElementById("nav-mobile");
  const btn_toggle = document.getElementById("btn-toggle");
  if (window.scrollY <= 50) {
    myNav.classList.remove("navbar");
    navText.classList.remove("nav-text");
    nav_mobile.classList.remove("text-mobile-menu");
    btn_toggle.classList.remove("btn-toggle");
  } else {
    myNav.classList.add("navbar");
    navText.classList.add("nav-text");
    nav_mobile.classList.add("text-mobile-menu");
    btn_toggle.classList.add("btn-toggle");
  }
}
onMounted(() => {
  window.addEventListener("scroll", logScroll);
});
</script>

<style scoped>
.dropbtn {
  padding: 35px 0px 35px 0px;
}

.dropdown-content {
  visibility: hidden;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  transform: translateY(50px);
  opacity: 0;
  transition: visibility 0s, transform 0.3s, opacity 0.3s linear;
}
.dropdown-content a {
  float: none;
  color: black;
  padding: 5px;
  text-decoration: none;
  display: block;
  text-align: left;
}
.dropdown:hover .dropdown-content {
  visibility: visible;
  opacity: 1;
  transform: translateY(0px);
}
.dropdown-content a:hover {
  font-weight: bold;
  color: rgb(12, 8, 233);
}
</style>
