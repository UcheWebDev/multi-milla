<!-- AirtimePage.vue -->
<template>
  <!-- Balance Card -->
  <div class="p-4 bg-white">
    <div class="bg-red-600 p-4 text-white">
      <h2 class="text-sm mb-2 tot-bal">TOTAL BALANCE</h2>
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <span class="mr-2">₦</span>
          <span v-if="!showBalance">*****</span>
          <span v-else>{{ balance }}</span>
        </div>
        <button @click="toggleBalance" class="flex items-center">
          <span class="mr-2 show-txt">View </span>
          <div
            :class="[
              'w-12 h-6 rounded-full p-1',
              showBalance ? 'bg-green-400' : 'bg-gray-300',
            ]"
          >
            <div
              :class="[
                'w-4 h-4 rounded-full bg-white transform transition-transform',
                showBalance ? 'translate-x-6' : '',
              ]"
            ></div>
          </div>
        </button>
      </div>
    </div>
  </div>

  <!-- Account Info -->
  <div class="px-4 bg-white">
    <!-- Account Details Card -->
    <div class="">
      <div class="bg-white border-b border-gray-200 p-4 rounded-lg">
        <p class="text-gray-600 text-sm">2116986634 - ACTIVE</p>
        <h3 class="text-lg font-medium mt-1">CHUKWUMA PATRICK OLISA</h3>
        <div class="flex justify-between items-center mt-2">
          <span v-if="!showBalance" class="text-lg">₦ *****</span>
          <span v-else class="text-lg">₦ {{ accountBalance }}</span>
          <button @click="toggleBalance" class="text-sm text-gray-600 btn-txt">
            View
            <span class="material-icons align-middle text-base ml-1"
              >visibility</span
            >
          </button>
        </div>
      </div>

      <!-- Ledger Balance Section -->
      <!-- <div
        class="border-b border-gray-200 p-4 flex justify-between items-center bg-gray-50"
      >
        <span class="text-gray-600 show-txt">Ledger Balance: Hidden</span>
        <button class="text-gray-600 flex items-center">
          <span class="material-icons">history</span>
          <span class="ml-1 show-txt">History</span>
        </button>
      </div> -->

      <!-- eaZyLinks Section -->
      <div class="p-4 mt-4 bg-white rounded-lg">
        <!-- <h3 class="text-lg font-medium mb-4">Quick Links</h3> -->
        <div class="grid grid-cols-4 gap-4 mb-6">
          <QuickLink
            v-for="link in quickLinks"
            :key="link.title"
            :icon="link.icon"
            :title="link.title"
            :path="link.path"
          />
        </div>
      </div>

      <!-- Early Closure Notice -->
      <!-- <div class="border-t border-gray-200 p-4">
        <div class="bg-gray-100 rounded-lg p-4 flex items-center">
          <span class="material-icons text-red-500 mr-2">warning</span>
          <div>
            <h4 class="font-medium">Notice of</h4>
            <p class="text-red-500 font-bold">EARLY CLOSURE</p>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
/*eslint-disable*/
import { ref } from "vue";
import QuickLink from "@/components/QuickLink.vue";
import NavItem from "@/components/NavItem.vue";

const showBalance = ref(false);
const balance = ref("250,000.00");
const accountBalance = ref("150,000.00");
const activeTab = ref("Overview");

const quickLinks = ref([
  { title: "Airtime", icon: "phone", path: "/merchant/airtime" },
  { title: "Data", icon: "wifi", path: "/data" },
  // { title: "Cable TV", icon: "tv" },
  // { title: "Electricty", icon: "bolt" },
  { title: "Finance", icon: "account_balance", path: "finance" },
  { title: "Settings", icon: "settings", path: "/settings" },
  { title: "Withdraw", icon: "wallet", path: "/payout" },
]);

const navItems = ref([
  { title: "Overview", icon: "dashboard" },
  { title: "Airtime", icon: "smartphone" },
  { title: "Transfer", icon: "swap_horiz" },
  { title: "Bills", icon: "receipt_long" },
]);

const toggleBalance = () => {
  showBalance.value = !showBalance.value;
};

const setActiveTab = (tab) => {
  activeTab.value = tab;
};
</script>

<style scoped>
h1,
.show-txt,
.tot-bal,
.btn-txt {
  font-family: "Lato", sans-serif;
}
</style>
