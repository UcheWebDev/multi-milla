<template>
  <div class="max-w-md mx-auto p-4">
    <!-- Header with back button -->
    <div class="mb-6 flex items-center">
      <button class="text-red-600 p-2" @click="handleBack">
        <span class="material-symbols-outlined">arrow_back</span>
      </button>
      <h1 class="text-2xl font-bold text-gray-900 ml-4">Feature List</h1>
    </div>

    <!-- Search Bar -->
    <div class="mb-6">
      <div class="relative">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search"
          class="w-full px-4 py-3 bg-gray-50 rounded-xl text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span
          class="material-symbols-outlined absolute right-4 top-1/2 transform -translate-y-1/2 text-red-400"
        >
          search
        </span>
      </div>
    </div>

    <!-- Feature Items -->
    <div class="space-y-4">
      <div
        v-for="feature in filteredFeatures"
        :key="feature.name"
        class="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
        @click="handleFeatureClick(feature)"
      >
        <div
          class="w-10 h-10 rounded-full bg-red-200 flex items-center justify-center mr-4"
        >
          <span class="material-symbols-outlined text-red-700">{{
            feature.icon
          }}</span>
        </div>
        <span class="text-gray-900 font-medium">{{ feature.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
// Features data
const features = ref([
  {
    name: "Buy Airtime",
    icon: "smartphone",
    action: () => console.log("Buy Airtime clicked"),
  },
  {
    name: "Sell Airtime",
    icon: "phone_android",
    action: () => console.log("Sell Airtime clicked"),
  },
  {
    name: "Buy Data",
    icon: "wifi",
    action: () => console.log("Buy Data clicked"),
  },
  {
    name: "Pay Cable TV",
    icon: "tv",
    action: () => console.log("Pay Cable TV clicked"),
  },
  {
    name: "Pay Eletricity ",
    icon: "bolt",
    action: () => console.log("Pay Cable TV clicked"),
  },
]);

// Search functionality
const searchQuery = ref("");

const filteredFeatures = computed(() => {
  return features.value.filter((feature) =>
    feature.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Event handlers
const handleBack = () => {
  router.back();
};

const handleFeatureClick = (feature) => {
  feature.action();
  // Add your navigation or modal logic here
};

// You can define emits if needed
// defineEmits(['back', 'featureClick'])

// You can define props if needed
// defineProps({
//   title: String
// })
</script>
