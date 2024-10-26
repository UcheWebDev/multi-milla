<template>
  <div class="max-w-md mx-auto p-4 bg-white">
    <!-- Fixed Header -->

    <!-- Main Content Area -->
    <div class="flex-1 overflow-y-auto pb-24 bg-white rounded-lg">
      <div class="p-4">
        <div class="bg-gray-50 rounded-lg p-6 mb-6 shadow-sm">
          <div class="text-center">
            <p class="text-gray-500 text-base mb-1">Withdrawable</p>
            <p class="text-xl flex items-center justify-center">
              <span class="text-gray-500 mr-1">₦</span>
              <span class="text-gray-900 font-normal">{{
                balance.toFixed(2)
              }}</span>
            </p>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <label class="block text-gray-400 mb-2">Amount</label>
            <input
              v-model="amount"
              type="number"
              class="w-full p-3 rounded-lg border-0 border-gray-100 bg-gray-100"
              placeholder="Enter amount"
            />
          </div>

          <div class="flex items-center text-gray-400 text-sm">
            <span>Transaction Fee = NGN {{ transactionFee.toFixed(2) }}</span>
            <button class="ml-2 text-blue-600">i</button>
          </div>

          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-gray-400">Bank Account</span>
              <button @click="openBankModal" class="text-red-500">
                Check available banks
              </button>
            </div>
            <div class="relative">
              <select
                v-model="selectedBank"
                class="w-full p-3 pr-10 rounded-lg border-0 border-gray-300 bg-gray-100 appearance-none text-gray-400"
              >
                <option value="">Select Bank Account</option>
                <option v-for="bank in banks" :key="bank.id" :value="bank.id">
                  {{ bank.name }}
                </option>
              </select>
              <div
                class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
              >
                <span class="material-icons text-gray-400"
                  >arrow_drop_down</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fixed Bottom Button -->
    <div class="fixed bottom-0 left-0 right-0 p-4">
      <div class="max-w-md mx-auto">
        <button
          :disabled="!amount || amount <= 0"
          :class="[
            'w-full p-4 rounded-lg text-white font-medium',
            amount > 0 ? 'bg-red-700' : 'bg-red-300',
          ]"
        >
          Withdraw
        </button>
      </div>
    </div>

    <!-- Bank Selection Modal -->
    <div
      v-if="showBankModal"
      class="fixed inset-0 bg-black bg-opacity-50 z-50"
      @click="closeBankModal"
    >
      <div
        class="absolute bottom-0 left-0 right-0 max-w-md mx-auto bg-white rounded-t-2xl p-4"
        @click.stop
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Select Bank</h2>
          <button @click="closeBankModal">
            <span class="material-icons text-gray-500">close</span>
          </button>
        </div>

        <!-- Search Input -->
        <div class="mb-4 relative">
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2">
            <span class="material-icons text-gray-400">search</span>
          </span>
          <input
            v-model="searchBank"
            type="text"
            placeholder="Search for a bank"
            class="w-full pl-10 pr-4 py-2 rounded-lg border-0 bg-gray-100"
          />
        </div>

        <!-- Bank List -->
        <div class="max-h-[400px] overflow-y-auto">
          <button
            v-for="bank in filteredBanks"
            :key="bank.id"
            @click="selectBank(bank)"
            class="w-full text-left p-3 hover:bg-gray-50 flex items-center space-x-3 border-b border-gray-100"
          >
            <span class="material-icons text-gray-400">account_balance</span>
            <span>{{ bank.name }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
// import { useRouter } from "vue-router";

// const router = useRouter();

// State
const balance = ref(0.0);
const amount = ref("");
const transactionFee = ref(0.0);
const showBankModal = ref(false);
const searchBank = ref("");
const selectedBank = ref("");
const banks = ref([
  { id: 1, name: "Access Bank" },
  { id: 2, name: "GTBank" },
  { id: 3, name: "First Bank" },
  { id: 4, name: "UBA" },
  { id: 5, name: "Zenith Bank" },
  { id: 6, name: "Kuda Bank" },
  { id: 7, name: "Wema Bank" },
  { id: 8, name: "Sterling Bank" },
]);

// Computed
const filteredBanks = computed(() => {
  return banks.value.filter((bank) =>
    bank.name.toLowerCase().includes(searchBank.value.toLowerCase())
  );
});

// Methods
const openBankModal = () => {
  showBankModal.value = true;
  searchBank.value = "";
};

const closeBankModal = () => {
  showBankModal.value = false;
};

const selectBank = (bank) => {
  selectedBank.value = bank.id;
  closeBankModal();
};
</script>

<style scoped>
.overflow-y-auto {
  scrollbar-width: thin;
  scrollbar-color: #cbd5e0 #f7fafc;
}

.overflow-y-auto::-webkit-scrollbar {
  width: 6px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f7fafc;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background-color: #cbd5e0;
  border-radius: 3px;
}

h1,
label,
button {
  font-family: "Lato", sans-serif;
}
</style>
