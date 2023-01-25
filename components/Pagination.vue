<template>
  <nav aria-label="Page navigation example">
    <ul class="inline-flex -space-x-px">
      <!-- Button -->
      <li>
        <button
          type="button"
          @click="onClickFirstPage"
          :disabled="isInFirstPage"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100"
        >
          First
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="onClickPreviousPage"
          :disabled="isInFirstPage"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
        >
          Previous
        </button>
      </li>
      <!-- End Button -->

      <!-- Index Halaman Sesuai Total Page -->
      <li v-for="page in pages" :key="page.name">
        <button
          type="button"
          @click="onClickPage(page.name)"
          :disabled="page.isDisabled"
          :class="{ activePage: isPageActive(page.name) }"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
        >
          {{ page.name }}
        </button>
      </li>
      <!-- End Index Halaman Sesuai Total Page -->

      <!-- Button -->
      <li>
        <button
          type="button"
          @click="onClickNextPage"
          :disabled="isInLastPage"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100"
        >
          Next
        </button>
      </li>
      <li>
        <button
          type="button"
          @click="onClickLastPage"
          :disabled="isInLastPage"
          class="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100"
        >
          Last
        </button>
      </li>
      <!-- End Button -->
    </ul>
  </nav>
</template>

<script setup>
const emit = defineEmits(["pagechanged"]);
const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 3,
  },
  totalPages: {
    value: [Number, String],
    required: false,
  },
  perPage: {
    value: [Number, String],
    required: false,
  },
  currentPage: {
    type: Number,
    required: false,
    default: 1,
  },
});

const startPage = computed(() => {
  // When on the first page
  if (props.currentPage === 1) {
    return 1;
  }

  // When on the last page
  if (props.currentPage === props.totalPages) {
    const start = props.totalPages - (props.maxVisibleButtons - 1);

    if (start === 0) {
      return 1;
    } else {
      return start;
    }
  }

  // When inbetween
  return props.currentPage - 1;
});

const pages = computed(() => {
  const range = [];

  for (
    let i = startPage.value;
    i <= Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages);
    i++
  ) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage,
    });
  }

  return range;
});

const isInFirstPage = computed(() => {
  return props.currentPage === 1;
});

const isInLastPage = computed(() => {
  return props.currentPage === props.totalPages;
});

const onClickFirstPage = () => {
  emit("pagechanged", 1);
};

const onClickPreviousPage = () => {
  emit("pagechanged", props.currentPage - 1);
};

const onClickPage = (page) => {
  emit("pagechanged", page);
};

const onClickNextPage = () => {
  emit("pagechanged", props.currentPage + 1);
};

const onClickLastPage = () => {
  emit("pagechanged", props.totalPages);
};

const isPageActive = (page) => {
  return props.currentPage === page;
};
</script>

<style scoped>
.activePage {
  background-color: blue;
  color: white;
}
</style>
