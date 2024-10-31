<script setup>
/*eslint-disable*/
import { defineProps } from "vue";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  path: {
    type: String,
  },
});
</script>

<template>
  <div class="flex flex-col items-center">
    <!-- Icon inside router-link -->
    <router-link
      :to="path"
      class="flex flex-col items-center px-4 p-2 bg-red-50 text-gray-600 hover:bg-gray-50 transition-colors"
    >
      <span class="material-icons text-2xl mb-1 text-red-500">{{ icon }}</span>
    </router-link>

    <!-- Title outside the router-link -->
    <span class="text-xs text-center mt-1 a">{{ title }}</span>
  </div>
</template>

<style scoped>
.a {
  font-family: "Lato", sans-serif;
}
</style>
