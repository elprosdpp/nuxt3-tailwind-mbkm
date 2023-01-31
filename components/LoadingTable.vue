<template>
  <div>
    <table class="w-full text-sm text-left text-gray-500">
      <thead class="border text-xs text-gray-700 uppercase">
        <tr>
          <th scope="col" class="px-6 py-3">No</th>
          <th scope="col" class="px-6 py-3">Nama File</th>
          <th scope="col" class="px-6 py-3">Deskrisi</th>
          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border" v-for="n in 10" :key="n">
          <th scope="row" class="px-6 py-4 whitespace-wrap">
            <div class="w-1/2 rounded-lg h-5 mb-2 skeleton-loader"></div>
          </th>
          <td class="px-6 py-4">
            <div class="rounded-lg h-5 mb-2 skeleton-loader"></div>
          </td>
          <td class="px-6 py-4">
            <div class="rounded-lg h-5 mb-2 skeleton-loader"></div>
          </td>
          <td class="px-6 py-4">
            <div class="w-full rounded-lg h-5 mb-2 skeleton-loader"></div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup></script>

<style>
:root {
  --loading-grey: #ededed;
}

.skeleton-loader {
  cursor: progress;
  display: block;
  background-color: var(--loading-grey);
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    var(--loading-grey);
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: shine 2s infinite;
}
@keyframes shine {
  to {
    background-position-x: -20%;
  }
}
</style>
