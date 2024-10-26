<template>
    <div class="flex flex-col items-center">
      <div
        class="w-12 h-12 bg-white rounded-sm flex items-center justify-center mb-1 "
      >
        <span class="material-icons w-6 h-6 text-red-600">{{ icon }}</span>
      </div>
      <span class="text-xs mt-2">{{ label }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: "QuickAction",
    props: {
      icon: {
        type: String,
        required: true,
      },
      label: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  