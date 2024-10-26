<template>
  <div class="max-w-2xl mx-auto p-4">
    <!-- Header Card -->
    <!-- <div
      class="bg-violet-600 rounded-xl p-6 text-white mb-8 relative overflow-hidden"
    >
      <div class="relative z-10">
        <h1 class="text-3xl font-bold mb-3">Targets</h1>
        <p class="text-lg opacity-90">
          Save with discipline towards a specific target.
        </p>
        <div class="mt-4 bg-white/20 inline-block px-4 py-2 rounded-full">
          <p class="text-sm">
            <span class="material-icons-outlined align-middle text-sm mr-1"
              >verified</span
            >
            Powered by BlueRidge Microfinance Bank
          </p>
        </div>
      </div>
      <div class="absolute right-4 top-1/2 -translate-y-1/2">
        <div
          class="w-20 h-20 bg-amber-400 rounded-full flex items-center justify-center"
        >
          <div
            class="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center"
          >
            <div
              class="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center"
            >
              <span class="material-icons text-violet-600">gps_fixed</span>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Features List -->
    <div class="space-y-6">
      <div
        v-for="(feature, index) in features"
        :key="index"
        class="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <div
          class="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center py-4 px-4"
        >
          <span class="material-icons text-red-600">{{ feature.icon }}</span>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2">{{ feature.title }}</h2>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <!-- Fixed Bottom Button -->
    <div class="fixed bottom-0 left-0 right-0 p-4">
      <div class="max-w-md mx-auto">
        <button
          :class="['w-full p-4 rounded-lg text-white font-medium bg-red-700']"
        >
          Invest
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  {
    icon: "payments",
    title: "Interest Yield",
    description:
      "₦300,000 and below: 15% p.a. Over ₦300,000: the first ₦300,000 at 15% p.a., the remaining balance at 6% p.a.",
  },
  {
    icon: "schedule",
    title: "Savings Duration",
    description: "One to twelve months.",
  },
  {
    icon: "account_balance_wallet",
    title: "Withdrawal",
    description:
      "You can withdraw anytime, but doing so before maturity means losing accrued interest and being charged a break fee.",
  },
];
</script>
