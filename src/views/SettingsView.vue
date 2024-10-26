<template>
  <div class="max-w-md mx-auto p-4">
    <!-- Settings Menu Items -->
    <div class="space-y-3">
      <div
        v-for="item in menuItems"
        :key="item.id"
        class="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
      >
        <div class="flex items-center gap-4">
          <div class="w-8 h-8 flex items-center justify-center text-gray-600">
            <span class="material-symbols-outlined">{{ item.icon }}</span>
          </div>
          <div>
            <h2 class="text-lg font-semibold text-navy-900 it-text">
              {{ item.title }}
            </h2>
            <p class="text-gray-500 text-sm it-des">{{ item.description }}</p>
          </div>
        </div>
        <span class="material-symbols-outlined text-gray-400"
          >chevron_right</span
        >
      </div>
    </div>

    <!-- Logout Button -->
    <button
      class="w-full mt-8 py-3 px-4 rounded-lg text-white font-medium bg-red-600 hover:bg-white-50 transition-colors border border-gray-20"
      @click="handleLogout"
    >
      Logout
    </button>

    <p class="text-center text-gray-400 text-sm mt-8 app-ver">
      App edition {{ appVersion }}
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const appVersion = ref("7.2.261");

const menuItems = ref([
  {
    id: 1,
    title: "Security Settings",
    description: "App security and passwords.",
    icon: "shield",
  },
  {
    id: 2,
    title: "Tutorials",
    description: "Tutorial videos and tips.",
    icon: "play_circle",
  },
  {
    id: 4,
    title: "Services Status",
    description: "Available and unavailable services.",
    icon: "info",
  },
  {
    id: 5,
    title: "Rate App",
    description: "Rate us across platforms.",
    icon: "rocket",
  },
]);

const handleLogout = () => {
  // Add logout logic here
  console.log("Logging out...");
};
</script>

<style>
/* Import Google Material Icons */
/* @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"); */

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

.it-text, .app-ver {
  font-family: "Lato", sans-serif;
}
</style>
