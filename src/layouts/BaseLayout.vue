<!-- ReusableLayout.vue -->
<template>
  <div class="flex justify-center bg-gray-100 min-h-screen">
    <div class="max-w-md w-full h-screen flex flex-col">
      <!-- Fixed Header -->
      <header
        class="bg-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-10 max-w-md mx-auto"
      >
        <button v-if="!isBaseRoute" class="text-dark" @click="goBack">
          <span class="material-icons text-dark">arrow_back</span>
        </button>
        <button v-else class="text-dark">
          <span class="material-icons text-dark">menu</span>
        </button>

        <h1 class="text-dark text-xl font-semibold">{{ pageTitle }}</h1>
        <img src="/logo-placeholder.png" alt="Bank Logo" class="h-8 w-8" />
      </header>

      <!-- Scrollable Content Area -->
      <main class="flex-1 overflow-y-auto pt-16 pb-20">
        <router-view />
      </main>

      <!-- Fixed Bottom Navigation -->
      <nav
        class="fixed bottom-0 left-0 right-0 bg-white border-t z-10 max-w-md mx-auto"
      >
        <div class="flex justify-around p-4">
          <NavItem
            v-for="item in navItems"
            :key="item.title"
            :icon="item.icon"
            :title="item.title"
            :active="item.title === activeTab"
            @click="setActiveTab(item.title)"
          />
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import NavItem from "@/components/NavItem.vue";

// Retrieve the dynamic page title from route meta
const route = useRoute();
const router = useRouter();

const pageTitle = computed(() => route.meta.title || "Default Title");
const isBaseRoute = ref(route.path === "/");

const activeTab = ref("Overview");

const navItems = ref([
  { title: "Overview", icon: "dashboard" },
  { title: "Airtime", icon: "smartphone" },
  { title: "Transfer", icon: "swap_horiz" },
  { title: "Bills", icon: "receipt_long" },
]);

const setActiveTab = (tab) => {
  activeTab.value = tab;
};

const goBack = () => {
  router.back();
};

// Watch for route changes to update the base route condition
watch(
  () => route.path,
  (newPath) => {
    isBaseRoute.value = newPath === "/";
  }
);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");

h1,
.show-txt,
h2,
h3,
.btn-txt {
  font-family: "Lato", sans-serif;
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  display: inline-block;
  white-space: nowrap;
}

main::-webkit-scrollbar {
  display: none;
}

main {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
