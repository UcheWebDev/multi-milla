<template>
  <div class="max-w-md mx-auto p-4 bg-white">
    <!-- Header -->
    <!-- <div class="relative flex items-center justify-between mb-8">
        <button class="">
          <span class="material-icons text-black">arrow_back</span>
        </button>
        <h1
          class="absolute left-1/2 transform -translate-x-1/2 text-2xl font-bold text-navy-900"
        >
          Airtime
        </h1>
      </div> -->

    <!-- Form -->
    <form @submit.prevent="handleSubmit" class="space-y-6">
      <!-- Network Provider -->
      <div class="space-y-2">
        <label class="block text-gray-500">Select Network Provider</label>
        <div class="relative">
          <select
            v-model="provider"
            class="w-full p-3 pr-10 rounded-lg border-0 border-gray-300 bg-gray-100 appearance-none text-gray-400"
          >
            <option value="">Select Bank Account</option>
            <option
              v-for="provider in providers"
              :key="provider"
              :value="provider"
            >
              {{ provider }}
            </option>
          </select>
          <div
            class="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
          >
            <span class="material-icons text-gray-400">arrow_drop_down</span>
          </div>
        </div>

        <!-- <select
            v-model="provider"
            class="w-full p-3 bg-gray-50 rounded-lg border border-gray-200"
          >
            <option value="" disabled>Select Provider</option>
            <option
              v-for="provider in providers"
              :key="provider"
              :value="provider"
            >
              {{ provider }}
            </option>
          </select> -->
      </div>

      <!-- Phone Number -->
      <div class="space-y-2">
        <label class="block text-gray-500">Phone Number</label>
        <div
          class="flex items-center bg-gray-50 rounded-lg border-gray-100 bg-gray-50"
        >
          <div class="flex items-center px-3 gap-2">
            <img src="../assets/flag.svg" alt="Nigeria flag" class="w-6 h-4" />
            <span>+234</span>
          </div>
          <input
            type="tel"
            v-model="phoneNumber"
            placeholder="Enter Phone Number"
            class="flex-1 p-3 border-gray-100 bg-gray-100"
          />
          <button class="px-3">
            <span class="material-icons">compare_arrows</span>
          </button>
        </div>
      </div>

      <!-- Amount -->
      <div class="space-y-6">
        <label class="block text-gray-500">Amount</label>
        <input
          type="number"
          v-model="customAmount"
          placeholder="Enter Amount"
          class="w-full p-3 bg-gray-100 rounded-lg border-gray-100 mb-4"
        />
        <div class="grid grid-cols-4 gap-3">
          <button
            v-for="amount in predefinedAmounts"
            :key="amount"
            type="button"
            @click="selectAmount(amount)"
            class="py-3 px-3 p-2 bg-gray-50 rounded-lg text-center hover:bg-gray-100"
          >
            <span class="text-xs align-top">₦</span
            >{{ amount.toLocaleString() }}
          </button>
        </div>
      </div>

      <!-- Payment Method -->
      <div class="space-y-2">
        <label class="block text-gray-500">Payment Method</label>
        <button
          type="button"
          class="w-full p-3 rounded-lg border-gray-100 bg-gray-100 text-left"
        >
          Naira Wallet
        </button>
      </div>

      <!-- Total -->
      <div class="bg-blue-50 p-4 rounded-lg flex justify-between items-center">
        <span class="text-gray-600">Total:</span>
        <span class="font-semibold"
          >NGN {{ totalAmount.toLocaleString() }}</span
        >
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="!isFormValid"
        class="w-full p-4 text-white rounded-lg bg-red-600"
      >
        Buy
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const providers = ["MTN", "Airtel", "Glo", "9mobile"];
const predefinedAmounts = [100, 200, 500, 1000, 2000, 5000, 10000, 20000];

const provider = ref("");
const phoneNumber = ref("");
const customAmount = ref("");
const totalAmount = computed(() => Number(customAmount.value) || 0);

const isFormValid = computed(() => {
  return provider.value && phoneNumber.value && totalAmount.value > 0;
});

const selectAmount = (amount) => {
  customAmount.value = amount;
};

const handleSubmit = () => {
  if (!isFormValid.value) return;

  console.log({
    provider: provider.value,
    phoneNumber: phoneNumber.value,
    amount: totalAmount.value,
  });
};
</script>

<style scoped>
h1,
label,
button {
  font-family: "Lato", sans-serif;
}
</style>
