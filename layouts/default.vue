<template>
  <div>
    <NuxtLoadingIndicator />
    <!-- Header Navbar-->
    <header>
      <Navbar />
    </header>

    <!-- Content Render -->
    <div>
      <slot />
    </div>

    <!-- Footer -->
  </div>
</template>

<script setup></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;600;700;800&display=swap");

* {
  font-family: "Poppins";
}
</style>
