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
  active: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <button
    :class="`flex flex-col items-center ${
      active ? 'text-red-500' : 'text-gray-600'
    }`"
  >
    <span class="material-icons text-xl mb-1">{{ icon }}</span>
    <span class="text-xs">{{ title }}</span>
  </button>
</template>
