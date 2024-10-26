<template>
  <div class="max-w-2xl mx-auto p-4 bg-white">
    <!-- Search Bar -->
    <div class="relative mb-6">
      <div
        class="absolute inset-y-0 left-3 flex items-center pointer-events-none"
      >
        <svg
          class="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="search"
        placeholder="Search..."
        class="w-full py-2 pl-10 pr-4 rounded-full bg-gray-50 border-none focus:ring-0 focus:outline-none text-gray-600"
        v-model="searchQuery"
      />
    </div>
    <!-- Light Divider -->
    <div class="h-px bg-gray-100"></div>

    <!-- Company List -->
    <div class="divide-y divide-gray-100">
      <router-link
        v-for="company in filteredCompanies"
        :key="company.code"
        :to="`/details/company/${company.id}`"
        class="flex items-center space-x-4 py-4 hover:bg-gray-50 hover:px-2 transition-colors"
      >
        <!-- Company Logo/Initial -->
        <div v-if="company.logo" class="w-12 h-12 flex-shrink-0">
          <img
            :src="company.logo"
            :alt="company.name"
            class="w-full h-full object-contain"
          />
        </div>
        <div
          v-else
          class="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center text-xl font-semibold text-gray-600 cp-name"
        >
          {{ company.name[0] }}
        </div>

        <!-- Company Details -->
        <div class="flex-grow">
          <h3 class="text-gray-900 text-base font-normal cp-name">
            {{ company.name }}
          </h3>
          <p class="text-sm text-emerald-500 cp-name">{{ company.code }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const searchQuery = ref("");

const companies = ref([
  {
    name: "First Package",
    code: "FIRST",
    // logo: "/path/to/mutual-logo.png",
    id: 1,
  },
  {
    name: "Second Package ",
    code: "SECOND",
    id: 2,
  },
]);

const filteredCompanies = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return companies.value.filter(
    (company) =>
      company.name.toLowerCase().includes(query) ||
      company.code.toLowerCase().includes(query)
  );
});
</script>

<style scoped>
/* .cp-name {
  font-family: "Lato", sans-serif;
} */
</style>
